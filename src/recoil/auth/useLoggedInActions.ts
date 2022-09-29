import AuthService from '@/api/service/AuthService';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import authAtom from '@/recoil/auth/authAtom';
import userAtom from '@/recoil/auth/userAtom';

const useLoggedInActions=()=>{

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
                // console.log( data.accessToken );
                localStorage.setItem( 'token', data.accessToken );
                setToken( data.accessToken);
            })
            .then(()=>{
                AuthService.me()
                    .then((data)=>{
                        console.log( 'AuthService.me=', data );
                        localStorage.setItem( 'user', data );
                        setUser( data );
                    })
            });
    }
    function logout(){
        localStorage.removeItem( 'token' );
        localStorage.removeItem( 'user' );
        setToken( null );
        setUser( {} );
        navigate( '/login' );
    }

}
export { useLoggedInActions };
