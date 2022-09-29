import AuthConfig from '@/core/auth/config';

// 로그인한 user 정보 및 token  가져오기
export const isUserLoggedIn=()=>{
    return localStorage.getItem( AuthConfig.ME_KEY ) && localStorage.getItem( AuthConfig.TOKEN_KEY );
};

export const isUser=()=>{
    return localStorage.getItem( AuthConfig.ME_KEY );
};

// token  가져오기
export const getToken=()=>{
    return localStorage.getItem( AuthConfig.TOKEN_KEY );
};
// refresh token  가져오기
export const getRefreshToken=()=>{
    return localStorage.getItem( AuthConfig.REFRESH_TOKEN_KEY );
};

// 로그인한 user 의 authorities  정보 가져오기
export const getAuthority=()=>{
    const info=localStorage.getItem( AuthConfig.ME_KEY );
    return ( JSON.parse( info as string ) ).authorities;
};
