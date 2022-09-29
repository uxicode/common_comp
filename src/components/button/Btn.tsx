import React, { Ref } from 'react';
import { BtnStyledComp, BtnAnchorStyledComp, StartIconStyle, EndIconStyle } from '@/components/button/style';
import { rippleEffect } from '@/components/utils/utils';

export type ButtonBaseProps= {
    color?: string;
    size?: string;
    addClass?: string;
    variant? : 'filled' | 'outline';
    startIcon?: string;
    endIcon?: string;
    children?: React.ReactNode;
    handler?: ()=>void;
} & React.ComponentPropsWithoutRef<React.ElementType>; //ComponentPropsWithoutRef 타입이 제네릭으로 받을 수 있는 타입이 ElementType 으로 정해져있다.


//합치려고 하는 타입 두 가지 중 하나를 HTML 엘리먼트를 의미하도록 제한하고, 이 타입을 그대로 ComponentPropsWithoutRef 에게 넘겨주기 때문에 타입이 깨지는 에러가 발생하지 않는다.
// type Combine<T, K> = T & Omit<K, keyof T>;
// type ButtonProps<T extends React.ElementType> = Combine<ButtonBaseProps, React.ComponentPropsWithoutRef<T>>;
type BtnReturnType= <T extends React.ElementType = 'button'>( props: ButtonBaseProps & React.ComponentPropsWithoutRef<T> ) => React.ReactElement | null;
const BuildBtn=({
                    addClass,
                    startIcon,
                    endIcon,
                    children,
                    variant='filled',
                    color='primary',
                    size='120px',
                    handler,
                    ...rest
                }: ButtonBaseProps, ref: Ref<any>): JSX.Element=>{

    const Component=(rest.href) ? BtnAnchorStyledComp : BtnStyledComp;

    const onClick=(evt: React.MouseEvent<Element, MouseEvent>)=>{

        // evt.preventDefault();
        const button=evt.target as HTMLElement;
        rippleEffect( button, evt.pageX, evt.pageY );

        if (handler) handler();
    };

    return <Component
        className={ addClass }
        color={ color }
        size={ size }
        variant={variant}
        ref={ ref }
        onClick={ (evt: React.MouseEvent<Element, MouseEvent>)=>onClick( evt ) }
        { ...rest }>
        { startIcon && <span className={ startIcon } css={ EndIconStyle }></span> }
        { children }
        { endIcon && <span className={ endIcon } css={ StartIconStyle }></span> }</Component>;
}
// ref 속성을 추가하려면 forwardRef 함수를 통해 컴포넌트를 생성해야 한다. 그리고 리턴 타입을 React.ReactElement | null; 으로 지정해줘야 한다.
const Btn:BtnReturnType=React.forwardRef(BuildBtn);
export default Btn as typeof Btn;
