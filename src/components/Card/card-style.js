import styled from 'styled-components';


export const CardHeaderText = styled.p`
    position:absolute;
    color: #6E798C;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    ${({ theme }) => theme.components.Card.CardHeaderText && theme.components.Card.CardHeaderText.styles}
`

export const PublishDate = styled.p`
    font-size: 12px;
    line-height: 20px;
    text-align: right;
    color: #6E798C;
    ${({ theme }) => theme.components.Card.CardHeaderText && theme.components.Card.CardHeaderText.styles}
`


export const CardImage = styled.div`
        width: 350px;
        height:250px;
        background: #BCD1FF;
        border-radius: 16px 0px 0px 16px;
        ${({ theme }) => theme.components.Card.CardImage && theme.components.Card.CardImage.styles}

`

export const CardWithImage = styled.section`
    background-image:url(${props => props.thumbnail});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 16px 0px 0px 16px;
    width: 350px;
    height:250px;
    ${({ theme }) => theme.components.Card.CardWithImage && theme.components.Card.CardWithImage.styles}
`

export const CardTitle = styled.section`
    font-size: 24px;
    line-height: 28px;
    color: #081F32;
    cursor:pointer;
    &:hover{
        color:${({ theme }) => theme.main.colors.red}
    }
    ${({ theme }) => theme.components.Card.CardTitle.styles}   
`;

export const CardBody = styled.section`
    padding: 20px;
    width:100%;
    height:250px;
    font-family:${({ theme }) => theme.main.font[0]};
    ${({ theme }) => theme.components.Card.CardBody.styles}
`;

export const CardHeader = styled.section`  
    ${({ theme }) => theme.components.Card.CardHeader && theme.components.Card.CardHeader.styles}
`;

export const CardDescription=styled.p`
    font-size: 14px;
    line-height: 22px;
    padding-top:10px;
    padding-bottom:10px;
`;

export const CdrCard = styled.div`
    background: #FFFFFF;
    border-radius: 16px;
    display:flex;
    width:650px;
    flex-direction:row;   
    ${({ theme }) => theme.components.Card && theme.components.Card.styles}
`


CardTitle.defaultProps = {
    theme: {
        components: {
            Card: {

            }
        }
    }
}