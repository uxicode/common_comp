import axios, {
    AxiosAdapter, AxiosBasicCredentials, AxiosError, AxiosProxyConfig,
    AxiosRequestConfig,
    AxiosRequestHeaders,
    AxiosRequestTransformer, AxiosResponse,
    AxiosResponseTransformer, CancelToken,
    Method, ResponseType, TransitionalOptions
} from 'axios';
import JwtService from '@/core/auth/jwtService';

// dev.dongnepedia.kr/swagger
// import router from '@/router';

////.env 파일 환경 변수는 무조건 REACT_APP_ 이라는 prefix 가 서두에 붙어야 한다.
// axios.defaults.baseURL=process.env.VUE_APP_API_BASE_URL;
// axios.defaults.headers.post['Content-Type']='application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin']='*';
console.log( 'process.env.REACT_APP_API_BASE_URL=', process.env.REACT_APP_API_BASE_URL );
const axiosInstance=axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});


//json web token 설정.
const jwt=new JwtService( axiosInstance );

/*export interface AxiosRequestConfig<D = any> {
    url?: string;
    method?: Method | string;
    baseURL?: string;
    transformRequest?: AxiosRequestTransformer | AxiosRequestTransformer[];
    transformResponse?: AxiosResponseTransformer | AxiosResponseTransformer[];
    headers?: AxiosRequestHeaders;
    params?: any;
    paramsSerializer?: (params: any) => string;
    data?: D;
    timeout?: number;
    timeoutErrorMessage?: string;
    withCredentials?: boolean;
    adapter?: AxiosAdapter;
    auth?: AxiosBasicCredentials;
    responseType?: ResponseType;
    responseEncoding?: responseEncoding | string;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
    onUploadProgress?: (progressEvent: any) => void;
    onDownloadProgress?: (progressEvent: any) => void;
    maxContentLength?: number;
    validateStatus?: ((status: number) => boolean) | null;
    maxBodyLength?: number;
    maxRedirects?: number;
    beforeRedirect?: (options: Record<string, any>, responseDetails: {headers: Record<string, string>}) => void;
    socketPath?: string | null;
    httpAgent?: any;
    httpsAgent?: any;
    proxy?: AxiosProxyConfig | false;
    cancelToken?: CancelToken;
    decompress?: boolean;
    transitional?: TransitionalOptions;
    signal?: AbortSignal;
    insecureHTTPParser?: boolean;
    env?: {
        FormData?: new (...args: any[]) => object;
    };
}*/
// reqCall 인자값이 필요한 이유는 최종 데이터 리턴으로 받을 때 순수하게 response 값을 받아야 할 때가 있다
//( 예 파일 다운로드 할때- response 의 content-disposition 와  content-type 이 필요로 하기에 순수하게 response 를 넘겨줘야 한다.
const request=async (method: string, url: string, data: object | null=null, reqCall: boolean | null=null)=>{
    // console.log( 'data status=', method, data, url );
    //로딩 바 노출
    // store.commit( `Auth/${ LoadingMutationType.IS_LOADING }`, true );
    let reqObj: AxiosRequestConfig ////Partial<AjaxType>;

    if (method === 'get') {
        reqObj=(data !== null) ? { method, url, params: data } : { method, url };
    } else if (method === 'upload') {
        reqObj={
            url,
            data,
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data;charset=utf-8;'
            }
        };
    } else {
        //method 가 post 이면서 파일 다운로드 형식일 때
        if (reqCall !== null && method === 'post') {
            reqObj={
                method,
                url,
                data,
                responseType: 'blob'  // 파일 다운로드시 중요.
            };
        } else {
            reqObj={ method, url, data };
        }
    }
    try {
        const res=await axiosInstance( reqObj );
        return (reqCall !== null) ? res : res.data;
    } catch (error: AxiosError | unknown) {
        //로딩 바 숨김.
        // store.commit( `Auth/${ LoadingMutationType.IS_LOADING }`, false );
        //여기서 별도로 error.response 를 넘겨 줘야 각 api 호출시 catch 부분에서 error 의 인자값을 확인할 수 있다.
        // console.log(error instanceof AxiosError);
        if (error instanceof AxiosError && error.response) {
            console.log( error.response.status, error.response.data.message );
        }
        throw error;
        /*if (status === 502 || status === 500)  {
            // alert( '서버와의 연결에 문제가 발생하였습니다.\n'+'새로고침 후 재접속 부탁드립니다.' );
            store.commit( `Alert/${ AlertMutationTypes.SERVER_ERROR }`, true );
        }else if (status === 404) {
            store.commit( `Alert/${ AlertMutationTypes.NOT_FOUND }`, true );
            // alert( '요청하신 페이지를 찾을 수 없습니다.' );
        }*/

    }
};

export { request };
