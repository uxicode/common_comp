import React from 'react';

import {css} from '@emotion/react';
import styled from '@emotion/styled';

import { LayoutProps } from '@/pages/layout/@types/LayoutProps';
import FullType from '@/pages/layout/FullType';
import SideType from '@/pages/layout/SideType';



const Layout=( props: LayoutProps)=>{

    const LayoutTypeTag= (props.layout === 'full')? FullType : SideType;
    return (

        <LayoutTypeTag {...props} />
        /*<div className="wrapper" css={ wrapperStyle } >
            { isNormal && <Header/> }
            <div css={ containerStyle }>
                { isNormal && <SideBar/> }

                <div css={ isNormal && contentsWrapStyle }>
                    <div css={ contentsStyle } { ...(layout === 'full' ? { className: `${ layout }` } : {}) }>
                        { children || <Outlet/> }
                    </div>
                </div>

            </div>
        </div>*/
    );

};

export default Layout;
