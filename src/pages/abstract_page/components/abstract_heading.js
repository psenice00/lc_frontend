import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

const AbstractHeading = (props) => {
    let history = useHistory();

    useEffect(() => {
        document.title = props.book && `${props.book.title} - ${props.book.authorName}`
    }, []);

    return (

        <div className=" pl-0 pl-xl-4  mt-3">
            <div className="d-inline-block text-md-left mb-5 ml-0 ml-md-4 ml-lg-5  pl-0 pl-lg-5 align-middle">
                <h2 className="text-md-left text-dark">{props.book.title}</h2>
                <h5 className="text-muted">Autor: <u onClick={() => history.push(`/${props.autorSlug}/`)} className="writerLink">{props.book.authorName}</u></h5>
                <h5 className="text-muted">Datum vydání: {props.book.publishDate}</h5>
            </div>
        </div>
    );

}

export default AbstractHeading;