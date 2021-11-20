import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const BookItem = (props) => {
    let history = useHistory();

    return (
        <div className="item-hover">
            {props.index === 0 ? (<hr className="mt-2 mb-0 py-0" />) : null}
            <div className="col-12 pt-2"><h4>{props.book.title}</h4></div>
            {props.slug === 'all' ? (
                <div className="d-flex mb-0 align-items-center">
                    <p className="align-middle mb-0 pl-3 mr-auto">{props.book.authorName}</p>
                    <p className="align-middle mb-0 pr-5">{props.book.publishDate}</p>
                    <p className="align-middle text-right pr-2 pr-md-4  mb-0 pl-3"><Button onClick={() => history.push(`/${props.book.authorSlug}/${props.book.slug}/`)} size="sm" className="web-color-button rounded-0 align-middle">Zobrazit</Button></p>
                </div>
            ) : (
                <div className="d-flex mb-0 d-flex justify-content-end align-items-center">
                    <p className="align-middle mb-0 pr-2 pr-mb-4 pr-lg-5">{props.book.publishDate}</p>
                    <p className="align-middle text-right pr-2 pr-md-4  mb-0 pl-3"><Button onClick={() => history.push(`/${props.book.authorSlug}/${props.book.slug}/`)} size="sm" className="web-color-button rounded-0 align-middle">Zobrazit</Button></p>
                </div>
            )}
            <hr className="mt-2 mb-0 py-0" />
        </div>
    );
}

export default BookItem;