import PropTypes from 'prop-types';
import RichText from '../RichText';
import { CardTitle,CardBody,CardHeader,CdrCard } from './card-style';

const Card=(props)=>{
    return (
        <CdrCard className={`card`}>
            <div className={`card-body`}>
            {props.header && <CardHeader>
                {props.header}
            </CardHeader>}
                <CardTitle className="card-title">
                    {props.title}
                </CardTitle>
                <CardBody className={`card-text`}>
                    {props.body}
                    {props.html && <RichText body={props.html}/>}
                </CardBody>
                {props.children}
            </div>
        </CdrCard>
    )
}

Card.prototypes={
    title:PropTypes.string,
    body:PropTypes.string,
    header:PropTypes.string,
    html:PropTypes.string

}



export default Card;