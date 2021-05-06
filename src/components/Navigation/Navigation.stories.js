import React from 'react';
import { Navigation } from './Navigation';
import LogoImage from '../../assets/images/logo.png'


export default{
    title: 'Components/Navigation',
    component: Navigation,
    argTypes:{
        brandLogo:{control:'file'},
    }
}

const Template = (args) => <Navigation {...args} />;

export const Original = Template.bind({});
Original.args = {
    brandLogo:LogoImage,
    brandLogoPath:'/',
    
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