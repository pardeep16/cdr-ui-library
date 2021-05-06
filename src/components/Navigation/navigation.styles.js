import {createGlobalStyle} from 'styled-components';

export const NavigationStyles=createGlobalStyle`
    .cdr-ui-navbar{
        background: ${props => props.theme.components.Navigation.primary};

    }
    .cdr-ui-navigation-items{
        padding: 15px;
        float: right;
        position: absolute;
        width: 600px;
        padding-left: ${props => props.theme.components.Navigation.itemsMargin};
    }

    .cdr-ui-nav-link{
        color:${props => props.theme.components.Navigation.text};
        padding-right:60px;
        fontSize:16px;
        lineHeight:21px;
        &:hover{
            color:${props => props.theme.components.Navigation.secondary};
            transition:all 0.3s ease-in-out;
        }
        &:active{
            color:${props => props.theme.components.Navigation.text}; 
        }
    }
`


