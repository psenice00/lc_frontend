import React, {  Fragment } from 'react';

import { Col } from 'react-bootstrap';



const Footer = () => {

    let fullYear = new Date().getFullYear();

    return (

        <Fragment >
            <footer className="page-footer font-small blue">
                <Col lg={12} className=" footer-copyright text-center py-2 text-muted ">
                    <div>{fullYear}-{fullYear + 1},© Všechna práva vyhrazena</div>
                </Col>
            </footer>

        </Fragment>
    );

}

export default Footer;