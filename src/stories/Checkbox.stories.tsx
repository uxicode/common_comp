import React, { useCallback } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from '@/components/form/check/Checkbox';

export default {
    title: 'Common/Checkbox',
    component: Checkbox,
    argTypes: {
        size: {
            type: 'string',
            require: false,
        },
        variant: {
            options: ['filled', 'underline']
        }
    },
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => {
    const onChange=useCallback((value: string | boolean)=>{
        console.log( 'check box status=', value );
    }, [] )
    return (
        <>
            <Checkbox {...args}
                      id="check1"
                      handler={ onChange }/>
        </>
    );
}

export const BasicCheckbox = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicCheckbox.args={
    label:'Test checkbox'
};
