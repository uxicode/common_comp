import { css } from '@emotion/react';
import styled from '@emotion/styled';


type BtnProps={
    color? : string;
    size?: string;

}
type BtnTypeProps={
    variant?: 'filled' | 'outline' ;
} & BtnProps;

const colors: { [key: string]: string }={
    blue: '#4c76f4',
    primary: '#7367f0', // default
    danger: '#ea5455',
    warning: '#ff9f43'
};

const getBtnColor=( color: string )=>{
    // console.log( colors[color] );
    if (!colors[color]) {
        const regx=/^#/g;
        if (regx.test( color )) {
            return color;
        }
    }
    return colors[color];
}

const IconButtonCommon=({ color, size }:BtnProps)=>{
    return css`
      position: relative;
      overflow: hidden;
      cursor: pointer;
      display: inline-block;
      font-weight: 400;
      line-height: 1;
      text-align: center;
      vertical-align: middle;
      padding: 1rem;
      font-size: ${size? size : '1rem'};
      border-radius: 50%;
      color: ${ color? getBtnColor(color) : colors['primary']};
      &:hover{
        background-color: rgba(0, 0, 0, 0.12);
      }
      &:disabled, &.disabled{
        color: rgba(0, 0, 0, 0.26);
        box-shadow: none;
        pointer-events: none;
        cursor: default;
      }`;
};

const getFilledColorStyle=(color?: string)=>{
    return css`
      background-color: ${ color ? getBtnColor( color ) : colors['primary'] };
      border-color: ${ color ? getBtnColor( color ) : colors['primary'] };
    `
}

const getOutlineColorStyle=(color?: string)=>{
    return css`
      color: ${ color ? getBtnColor( color ) : colors['primary'] };
      background-color: rgba(255, 255, 255, 0.5 );
      border-color: ${ color ? getBtnColor( color ) : colors['primary'] };
      border-width: 1px;
      border-style: solid;
    `
}
const buttonCommon=( {color, size, variant}: BtnTypeProps )=>{
    return css`
      position: relative;
      overflow: hidden;
      cursor: pointer;
      display: inline-block;
      font-weight: 400;
      line-height: 1;
      text-align: center;
      vertical-align: middle;
      padding: 0.786rem 1.5rem;
      font-size: 14px;
      border-radius: 0.358rem;
      color: #fff;
      &:disabled, &.disabled {
        color: rgba(0, 0, 0, 0.26);
        box-shadow: none;
        background-color: rgba(0, 0, 0, 0.12);
        pointer-events: none;
        cursor: default;
      }
      ${variant==='filled'? getFilledColorStyle( color ) : getOutlineColorStyle( color )}
      width: ${ size ? size : undefined };
      min-width: ${ size ? '0' : '120px' };
    `;
}

// button 이외의 속성값을 연동하려면 아래 처럼 styled(엘리먼트명) 다음에
// <BtnProps> 를 선언하던지 아래 함수에서 한것처럼 오브젝트 타입을 설정하던지
// 2가지 중 하나를 택해서 선언해 두면 된다.
//ex) background-color: ${ props => props.color? colors[props.color]:colors['primary']}; // 한줄 리턴 함수
/*
${ ({ color, size }:BtnProps) => { // 복합적 리턴 함수 사용한 예시
    return css`
        border-color: ${ color? colors[color]:colors['primary']};
        width: ${ size ? size : undefined };
        min-width: ${ size ? '0' : '120px' };
      `;
  } };
  */
const BtnStyledComp=styled.button<BtnTypeProps>`
  ${ ( props:BtnTypeProps) => { 
    return buttonCommon(props);
  } };
`;
const BtnAnchorStyledComp=styled.a<BtnTypeProps>`
  ${ ( props:BtnTypeProps) => {
    return buttonCommon(props);
} };
`;

const IconBtnStyledComp=styled.button<BtnProps>`
  ${ ( props:BtnProps) => {
    return IconButtonCommon(props);
} };
`;
const IconBtnAnchorStyledComp=styled.a<BtnProps>`
  ${ ( props:BtnProps) => {
    return IconButtonCommon(props);
} };
`;

const EndIconStyle=css`
  display: inherit;
  margin-right: 4px;
  margin-left: -8px;
`
const StartIconStyle=css`
  display: inherit;
  margin-right: -4px;
  margin-left:8px;
`

export {
    BtnStyledComp,
    BtnAnchorStyledComp,
    EndIconStyle,
    StartIconStyle,
    IconBtnStyledComp,
    IconBtnAnchorStyledComp
};

