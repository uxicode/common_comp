import React, { Ref, useCallback } from 'react';
import { css } from '@emotion/react';
import {
    BtnAnchorStyledComp,
    BtnStyledComp,
    IconBtnAnchorStyledComp,
    IconBtnStyledComp
} from '@/components/button/style';
import { rippleEffect } from '@/components/utils/utils';
import { ButtonBaseProps } from '@/components/button/Btn';

type IconButtonBaseProps= {
    color?: string;
    size?: string;
    icon?: string;
    children?: React.ReactNode;
    handler?: ()=>void;
} & React.ComponentPropsWithoutRef<React.ElementType>; //ComponentPropsWithoutRef 타입이 제네릭으로 받을 수 있는 타입이 ElementType 으로 정해져있다.


//합치려고 하는 타입 두 가지 중 하나를 HTML 엘리먼트를 의미하도록 제한하고, 이 타입을 그대로 ComponentPropsWithoutRef 에게 넘겨주기 때문에 타입이 깨지는 에러가 발생하지 않는다.
// type Combine<T, K> = T & Omit<K, keyof T>;
// type ButtonProps<T extends React.ElementType> = Combine<ButtonBaseProps, React.ComponentPropsWithoutRef<T>>;
type BtnReturnType= <T extends React.ElementType = 'button'>( props: ButtonBaseProps & React.ComponentPropsWithoutRef<T>) => React.ReactElement | null;
const BuildIconBtn=( props: IconButtonBaseProps,  ref: Ref<any> )=>{
    const { color, size, icon, children, handler, ...rest }=props;

    const Component=(rest.href)? IconBtnAnchorStyledComp : IconBtnStyledComp;

    const onClick=useCallback( (evt: React.MouseEvent<Element, MouseEvent>)=>{
        if(handler) handler();
        // evt.preventDefault();
        const button = evt.currentTarget as HTMLElement;
        rippleEffect( button, evt.pageX, evt.pageY );
    }, []);

    return <Component
        className={ icon }
        color={ color }
        size={ size }
        ref={ ref }
        onClick={ (evt: React.MouseEvent<Element, MouseEvent>)=>onClick(evt) }
        { ...rest }>{ children }</Component>;
}
// ref 속성을 추가하려면 forwardRef 함수를 통해 컴포넌트를 생성해야 한다.
const IconBtn:BtnReturnType=React.forwardRef(BuildIconBtn);
export default IconBtn as typeof IconBtn;
