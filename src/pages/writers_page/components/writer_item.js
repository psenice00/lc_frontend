import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WriterItem = (props) => {


    return (
        <tr className="d-flex align-items-center">
            <td colSpan="2" className=" pl-2 pl-md-4 "><h4 className="mb-0">{props.writer.name}</h4>{props.writer.pseudonyms ? <span className="text-muted">{props.writer.pseudonyms}</span> : <div>&nbsp;</div>}</td>
            <td className="text-right d-none d-md-block ml-auto">{props.writer.liveDate}</td>
            <td className="justify- pr-2 pr-md-4 ml-auto ml-md-5"><Link to={{
                pathname: (props.writer.slug + '/')
            }}><Button  size="sm" className="web-color-button rounded-0">Zobrazit</Button></Link></td>
        </tr>
    );
}

export default WriterItem;