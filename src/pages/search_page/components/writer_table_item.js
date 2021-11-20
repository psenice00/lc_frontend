import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WriterTableItem = (props) => {


    return (
        <>
            <tr className="d-flex align-items-center px-3 py-1">
                <td colSpan="2" className="px-0"><h4 className="mb-0">{props.writer.name}</h4></td>
                <td className="text-right d-none d-md-block ml-auto">{props.writer.liveDate}</td>
                <td className=" ml-auto ml-md-5 pr-0"><Link to={{
                    pathname: (props.writer.slug + '/')
                }}><Button size="sm" className="web-color-button rounded-0">Zobrazit</Button></Link></td>
            </tr>
            <hr className="mt-0 mb-0 py-0" />
        </>
    );
}

export default WriterTableItem;