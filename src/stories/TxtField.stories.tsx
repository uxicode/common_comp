import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TxtField from '@/components/form/input/TxtField';

export default {
    title: 'Common/TxtField',
    component: TxtField,
    argTypes: {
        size: {
            type: 'string',
            require: false,
        },
        color:{control:'color'},
        variant: {
            options: ['filled', 'underline']
        }
    },
} as ComponentMeta<typeof TxtField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TxtField> = (args) => {
    return (
        <>
            <TxtField {...args}
                      label="title"
                      placeholder="텍스트를 입력하세요."/>
        </>
    );
}

export const BasicTxtField = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicTxtField.args={
    size:'200px',
    color:'primary',
    variant:'filled'
};

export const UnderlineTxtField = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UnderlineTxtField.args={
    size:'200px',
    color:'#4c76f4',
    variant:'underline'
};

