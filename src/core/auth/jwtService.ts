
import AuthConfig from '@/core/auth/config';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken } from '@/core/auth/utils';

export default class JwtService{

    private readonly axiosInstance: AxiosInstance;
    //대기요청 상태인지 체크 toggle 변수
    private isTokenRefreshCheck=false;
    //콜백함수 타입의 배열
    private refreshSubscribers: Array<(token: string)=>void>=[];

    constructor(axiosInstance: AxiosInstance) {

        this.axiosInstance=axiosInstance;

        /**
         * request interceptor
         */
        this.axiosInstance.interceptors.request.use( (config:AxiosRequestConfig)=>{
            const token=getToken();
            //토큰이 localstorage 에 있을 때만 header 에 토큰을 심어둔다.
            // console.log( 'interceptors.request=', token );
            if (token) {
                //config.headers.Authorization 과 axios.defaults.headers.common.Authorization 은 서로 다르다.
                // config.headers!.Authorization=`${AuthConfig.TOKEN_TYPE}${token}`;
                config.headers={
                    Authorization:`${AuthConfig.TOKEN_TYPE}${token}`
                };
            }
            return config;
        }, (error)=>{
            console.log( 'interceptors.request=' + error );
            return Promise.reject( error );
        } );


        /**
         * response interceptor
         */
        this.axiosInstance.interceptors.response.use( (response: AxiosResponse)=>{
            return response;
        }, async (error)=>{
            // console.log('인터셉터 error.response 상태=',  error.response );
            const { status,  config, data }=error.response;
            const responseConfig=config;

            const token=getToken();

            if(status === 401 ){
                //로그인 실패시~
                if (String( config.url ).includes( 'auth/login' ) && data.code === 700) {
                    // store.commit( `Auth/${ UserMutationType.LOG_IN }`, false );
                   // 611 : 접속 토큰 만료 >> '내부적으로 토큰 갱신'
                    //612 : 토큰 손상 >> '에러'
                    // 토큰 갱신 할 때
                    //613 : 갱신 토큰 만료 >> '화면 이동 (로그인)'
                }else if(data.code===611){
                    if (!this.isTokenRefreshCheck) {
                        // isTokenRefreshing 이 false 인 경우에만 token refresh 요청
                        this.isTokenRefreshCheck=true;

                        /* 리프래시토큰 재발행 api
                        AuthService.fetchRefreshToken().then( (res: any)=>{
                            this.isTokenRefreshCheck=false;
                            const { accessToken, refreshToken }=res;
                            this.setTokens( accessToken, refreshToken );

                            setTimeout( async ()=>{
                                // 새로운 토큰으로 지연되었던 요청 진행
                                await this.getTokenRefreshed( accessToken );
                                //저장 배열 초기화
                                await this.removeRefreshSubscribers();
                            }, 700 );
                        } ).catch( (error: any)=>{
                            const { code, message, status }=error.data;
                            // console.log( error, code, message );
                            // refresh token 정보도 만료 되었을 때 로그인 페이지로 보낸다.
                            if (status === 401 && message === 'token expired') {
                                alert( '사용자 정보가 만료되었습니다.\\n 다시 로그인 해주세요' );
                                //로그아웃
                                this.shouldUnAuthorized();
                            }
                        } );*/

                    }

                    //  token 이 재발급 되는 동안의 요청은 refreshSubscribers 에 저장
                    return new Promise( (resolve)=>{
                        //getTokenRefreshed 에서 전달된 token 을  내부에서 refreshSubscribers( 콜백함수 저장한 배열 ) 를 forEach 로 순환 대입( 전달된 token) 실행시킨다.
                        this.addRefreshSubscriber( (token: string)=>{
                            // console.log('shouldFetchPendingAPICall=', token );
                            // config.headers.Authorization = `Bearer ${token}`;
                            responseConfig.headers.Authorization=`${ AuthConfig.TOKEN_TYPE }${ token }`;
                            resolve( this.axiosInstance( responseConfig ) );
                        } );
                    } );
                }else if (data.code === 613) { //613 : 갱신 토큰 만료 >> '화면 이동 (로그인)'
                    alert( '사용자 정보가 만료되었습니다. 로그인 해 주세요~' );
                    //로그아웃 시키기.
                    await this.shouldUnAuthorized();
                }else if (data.code === 612) {
                    alert( '인증되지 않은 사용자 입니다. 로그인 해 주세요~' );
                    await this.shouldUnAuthorized();
                }
            }
            // Do something with response error
            return Promise.reject( error );
        } );
    }


    /**
     * 새로 발급 받는 token 재지정.
     * @param token
     * @param refreshToken
     */
    public async setTokens( token: string, refreshToken: string){
        // header 에 재발급된 token 을 심어놔야 한다. ---> TokenMutationType.GET_TOKEN 내부에  AuthService.setAuthToken(this.token) 가 그 역활을 하고 있다.
        // await store.commit( `Auth/${ TokenMutationType.GET_TOKEN }`, accessToken );
        // await store.commit( `Auth/${ TokenMutationType.GET_REFRESH_TOKEN }`, refreshToken );

        //await store.dispatch( `Auth/${ TokenActionType.SIGN_IN_BY_TOKEN }`, { token, refreshToken } );
        //토큰, 리프래시토큰 저장시키기
    }

    /**
     * 콜백함수 타입의 배열 초기화
     */
    private removeRefreshSubscribers(){
        this.refreshSubscribers=[];
    }

    /**
     * 실행 콜백함수 배열 대입.
     * @param callback
     */
    private addRefreshSubscriber( callback: (token: string)=> void){
        this.refreshSubscribers.push( callback );
    }

    /**
     * 배열에 저장된 콜백함수( addRefreshSubscriber ) 실행.
     * @param token
     */
    private getTokenRefreshed(token: string){
        this.refreshSubscribers.forEach( (callback: (token: string)=>void)=>callback( token ) );
    }

    /**
     * 로그아웃 시키기
     */
    private shouldUnAuthorized(){
        ///login?rPath=${encodeURIComponent(location.pathname)}
        // store.commit( `Auth/${ UserMutationType.LOGOUT }` );
        /*router.push( { path: '/login', query:{rPath:new Date().getTime().toString()}} )
            .then( ()=>{
                console.log( '로그아웃' );
            } );*/
        //로그아웃 naviate('/login' )
    }
}
