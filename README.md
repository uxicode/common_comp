# side project 공통컴포넌트 

## 프로젝트 구성
- Node : v16.15.0
- 언어 : Typescript / HTML5 / SCSS
- SPA 프레임워크 : React (v18.x)
- 스타일 : @emotion/react
- 라우팅 : react-router-dom (v6)
- 상태 관리 : recoil
- API 통신 : axios
- 단위 테스트 : jest

------------------

## 프로젝트 관련 명령어

### 프로젝트 설치
```
npm install
```

### 컴파일 및 핫리로딩 (개발 버전)
```
npm start
```

### 테스트
```
npm test
```

### 컴파일 및 소스 압축
```
npm run build
```

### 간단한 로그인 테스트를 위한 로컬 서버 구동
```
npm run auth
```

### 스토리북 실행 
```
npm run storybook
```

### 설정 파일 추출 (webpack, babel, eslint 등) : 한번만 실행 가능 / 롤백 불가
```
npm run eject
```

------------------

## Directory

### 전체 구조
| Directory       | Description                 |
|:----------------|:----------------------------|
| build/          | 배포 버전 파일 모음                 |
| markup/         | 퍼블리싱 파일 모음                  |
| public/         | 정적 페이지 / 리소스 모음             |
| src             | react 원본 소스 ( 개발 버전 로컬 파일 ) |
| craco.config.js | webpack, babel 설정 파일        |
| tsconfig.json   | typescript 설정 파일            |
| package.json    | 프로젝트 패키지 버전 및 설치 설정 안내 파일   |

### React 파일 구조
| Directory      | Description          |
|:---------------|:---------------------|
| src/api        | 백엔드와의 http 통신 메서드 모음 |
| src/assets     | 이미지, 스타일 파일 모음       |
| src/components | 공통 컴포넌트 파일 모음        |
| src/pages      | 개별 페이지 파일 모음         |
| src/recoil     | recoil로 관리할 상태 파일 모음 |
| src/routes     | 라우팅 정의 파일 모음         |
| src/tests      | 단위 테스트 파일 모음         |
| src/utils      | 커스텀 훅 / 헬퍼 함수 모음     |

------------------

## 설정 파일

### tsconfig.json( typescript 설정 파일) 설정 파일 속성

**include**
- 컴파일할 파일

```
"include": [
    "src",
    "craco.config.js"
  ]
```

**paths**
- import 경로 설정

```
{
    "compilerOptions": {
        
        "baseUrl": ".",
        "paths": {
            "@/*": ["src/*"]
        }
        
    }
}
```

### craco.config.js
- CRACO(Create-React-App Configure Override)
- eject 없이 webpack, babel 설정 수정
- v7 : CRA(create-react-app) v5 에 대응
- craco-alias : 파일 경로 별칭 설정
- craco-sass-resources-loader : webpack 의 sass-loader 와 유사

```
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        tsConfigPath: "tsconfig.json" // compilerOptions > paths 속성이 있는 파일 경로
      }
    }
  ],
  style: {
    sass: {
      loaderOptions: {
        // 글로벌로 적용할 스타일
        additionalData: `
          @import "@/assets/scss/_common.scss";
        `
      }
    }
  }
}
```
------------------

## 라이브러리

### react-router-dom (v6)
- React 전용 라우팅 라이브러리

```
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page1/*" element={<Page1 />} />
        <Route path="/page2/*" element={<Page2 />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
```

### @emotion/react
- css in js 스타일 라이브러리
- @emotion/babel-preset-css-prop 설치하고 craco.config.js 에 아래 코드 추가( pragma ( @jsxImportSource @emotion/react ) 설정을 안하게끔 한다. )
```
module.exports = {
    babel: {
        presets: ['@emotion/babel-preset-css-prop'],
    },
```

사용예시)

