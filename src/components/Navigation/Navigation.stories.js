import React from 'react';
import { Navigation } from './Navigation';
import LogoImage from '../../assets/images/logo.png'


export default{
    title: 'Components/Navigation',
    component: Navigation,
    argTypes:{
        brandImage:{control:'file'},
    }
}

const Template = (args) => <Navigation {...args} />;

export const Original = Template.bind({});
Original.args = {
    brandImage:LogoImage,
    brandUrl:'/',
    brandTitle:'',
    
    navigationItems:[
        {
            label:'Home',
            path:'#'
        },
        {
            label:'Blogs',
            path:'#'
        }
    ]
};