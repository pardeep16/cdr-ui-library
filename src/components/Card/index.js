import PropTypes from 'prop-types';
import { CardTitle,CardBody,CardHeader,
    CdrCard,CardImage,CardWithImage,
    CardHeaderText,PublishDate,CardDescription,CardFooter,CardAuthorTitle,ReadMoreText } from './card-style';
import {formatDistance} from 'date-fns';
import { Avatar } from '../Avatar';



const Card=(props)=>{


    const getAuthor=()=>{
        const authorComponents=new Array();
        if(props.author.photo){
            authorComponents.push(<Avatar path={props.author.photo}/>)
        }
        if(props.author.name){
            authorComponents.push(<CardAuthorTitle>{props.author.name}</CardAuthorTitle>)
        }

        authorComponents.push(<ReadMoreText>{`Read more 🡢`}</ReadMoreText>);

        return authorComponents;
    }


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
            
            <CardFooter>
            
                {props.author && getAuthor()}
                
            </CardFooter>
            
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
    thumbnail:PropTypes.string,
    enableBody:PropTypes.bool

}

Card.defaultProps={
    
}



export default Card;