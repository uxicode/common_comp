import React, { ReactNode } from 'react';
import { css } from '@emotion/react';

// import styled from '@emotion/styled';
// import { jsx } from '@emotion/react';

/* styled/emotion 예시
type WrapperProps={
    type: string;
}
const Wrapper=styled('div')`
  position: relative;
  overflow-x: hidden;
  width: ${(props:WrapperProps)=>props.type === 'full' ? '100%': 'auto'};
  height: ${(props:WrapperProps)=>props.type === 'full' ? '100%': 'auto'};
`*/


/*const Wrapper=styled( 'div' )`
  position: relative;
  overflow-x: hidden;
`*/
interface Props{
    className?: string | undefined;
    children?:ReactNode;
}
const Wrapper=( props: Props )=>{
    const { children, className, ...rest}=props;
    return (
            <>
                <div {...rest} className={className} css={css`position:${className==='login'? '' : 'absolute'}`}>{children}</div>
                <div id="modal"></div>
            </>
        );
}

export default Wrapper;
