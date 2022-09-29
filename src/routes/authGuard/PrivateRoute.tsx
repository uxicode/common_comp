import React, { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import authAtom from '@/recoil/auth/authAtom';

interface PrivateRouteProps {
    children ?: ReactElement; // Router.tsx에서 PrivateRoute가 감싸고 있는 Componet Element
    authentication : boolean; // true :인증을 반드시 해야하만 접속가능, false : 인증을 안해도 접속 가능
}

export default function PrivateRoute({authentication, children}:PrivateRouteProps):React.ReactElement|null {

    /**
     * 로그인 했는지 여부
     * 로그인 했을 경우 : true 라는 텍스트 반환
     * 로그인 안했을 경우 : null or false(로그아웃 버튼 눌렀을경우 false로 설정) 반환
     */
        // const isAuthenticated = sessionStorage.getItem('isAuthenticated');


        // console.log('useAuth.user=', useAuth.user );
        // const getAuth=useAuth();
    const getAuth=useRecoilValue( authAtom );

    if(authentication) {
        // 인증이 반드시 필요한 페이지

        // console.log('PrivateRoute=', getAuth );
        // console.log('PrivateRoute useAuth.user=', useAuth.user );
        // 인증을 안했을 경우 로그인 페이지로, 했을 경우 해당 페이지로
        // return (isAuthenticated === null ) ? <Navigate to='/login'/> : <Outlet/>;
        return (getAuth === null) ? <Navigate to='/login'/> : <Outlet />;

    } else {
        // 인증이 반드시 필요 없는 페이지
        // return (isAuthenticated === null ) ? <Outlet/> : <Navigate to='/'/>;
        // 인증을 안햇을 경우 해당 페이지로 인증을 한 상태일 경우 main페이지로
        return (getAuth === null ) ? <Outlet/> : <Navigate to='/'  replace/>;
    }
}
