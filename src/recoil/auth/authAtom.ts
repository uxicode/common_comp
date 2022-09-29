import { atom } from 'recoil';

const authAtom=atom({
    key: 'loggedIn',
    default: localStorage.getItem('token')
});

export default authAtom;
