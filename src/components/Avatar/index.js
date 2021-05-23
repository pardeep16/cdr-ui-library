import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AvatarImg=styled.img`
    vertical-align: middle;
    border-radius: 50%;
`;

export const Avatar=(props)=>{
    return (
        <AvatarImg src={props.path}  alt={props.type} {...props}/>
    )
}

AvatarImg.propTypes={
    path:PropTypes.string.isRequired,
    width:PropTypes.string,
    height:PropTypes.string,
    type:PropTypes.string
}

AvatarImg.defaultProps={
    width:'32px',
    height:'32px',
    type:'Author'
}
