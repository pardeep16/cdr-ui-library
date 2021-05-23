import Card from './index';
import {css,ThemeProvider} from 'styled-components'
import { CardTitle } from './card-style';
import { original } from '../../themes/default';

export default{
    title: 'Components/Card',
    component: Card,
    argTypes:{
        
    }
}
const Template = (args) => <Card {...args} />;

export const example = Template.bind({});
example.args={
    title:'Card Title',
    body:'Some body text',
    thumbnail:''
}   


export const htmlcard = Template.bind({});

htmlcard.args={
    title:'Hello',
    description:'',
    thumbnail:'',
    html:'<h2>Title</h2><p>Welcome to TheCodeReveal!</p>'
}



const cardstyle=css`

position: relative;
display: block;
color: inherit;
text-decoration: none;
&:hover ${CardTitle}{
  @include transition(color 0.3s ease);
  color: $red;
}
`


const theme={
    ...original,
    component:{
        ...original.components,
        Card:{
            ...original.components.Card,
            styles:`{
                position: relative;
                display: block;
                color: inherit;
                text-decoration: none;
                &:hover ${CardTitle}{
                @include transition(color 0.3s ease);
                    color: red;
                }
            }`
        }
    }
}

export const custom = Template.bind({});

custom.args={
    title:'ReactJS for Begineers',
    description:'Start coding in simple steps!',
    headerText:'ReactJS',
    thumbnail:'https://yt3.ggpht.com/ytc/AAUvwnjZOjZkrnfYd__cyvrh3WBIySGwrVL44Ch5A9T5lg=s900-c-k-c0x00ffffff-no-rj',
    publishDate:'2021-05-04',
    description:`React makes it painless to create interactive UIs.
     Design simple views for each state in your application,
      and React will efficiently update
      and render just the right components when your data changes.`,
    author:{
        photo:'https://yt3.ggpht.com/ytc/AAUvwnjZOjZkrnfYd__cyvrh3WBIySGwrVL44Ch5A9T5lg=s900-c-k-c0x00ffffff-no-rj',
        name:'The CodeReveal'
    }
}


