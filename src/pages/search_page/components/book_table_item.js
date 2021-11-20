import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const BookTableItem = (props) => {
    let history = useHistory();

    return (
        <div className="item-hover">
            <div className="col-12 pt-2 pl-0  px-3"><h4>{props.book.title}</h4></div>
            <div className="d-flex mb-0 align-items-center  px-3">
                <p className="align-middle mb-0  mr-auto">{props.book.authorName}</p>
                <p className="align-middle mb-0 pr-5">{props.book.publishDate}</p>
                <p className="align-middle text-right   mb-0 pl-3"><Button onClick={() => history.push(`/${props.book.authorSlug}/${props.book.slug}/`)} size="sm" className="web-color-button rounded-0 align-middle">Zobrazit</Button></p>
            </div>

            <hr className="mt-0 mb-0 py-0 mt-2" />
        </div>
    );
}

export default BookTableItem;