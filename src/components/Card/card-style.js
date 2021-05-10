import styled from 'styled-components';

const border='#ebebeb';

export const CardTitle=styled.section`
    
    font-size:${({theme})=>theme.components.Card.CardTitle.size};
    font-family:${({theme}) => theme.main.font[0]};
    ${({theme}) => theme.components.Card.CardTitle.styles}

   

`;

export const CardBody=styled.section`
${({theme}) => theme.components.Card.CardBody.styles}
`;

export const CardHeader=styled.section`
    display: inline-block;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.0625rem;
    margin: 0 0 0.75rem 0;
    padding: 0 0 0.25rem 0;
    border-bottom: 0.125rem solid ${border};
    ${({theme}) => theme.components.Card.CardHeader && theme.components.Card.CardHeader.styles}
`;

export const CdrCard=styled.section`
${({theme}) => theme.components.Card && theme.components.Card.styles}
`


CardTitle.defaultProps={
    theme:{
        components:{
            Card:{
                
            }
        }
    }
}