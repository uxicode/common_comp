import { request } from '@/api';
import { Auth } from '@/api/base';

class AuthService{
    public static login(uid: string, password: string){
        return request( 'post', `${ Auth.BASE_URL }/login`, {
            userId: uid,
            password: password,
            // accessTokenExpiresInSec: 20 //테스트 expire( 초 )
        } );
    }

    public static me() {
        return request( 'get', `${ Auth.BASE_URL }/me` );
    }
}
export default AuthService;
