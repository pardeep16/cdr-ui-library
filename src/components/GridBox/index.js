import React from 'react';
import PropTypes from 'prop-types';
import {gridBoxStyles} from './gridbox.style';
import {cx} from '@emotion/cx';
import styled from 'styled-components';

const GridBox=()=>{
    return (
        <section className={cx(gridBoxStyles)}>
            <div className="cdr-ui-grid-box">

            </div>
        </section>
    )
}

GridBox.propTypes = {
    title:PropTypes.string.isRequired,
    icon:PropTypes.string,
    backgroundColor:PropTypes.string,
    rounded:PropTypes.bool,
    path:PropTypes.string    
}

GridBox.defaultProps = {
    rounded:false
}


export default GridBox;