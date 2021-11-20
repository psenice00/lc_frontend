import React from "react";
import { Button } from "react-bootstrap";
import { getErrorImage } from "../utils/error_helpers";

const ErrorPage = (props) => {

    return (
        <div className="text-center">
            <div >
                <img src={getErrorImage(props.error.status)} className="img-fluid w-75" />
            </div>
            <div>
                <h2>{props.error.message}</h2>
                {/* TODO- ucělat odkaz na dotazník */}
                <p>Omlouváme se za nepříjemnosti. Zkuste to prosím znovu. V případě opakovaných problému nás prosím kontaktujte zde.</p>
                <Button onClick={() => props.reloadFunc()}>
                    načíst znovu
                </Button>
            </div>
        </div>
    );
}

export default ErrorPage;