```
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type BtnProps={
    color? : string;
    size?: string;
}
type BtnTypeProps={
    variant?: 'filled' | 'outline' ;
} & BtnProps;

const colors: { [key: string]: string }={
    blue: '#4c76f4',
    primary: '#7367f0', // default
    danger: '#ea5455',
    warning: '#ff9f43'
};
const getBtnColor=( color: string )=>{
    if (!colors[color]) {
        const regx=/^#/g;
        if (regx.test( color )) {
            return color;
        }
    }
    return colors[color];
}
const getFilledColorStyle=(color?: string)=>{
    return css`
      background-color: ${ color ? getBtnColor( color ) : colors['primary'] };
      border-color: ${ color ? getBtnColor( color ) : colors['primary'] };
    `
}
const getOutlineColorStyle=(color?: string)=>{
    return css`
      color: ${ color ? getBtnColor( color ) : colors['primary'] };
      background-color: rgba(255, 255, 255, 0.5 );
      border-color: ${ color ? getBtnColor( color ) : colors['primary'] };
    `
}
const buttonCommon=( {color, size, variant}: BtnTypeProps )=>{
    return css`
      position: relative;
      //.......중략...........
      color: #fff;
      &:disabled, &.disabled {
         //.......중략...........
      }
      ${variant==='filled'? getFilledColorStyle( color ) : getOutlineColorStyle( color )}
      width: ${ size ? size : undefined };
      min-width: ${ size ? '0' : '120px' };
    `;
}

const BtnStyledComp=styled.button<BtnTypeProps>`
  ${ ( props:BtnTypeProps) => { 
    return buttonCommon(props);
  } };
`;


export {
    BtnStyledComp
}

//호출 할 때 코드 
import { BtnStyledComp } from '@/components/button/style';


```

### Recoil
- React 전용 상태 관리 라이브러리 / 제일 좋은 점은 기존에 mutation 단계가 없이 action 단계로 바로 적용.
- atom : 상태의 단위, useRecoilState() 훅으로 읽고 쓰기 가능 (useState 와 유사)
- selector : atoms 나 다른 selectors 를 입력으로 받아들이는 순수 함수(pure function), useRecoilValue() 로 읽기 가능

```
// src/recoil/auth/authAtom.ts
import { atom } from 'recoil';
const authAtom=atom({
    key: 'loggedIn',
    default: localStorage.getItem('token')
});
export default authAtom;
//--------------------------------------------
// src/recoil/auth/userAtom.ts
import { atom } from 'recoil';
const userAtom=atom({
    key:'userData',
    default:{}
})
export default userAtom
//--------------------------------------------
// src/recoil/auth/useLoggedInAction.ts
import AuthService from '@/api/service/AuthService';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import authAtom from '@/recoil/auth/authAtom';
import userAtom from '@/recoil/auth/userAtom';

const useLoggedInActions=()=>{
    //여기서 get 부분은 사용하지 않기에 그냥 공란으로 콤마(,) 표시로 자리만 설정해 둔다.
    //useRecoilState 로 바로 store 의 state 들을 가져와서 바로 get/set 설정을 해둔다.
    const [, setToken]=useRecoilState( authAtom );
    const [, setUser]=useRecoilState( userAtom );
    const navigate=useNavigate();
    return {
        login,
        logout
    }
    function login(payload:{userId: string, userPw: string}){
        const {userId, userPw}=payload;
        console.log( 'userId, userPw=', userId, userPw );

        return AuthService.login( userId, userPw )
            .then((data)=>{
                localStorage.setItem( 'token', data.accessToken );
                setToken( data.accessToken);//authAtom 상태 변경 
            })
            .then(()=>{
                AuthService.me()
                    .then((data)=>{
                        localStorage.setItem( 'user', data );
                        setUser( data );//userAtom 상태 변경 
                    })
            });
    }
    function logout(){
        localStorage.removeItem( 'token' );
        localStorage.removeItem( 'user' );
        setToken( null );//authAtom 상태 변경
        setUser( {} );//userAtom 상태 변경 
        navigate( '/login' );
    }

}
export { useLoggedInActions };
//--------------------------------------------
//src/pages/sign/Login.tsx - 이 tsx 페이지에서 useLoggedInActions 호출한다.
import React, { useCallback, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useLoggedInActions } from '@/recoil/auth/useLoggedInActions';
import TxtField from '@/components/form/input/TxtField';
import Btn from '@/components/button/Btn';

const Login=()=>{
    const navigate=useNavigate();
    const [userId, setUserId]=useState('');
    const [userPw, setUserPw]=useState('');
    
    // ................중략...................
    const authActions = useLoggedInActions();

    const loginClickHandler=()=>{
        authActions.login({userId, userPw})
            .then(()=>{
                navigate( '/' );
            })
            .catch((err)=>{
                console.log( err );
            });
    }

    return (
        <div css={ loginForm }>
            <div className="form-cnt">
                   // ................중략...................
                    <div className="login-btn d-grid mgt-35" >
                        <Btn addClass="login-btn" size="400px" handler={ loginClickHandler } >로그인 버튼</Btn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;


```

### Jest
- 단위 테스트 라이브러리

```
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```
