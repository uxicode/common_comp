import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Btn from '@/components/button/Btn';

export default {
    title: 'Common/Btn',
    component: Btn,
    argTypes: {
        color:{
            control:'color'
        },
        size:{
            defaultValue:'button',
            type:'string',
            require: false
        },
    },
} as ComponentMeta<typeof Btn>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Btn> = (args) => {
    return (
        <>
            <Btn {...args} color="primary" startIcon="icon-play">Test Button1</Btn>
            <Btn {...args} color="danger" endIcon="icon-home">Test Button2</Btn>
            <Btn {...args} color="blue">Test Button3</Btn>
            <Btn {...args} color="warning">Test Button4</Btn>
            <Btn {...args} disabled>Test Button5</Btn>
        </>
    );
}

const Template2: ComponentStory<typeof Btn> = (args) =>{
    return (
        <>
            <Btn {...args} color="blue" variant="outline" startIcon="icon-home">Test Button1</Btn>
            <Btn {...args} color="danger" variant="outline" endIcon="icon-warning">Test Button2</Btn>
            <Btn {...args} color="warning" variant="outline">Test Button3</Btn>
        </>
    )
}

export const BasicButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicButton.args={
    size:'200px',
    disabled: false
};

export const OutlineButton = Template2.bind({});

OutlineButton.args={
    size:'200px',
    disabled: false
};
