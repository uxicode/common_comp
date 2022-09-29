import React, { ChangeEvent, Ref } from 'react';
import { CheckboxContainerStyle, CheckboxStyledComp, LabelStyledComp } from '@/components/form/check/style';
import { rippleEffect, offset } from '@/components/utils/utils';
import { ButtonBaseProps } from '@/components/button/Btn';
type CheckboxProps={
    id?: string;
    size?: string;
    label?: string;
    addClass?: string;
    handler?: ( value: string | boolean)=>void;
} & React.ComponentPropsWithoutRef<React.ElementType>

type CheckboxReturnType=<T extends React.ElementType>( props: CheckboxProps & React.ComponentPropsWithRef<T> ) => React.ReactElement | null;
const BuildCheckbox=({
                         id,
                         label,
                         addClass,
                         handler,
                         size,
                         ...rest
                     }: CheckboxProps, ref: Ref<any>)=>{


    const onChange=(evt: ChangeEvent<HTMLInputElement>)=>{
        if (handler) handler( evt.target.checked );
        // evt.preventDefault();
        // const checkbox = evt.currentTarget as HTMLInputElement;
        // console.log( evt.target.offsetTop, evt.target.offsetLeft, offset(checkbox)  );
        // rippleEffect( checkbox, evt.target.offsetTop, evt.target.offsetLeft );
    };

    return (
        <CheckboxContainerStyle>
            <CheckboxStyledComp type="checkbox"
                                id={ id }
                                className={ addClass }
                                ref={ ref }
                                onChange={
                                    (evt: ChangeEvent<HTMLInputElement>)=>onChange( evt )
                                }
                                { ...rest } />
            { label && <LabelStyledComp htmlFor={ id }>{ label }</LabelStyledComp> }
        </CheckboxContainerStyle>
    );
}

const Checkbox: CheckboxReturnType=React.forwardRef( BuildCheckbox );

export default Checkbox as typeof Checkbox;
