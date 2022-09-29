import React from 'react';

import {  Outlet } from 'react-router-dom';
import { LayoutProps } from '@/pages/layout/@types/LayoutProps';
import {css} from '@emotion/react';
import Wrapper from '@/pages/layout/Wrapper';

const FullType=({ layout, addClass, children }: LayoutProps)=>{
    return (
        <Wrapper className={addClass}>
            <div className="container ">
                <div className="contents-wrap">
                    <div className="contents">
                        { children || <Outlet/> }
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default FullType;
