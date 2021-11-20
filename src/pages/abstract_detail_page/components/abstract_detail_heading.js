import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

const AbstractDetailHeading = (props) => {
    let history = useHistory();

    useEffect(() => {
        document.title = `${props.abstractDetail.bookTitle} (${props.abstractDetail.BookUID}) - Rozbor k maturitě`
    }, []);

    return (
        <div className=" pl-0  mt-3">
            <div className="d-inline-block text-md-left mb-0 mb-md-5 ml-0  pl-0 pl-sm-2 pl-md-3 pl-lg-5 align-middle">
                <h2 className="text-md-left text-dark">{props.abstractDetail.bookTitle} ({props.abstractDetail.BookUID})</h2>
                <h5 className="text-muted">Autor: <u onClick={() => history.push(`/${props.abstractDetail.authorSlug}/`)} className="writerLink">{props.abstractDetail.author}</u></h5>
                <h5 className="text-muted">Datum vydání: {props.abstractDetail.bookDate}</h5>
                <h5 className="text-muted">Stránka rozboru: {props.abstractDetail.website}</h5>
            </div>
        </div>
    );
}

export default AbstractDetailHeading;