import PropTypes from 'prop-types';
import { CardTitle,CardBody,CardHeader,
    CdrCard,CardImage,CardWithImage,
    CardHeaderText,PublishDate,CardDescription } from './card-style';
import {formatDistance} from 'date-fns';

const Card=(props)=>{
    return (
        
        <CdrCard> 
            
            {props.thumbnail?
            <CardWithImage thumbnail={props.thumbnail}/>:<CardImage />}
            <CardBody>
            <CardHeader>
                <CardHeaderText>{props.headerText}</CardHeaderText>
                {props.publishDate && <PublishDate>{formatDistance(new Date(props.publishDate),new Date(),{
                addSuffix: true
                })}</PublishDate>}
            </CardHeader>
            <CardTitle>
                {props.title}
            </CardTitle>
            <CardDescription>
                {props.description}
            </CardDescription>
            </CardBody>
           
        </CdrCard>
    )
}

Card.prototypes={
    title:PropTypes.string,
    description:PropTypes.string,
    publishDate:PropTypes.string,
    headerText:PropTypes.string,
    author:PropTypes.object,
    thumbnail:PropTypes.string

}

Card.defaultProps={
    
}



export default Card;