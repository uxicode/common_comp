import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import IconBtn from '@/components/button/IconBtn';
import styled from '@emotion/styled';

export default {
    title: 'Common/IconBtn',
    component: IconBtn,
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
} as ComponentMeta<typeof IconBtn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconBtn> = (args) => {
    return (
        <>
            <IconBtn color="primary" icon="icon-home" {...args}></IconBtn>
            <IconBtn color="danger" icon="icon-bubbles" {...args}></IconBtn>
            <IconBtn color="blue" icon="icon-google-plus2" {...args}></IconBtn>
            <IconBtn color="warning" icon="icon-warning" {...args}></IconBtn>
        </>
    );
}

export const BasicButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicButton.args={
    size:'24px'
};
