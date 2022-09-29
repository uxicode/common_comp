import {IMenu} from '@/components/sideBar/model/IMenu';
import React from 'react';
import {iconStyle, itemStyle, listStyle, SideContent, titStyle} from '@/components/sideBar/style';
import {NavLink} from 'react-router-dom';

function SideMenu({ items }: { items: IMenu[]}) {

  return (
      <SideContent>
        <ul css={listStyle}>
          {
            items.map((item) => {
              return (
                  <li key={item.key} css={itemStyle}>
                    <NavLink to={item.path}
                             className={( {isActive} ) => (isActive ? 'active': '')}>
                      <i css={iconStyle} className={item.icon}></i>
                      <span css={titStyle}>{item.txt}</span>
                    </NavLink>
                  </li>
              )
            })
          }
        </ul>
      </SideContent>
  );
}

export default SideMenu;
