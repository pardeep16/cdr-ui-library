import { Avatar } from ".";

export default{
    title: 'Components/Avatar',
    component: Avatar,
    argTypes:{
        
    }
}
const Template = (args) => <Avatar {...args} />;

export const example = Template.bind({});
example.args={
    path:'https://yt3.ggpht.com/ytc/AAUvwnjZOjZkrnfYd__cyvrh3WBIySGwrVL44Ch5A9T5lg=s900-c-k-c0x00ffffff-no-rj'
}

export const large = Template.bind({});
large.args={
    path:'https://yt3.ggpht.com/ytc/AAUvwnjZOjZkrnfYd__cyvrh3WBIySGwrVL44Ch5A9T5lg=s900-c-k-c0x00ffffff-no-rj',
    width:'128px',
    height:'128px',
    type:'User'
} 


