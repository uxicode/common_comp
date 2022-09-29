import { css } from '@emotion/react';
import styled from '@emotion/styled';


const colors: { [key: string]: string }={
    blue: '#4c76f4',
    primary: '#7367f0', // default
    danger: '#ea5455',
    warning: '#ff9f43'
};
const hexToRgb=(hex: string, alpha: number)=>{
    let c:any;

    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        // console.log( `rgba(${ [(c >> 16) & 255, (c >> 8) & 255, c & 255].join( ',' ) },${ alpha })` );
        return `rgba(${[(c>>16)&255, (c>>8)&255, c&255].join(',')},${alpha})`;
    }
    throw new Error('Bad Hex');
}

const getColor=( color: string )=>{

    if (!colors[color]) {
        const regx=/^#/g;
        if (regx.test( color )) {
            return color;
        }
    }
    console.log( colors[color] );
    return colors[color];
}

const LabelStyle=styled.label`
  color: rgba(0, 0, 0, 0.6);
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4375em;
  letter-spacing: 0.00938em;
  padding: 0;
  display: block;
  white-space: nowrap;
  pointer-events: auto;
  user-select: none;
`;
type InputContainerProps={
    width?: string | number;
    variant: 'filled' | 'underline';
    color?: string;
}

const InputWrapperCommon=({ width, color }: InputContainerProps)=>{
    return css`
      position: relative;
      width: ${ (width) ? width : 'auto' };
      font-family: Roboto, Helvetica, Arial, sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.4375em;
      letter-spacing: 0.00938em;
      color: rgba(0, 0, 0, 0.87);
      box-sizing: border-box;
      cursor: text;
    `
}

const getInputTypeStyle=( { variant, color }: InputContainerProps )=>{
    const underlineInteraction=css`
      &:before {
        content: "";
        position: absolute;
        border-bottom:1px solid rgba(0, 0, 0, 0.18);
        left: 0;
        bottom: 0;
        right: 0;
        transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        pointer-events: none;
      }
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        transform: scaleX(0);
        transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        //border-bottom: 2px solid rgb(25, 118, 210);
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: ${ color? hexToRgb( getColor(color), 1 ) : css`rgba(0, 0, 0, 1)` };
        pointer-events: none;
      }
      &:hover:before {
        //border-bottom: 2px solid rgba(0, 0, 0, 0.87);
        border-bottom-width: 2px;
        border-bottom-color: ${ color? hexToRgb( getColor(color), 0.87 ) : css`rgba(0, 0, 0, 0.87)`};
      }
      &:focus-within:before {
        //border-bottom: 2px solid rgba(25, 118, 210, 0.87);
        border-bottom-width: 2px;
        border-bottom-color: ${ color? hexToRgb( getColor(color), 0.87 ) : css`rgba(0, 0, 0, 0.87)` };
      }
      &:focus-within:after {
        transform: scaleX(1) translateX(0);
      }
    `
    const underlineInputStyle=css`
      border: 0;
    `
    const filledInputStyle=color? css`
      border-width: 1px;
      border-style: solid;
      border-color: ${hexToRgb( getColor(color), 0.18 )};
      &:hover, &:focus {
        border-color: ${hexToRgb( getColor(color), 0.87 )};
      }
    ` : null;
    return css`
      &>input{
        ${ ( variant === 'underline')? underlineInputStyle : filledInputStyle }
      }
      ${( variant === 'underline')? underlineInteraction : null}
    `
}

const InputCommon=css`
  display: block;
  width: 100%;
  height: 1.4375em;
  margin: 0;
  min-width: 0;
  padding: 0.687rem 1rem;
  font: inherit;
  letter-spacing: inherit;
  color: currentColor;
  border-radius: 0.357rem;
  box-sizing: content-box;
  background: none;
  -webkit-tap-highlight-color: transparent;
  animation-name: auto-fill-cancel;
  animation-duration: 10ms;

  &:disabled, &.disabled {
    opacity: 1;
    -webkit-text-fill-color: rgba(0, 0, 0, 0.38);
  }

  @keyframes auto-fill-cancel {
    from {
      display: block;
    }
  }
`

const InputContainerStyle=styled.div<InputContainerProps>`
  ${ ( props:InputContainerProps )=>{
    return InputWrapperCommon( props );
  } };

  &>input{
    ${ InputCommon };
  }
  // input style type 이 underline 인지 체크 
  ${ (props:InputContainerProps )=>getInputTypeStyle(props) }
`

/*

const InputStyle=styled.input`
  border: 1px solid rgba(0, 0, 0, 0.18);

  &:hover, &:focus {
    border: 1px solid rgba(0, 0, 0, 0.87);
  }

  ${ InputCommon };
`
*/

export {
    InputContainerStyle,
    LabelStyle
};
