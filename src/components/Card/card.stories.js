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
    header:''
}   


export const htmlcard = Template.bind({});

htmlcard.args={
    title:'Hello',
    body:'',
    header:'',
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
    title:'Custom Title',
    body:'Start coding in simple steps!',
    header:'',
    html:''
}

custom.decorators=[(Story) => <ThemeProvider theme={theme}><Story/></ThemeProvider>]


