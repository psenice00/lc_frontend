import React from "react";
import { Button } from "react-bootstrap";
import { getErrorImage } from "../utils/error_helpers";

const ErrorPage = (props) => {

    return (
        <div className="text-center">
            <div >
                <img src={getErrorImage(props.error.status)} className="img-fluid col col-md-8 col-lg-6 mx-auto" />
            </div>
            <div>
                <h2>{props.error.message}</h2>
                {/* TODO- ucělat odkaz na dotazník */}
                <p className="mb-0">Omlouváme se za nepříjemnosti. Zkuste to prosím znovu.</p>
                <p>V případě opakovaných problému nás kontaktujte skrze dotazník.</p>
                <Button className=" col-11 col-md-6 col-lg-4 web-color-button rounded-0 align-middle" onClick={() => props.reloadFunc()}>
                    Načíst znovu
                </Button>
            </div>
        </div>
    );
}

export default ErrorPage;