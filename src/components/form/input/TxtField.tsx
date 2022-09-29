import React, { ChangeEvent, Ref } from 'react';
import { InputContainerStyle, LabelStyle } from '@/components/form/input/style';
type BaseTxtFieldProps={
    id?: string;
    inputType?: string;
    label?: string;
    size?: string;
    color?: string;
    value?: string;
    addClass?: string;
    variant?: 'filled' | 'underline';
    handler?: (value: string)=>void;
}
export type TxtFieldProps=BaseTxtFieldProps & React.ComponentPropsWithoutRef<React.ElementType>;
type InputReturnType=<T extends React.ElementType>(props: TxtFieldProps & React.ComponentPropsWithoutRef<T>)=>React.ReactElement | null;
const BuildTxtField=({
                         id,
                         addClass,
                         value,
                         label,
                         color='primary',
                         size='200px',
                         inputType='text',
                         variant='filled',
                         handler,
                         ...rest
                     }: TxtFieldProps, ref: Ref<any>): JSX.Element=>{

    const onChange=( value: string )=>{
        if(handler){
            handler( value );
        }
    }

    //
    return (
        <InputContainerStyle width={ size } variant={variant} color={color}>
            { label && <LabelStyle htmlFor={ id }>{ label }</LabelStyle> }
            <input type={ inputType ? inputType : 'text' }
                        id={ id }
                        className={ addClass }
                        ref={ ref }
                        defaultValue={ value }
                        onChange={
                            (evt: ChangeEvent<HTMLInputElement>)=>onChange( evt.target.value )
                        }
                        { ...rest } />
        </InputContainerStyle>
    )
}

const TxtField: InputReturnType=React.forwardRef( BuildTxtField );

export default TxtField as typeof TxtField;
