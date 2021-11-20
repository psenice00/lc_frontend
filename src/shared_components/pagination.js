import React from "react";
import Button from "react-bootstrap/Button";
import Spinner from "./spinner";

const PaginationEL = (props) => {
    return (
        <div className="d-flex justify-content-center pt-3 mx-2 mx-md-4">
            <Button className={props.isLoading ? "btn bg-transparent rounded-0 border-0  color-web btn-block col-12 col-lg-4" : "btn bg-dark rounded-0 px-5  border-0 color-web btn-block col-12 col-lg-4"}
                onClick={props.isLoading ? null : () => props.nextFunc()}>
                {props.isLoading ? <Spinner width={100} height={50} /> : "Načíst další ..."}
            </Button>
        </div>
    );
}

export default PaginationEL;