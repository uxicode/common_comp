import {IMenu} from '@/components/sideBar/model/IMenu';
import React from 'react';
import {logoTitStyle, SideBarContainer, SideHeader} from '@/components/sideBar/style';
import SideMenu from '@/components/sideBar/SideMenu';
import {Link} from 'react-router-dom';

function SideBar({ menuItems }: { menuItems: IMenu[]}) {

  return (
    <SideBarContainer>
      <SideHeader>
        <h1>
          <Link to="/">
            <p css={logoTitStyle}>Dongnepedia<br/>App Admin</p>
          </Link>
        </h1>
      </SideHeader>

      <SideMenu items={menuItems} />

    </SideBarContainer>
  );
}

export default SideBar;
