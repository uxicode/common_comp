import {IMenu} from '@/components/sideBar/model/IMenu';
import SideBarService from '@/components/sideBar/service';
import React from 'react';
import Header from '@/components/header/Header';
import SideBar from '@/components/sideBar/SideBar';
import { Outlet } from 'react-router-dom';
import { LayoutProps } from '@/pages/layout/@types/LayoutProps';
import styled from '@emotion/styled';
import Wrapper from '@/pages/layout/Wrapper';

const Container=styled('div')`
  position: relative;
  max-width: 100%;
  //height: 100%;
  min-height: 100vh; // ksj
  padding: 0;
  margin: 0;
  label: Container;
`

const SideType=({ layout, addClass, children }: LayoutProps)=>{
    const sideBarInfo: SideBarService = new SideBarService();
    const menuItems: IMenu[] = sideBarInfo.menuItems;

    return (
        <Wrapper className={addClass}>
            <Header/>
            <Container>
                <SideBar menuItems={menuItems}/>
                <div className="contents-wrap">
                    <div className="contents">
                        { children || <Outlet/> }
                    </div>
                </div>
            </Container>
            {/*<div className="container">
                <SideBar/>
                <div className="contents-wrap">
                    <div className="contents">
                        { children || <Outlet/> }
                    </div>
                </div>
            </div>*/}
        </Wrapper>
    );
};

export default SideType;
