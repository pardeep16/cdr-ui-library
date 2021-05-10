import React from 'react';
import RichText from './index';


export default{
    title: 'Components/RichText',
    component: RichText,
    argTypes:{
        
    }
}

const Template = (args) => <RichText {...args} />;

export const example = Template.bind({});
example.args = {
   body:'<h1>Hello</h1>'
};