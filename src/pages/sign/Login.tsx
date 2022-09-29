import React, { useCallback, useRef, useState } from 'react';
// import { useAuth } from '@/core/auth/AuthProvider';
// import { useNavigate } from 'react-router-dom';

//React 가 최근 v.17로 변경되면서 runtime 엔진이 emotion 과 충돌되는 이슈가 있다고 한다 아래 구문 추가
import { css } from '@emotion/react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useLoggedInActions } from '@/recoil/auth/useLoggedInActions';
import TxtField from '@/components/form/input/TxtField';
import Btn from '@/components/button/Btn';
import IconBtn from '@/components/button/IconBtn';
import Checkbox from '@/components/form/check/Checkbox';


/*const Div: JSX.IntrinsicElements['div']=<div></div>;
console.log( Div );*/
const Login=()=>{

    const loginForm=css`
      position: absolute;
      width: 500px;
      padding:10px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `

    const loginTit=css`
      font-size: 30px;
      color: #d9dadd;
      padding-bottom: 60px;
    `


    // const getAuth=useAuth();
    // const navigate=useNavigate();

    // useAuth.login( 'abccccc' );
    // console.log( useAuth.user );
    const navigate=useNavigate();
    const [userId, setUserId]=useState('');
    const [userPw, setUserPw]=useState('');

    const authActions = useLoggedInActions();

    const onIDChangeHandler=useCallback((value:string): void =>{
        setUserId(value)
    }, [userId] );

    const onPWChangeHandler=useCallback((value:string): void =>{
        setUserPw(value)
    }, [userPw] );



    const eleRef = useRef<HTMLAnchorElement>(null);
    const loginClickHandler=()=>{
        /*sessionStorage.setItem('isAuthenticated', 'true');
        navigate( '/');*/
        // console.log( userId, userPw );
        authActions.login({userId, userPw})
            .then(()=>{
                navigate( '/' );
            })
            .catch((err)=>{
                console.log( err );
            });

        /*if (eleRef.current) {
            eleRef.current.href="http://www.naver.com";
        }*/

        // getAuth.login( 'isAuthenticated' );
        // navigate( '/', {replace: true});
        // console.log('authCheck=', getAuth.user );
    }




    return (
        <div css={ loginForm }>
            <div className="form-cnt">
                <h2 css={ loginTit }>
                    Dongnepedia<br/>
                    APP Admin
                </h2>
                <div className="form-input">
                    <div className="form-group">

                        <TxtField
                            inputType="search"
                            label="ID"
                            size="400px"
                            color="#ffffff"
                            variant="filled"
                            placeholder="아이디를 입력해 주세요"
                            handler={ onIDChangeHandler }/>
                    </div>

                    <div className="form-group">
                        <TxtField inputType="password"
                                  color="#ffffff"
                                  size="400px"
                                  label="Password"
                                  variant="underline"
                                  placeholder="비밀번호를 입력해 주세요"
                                  handler={ onPWChangeHandler }/>
                    </div>

                    <div className="login-btn d-grid mgt-35" >
                        {/*<button type="button" className="btn btn-primary">Login</button>*/ }
                        <Btn addClass="login-btn" size="400px" handler={ loginClickHandler} >로그인 버튼</Btn>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;
