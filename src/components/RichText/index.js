import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';

const RichText=({body,...props})=>{
    return (
        <>
            {renderHTML(body)}
        </>
        
    )
}


RichText.propTypes={
    body:PropTypes.string
}

export default RichText;