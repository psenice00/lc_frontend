import React, { useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import databazeKnih from "./databaze-knih.png"

const AbstractHeading = (props) => {
    let history = useHistory();

    useEffect(() => {
        document.title = props.book && `${props.book.title} - ${props.book.authorName}`
    }, []);

    return (
        <>
            <div className="col-12 col-lg-10 mx-auto px-0 mt-3">
                <div className="d-flex justify-content-left align-items-start align-items-md-center mb-2">
                    <div className="d-inline-block align-middle">
                        <h2 className="text-md-left text-dark">{props.book.title}</h2>
                        <h5 className="text-muted">Autor: <u onClick={() => history.push(`/${props.autorSlug}/`)} className="writerLink">{props.book.authorName}</u></h5>
                        <h5 className="text-muted">Datum vydání: {props.book.publishDate}</h5>
                    </div>
                    <div className="d-none d-lg-block ml-auto mb-auto">
                        <Button onClick={() => window.open(props.book.url, '_blank', 'noopener,noreferrer')} className=" border-0" style={{ backgroundColor: '#a03a3b' }}>
                            <Image src={databazeKnih} width="150px" />
                            <p style={{ opacity: '0.9' }} className="mb-0">Zobrazit knihu</p>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="d-block d-lg-none ml-auto mb-4">
                <Button onClick={() => window.open(props.book.url, '_blank', 'noopener,noreferrer')} className=" border-0 pb-3 pt-2" style={{ backgroundColor: '#a03a3b' }} block>
                    <span style={{ opacity: '0.9' }} className="align-bottom pr-2">Zobrazit knihu na</span>
                    <Image src={databazeKnih} width="150px" />
                </Button>
            </div>
        </>
    );

}

export default AbstractHeading;
