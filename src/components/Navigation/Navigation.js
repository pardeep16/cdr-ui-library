import React from 'react';
import PropTypes from 'prop-types';
import {Navbar,Nav} from 'react-bootstrap';
import { Link } from '@material-ui/core';
import {NavigationStyles} from './navigation.styles.js';


export const Navigation=({logo,styles,...props})=>{

    console.log("Navigation ",props);
    
    return (
        <section>
        <NavigationStyles />
         <Navbar className={`cdr-ui-navbar`} collapseOnSelect expand="lg">
                <Link href={props.brandUrl} >{props.brandImage ? <img src={props.brandImage} height="70px" /> : props.brandTitle ? (<h4>{props.brandTitle}</h4>):''}</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={`m1-auto cdr-ui-navigation-items`}>
                {props.navigationItems && props.navigationItems.map(item => {
                    return <Nav.Link href={item.path}><span className="cdr-ui-nav-link">{item.label}</span></Nav.Link>
                })}

                </Nav>
                </Navbar.Collapse>
        
      </Navbar>

      
      </section>
    )

}



Navigation.propTypes = {
    brandUrl:PropTypes.string,
    brandImage:PropTypes.string,
    brandTitle:PropTypes.string,
    navigationItems:PropTypes.arrayOf(PropTypes.objectOf({
        label:PropTypes.string,
        path:PropTypes.string

    })),

}

Navigation.defaultProps={
    
    navigationItems:[]
}

