import {IMenu} from '@/components/sideBar/model/IMenu';

export default class SideBarService {
  private sideMenus: IMenu[] = [
    {
      path: '/',
      txt: '대시보드',
      icon: 'icon-home',
      key: '01',
      // chk: false
    },
    {
      path: '/users',
      txt: '회원 정보 관리',
      icon: 'icon-user',
      key: '02',
      // chk: false
    },
    {
      path: '/board',
      txt: '게시글 관리',
      icon: 'icon-clipboard',
      key: '03',
      // chk: false
    },
    {
      path: '/terms',
      txt: '약관 관리',
      icon: 'icon-file-text',
      key: '04',
      // chk: false
    },
  ];

  get menuItems() {
    return this.sideMenus;
  }

}


