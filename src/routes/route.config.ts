export enum BaseURL{
    LOGIN='/login',
    USERS='/users',
}


export class RouteConfig{
    public static LOGIN: string=`${BaseURL.LOGIN}`;  //로그인
    public static USERS: string=`${BaseURL.USERS}`; // 회원정보관리
}
