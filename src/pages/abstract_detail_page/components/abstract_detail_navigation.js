import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const DetailNavigation = (props) => {
    let history = useHistory();

    return (
        <>
            <Row className="col-12 mt-5 mt-md-5  mx-0 px-0">
                <Button variant="dark" onClick={() => history.push(`/${props.abstractDetail.authorSlug}/${props.abstractDetail.bookSlug}/${props.abstractDetail.prev}/`)} className={props.abstractDetail.prev !== 0 ? ("rounded-0 align-middle  col-6 col-lg-4 mr-auto") : ("rounded-0 align-middle  col-6 col-lg-4 invisible mr-auto")}><FontAwesomeIcon className=" mr-2 text-white align-middle" icon={faAngleLeft} size="lg" /> Předchozí</Button>
                <Button variant="dark" onClick={() => history.push(`/${props.abstractDetail.authorSlug}/${props.abstractDetail.bookSlug}/${props.abstractDetail.next}/`)} className={props.abstractDetail.next !== 0 ? ("rounded-0 align-middle  col-6 col-lg-4") : ("rounded-0 align-middle  col-6 col-lg-4 invisible")}>Další <FontAwesomeIcon className=" ml-2 text-white align-middle" icon={faAngleRight} size="lg" /></Button>
            </Row>
            <Row className="col-12 mt-1 mt-md-3 md-lg-5  mx-0 px-0">
                <Button onClick={() => history.push(`/${props.abstractDetail.authorSlug}/${props.abstractDetail.bookSlug}`)} variant="dark" className="align-middle mr-auto col-12 web-color-button rounded-0"><FontAwesomeIcon className="mr-2" icon={faAngleDoubleLeft} size="lg" /> Zpět na seznam</Button>
            </Row>
        </>
    );

}

export default DetailNavigation;