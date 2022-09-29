import useOnClickOutside from '@/hooks/useOnClickOutside';
import {useLoggedInActions} from '@/recoil/auth/useLoggedInActions';
import React, {useRef, useState} from 'react';
import {
  dropdownBtnStyle,
  navCntStyle,
  navStyle,
  userCntStyle, userLevelStyle, userMenuItemStyle, userMenuStyle,
  userNameStyle
} from '@/components/header/style';

function Header() {

  const name = 'Admin';
  const level = '슈퍼관리자';

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLAnchorElement>(null);

  const authActions = useLoggedInActions();

  const onUserInfoClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const clickOutsideHandler = () => {
    setIsMenuOpen(false);
  };

  useOnClickOutside(menuRef, clickOutsideHandler);

  const onPwdChangeClick = () => {
    console.log('pwdChange');
  };

  const onLogoutClick = () => {
    console.log('logout');

    authActions.logout();
  };

  const menuItems = [
    { icon: 'icon-lock', txt: '비밀번호 변경', onClick: onPwdChangeClick},
    { icon: 'icon-log-out', txt: '로그아웃', onClick: onLogoutClick},
  ];

  return (
      <header>
        <nav css={navStyle}>
          <div css={navCntStyle}>

            <a css={dropdownBtnStyle} onClick={onUserInfoClick} ref={menuRef}>
              <div css={userCntStyle}>
                <span css={userNameStyle}>{name}</span>
                <span css={userLevelStyle}>{level}</span>
              </div>
              <i className="icon-circle-down"></i>
            </a>

            <ul css={userMenuStyle} className={isMenuOpen ? 'active' : ''} >
              {
                menuItems.map((item, idx) => {
                  return (
                      <li key={idx}>
                        <a href="javascript:void(0)" css={userMenuItemStyle} onClick={item.onClick}>
                          <i className={item.icon}></i>
                          <span>{item.txt}</span>
                        </a>
                      </li>
                  )
                })
              }
            </ul>

          </div>

        </nav>
      </header>
  );
}

export default Header;
