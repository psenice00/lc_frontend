import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AbstractItem = (props) => {

    return (
        <tr>
            <td className="pl-0 pl-md-4 align-middle"><h4>{props.book.title} ({props.abstract.BookUID})<div className="d-none d-md-inline align-middle">-Rozbor k Maturitě</div></h4></td>
            <td className="text-right pr-0 pr-md-4 align-middle"><Link Link to={{ pathname: ('/' + props.writerSlug + '/' + props.bookSlug + '/' + props.abstract.BookUID + '/') }}><Button size="sm" className="web-color-button rounded-0 align-middle">Zobrazit</Button></Link></td>
        </tr>
    );
}

export default AbstractItem;