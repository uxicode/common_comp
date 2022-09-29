import React from 'react';
import { Global, css } from '@emotion/react';
import * as rootStyle from '@/assets/scss/styles.scss';

export const GlobalStyle = ()=>{
    return <Global styles={css`${rootStyle}`}/>;
}
