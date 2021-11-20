import React, { useState, useRef } from 'react';
import { Button, InputGroup, FormControl, Row } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faClipboardCheck, faList, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";


const DetailCopy = (props) => {
    const [copied, setCopied] = useState(false);
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <Row className="align-middle col-12 mx-0 px-0 mt-5 mt-md-0">
            <Button onClick={() => window.open(props.abstractDetail.url, "_blank")} className="  col-12 col-lg-4  px-0  mr-auto align-middle web-color-bg rounded-0 mb-1 mb-md-3 web-color-border w-100" >Otevřít rozbor</Button>
            <div className="col-12 col-lg-8  px-0">
                <InputGroup className="mb-3">
                    <FormControl
                        readOnly
                        className="rounded-0"
                        defaultValue={props.abstractDetail.url}
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <CopyToClipboard text={props.abstractDetail.url}>
                            <Button ref={target} onClick={() => { setCopied(true); setShow(!show) }} variant="outline-secondary" className="rounded-0 bg-dark">
                                {copied ? <FontAwesomeIcon className="text-white" icon={faClipboardCheck} size="lg" />
                                    : <FontAwesomeIcon className="text-white" icon={faClipboard} size="lg" />}
                            </Button>
                        </CopyToClipboard>
                        <Overlay target={target.current} show={show} placement="top">
                            {(props) => (
                                <Tooltip id="overlay-example" {...props}>
                                    Odkaz zkopírován!
                                </Tooltip>
                            )}
                        </Overlay>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </Row>
    );
}

export default DetailCopy;