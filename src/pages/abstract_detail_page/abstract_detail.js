import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import AbstractDetailHeading from "./components/abstract_detail_heading";
import { resetAbstractDetail, getAbstractDetail } from "../../state/abstracts/abstractsActions";
import Spinner from '../../shared_components/spinner';
import ErrorPage from "../../shared_components/error_page";
import DetailCopy from "./components/abstract_detail_copy";
import DetailNavigation from "./components/abstract_detail_navigation";
import { Helmet } from "react-helmet";
import { Adsense } from "@ctrl/react-adsense";

const AbstractDetail = () => {
    const appState = useSelector((state) => state.appStateReducer);
    const writersState = useSelector((state) => state.writersReducer);
    const booksState = useSelector((state) => state.bookReducer);
    const abstractState = useSelector((state) => state.abstractReducer);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        loadAbstractDetail(params.book, params.abstractId);
        document.title = abstractState.abstractDetail ? `${abstractState.abstractDetail.bookTitle} (${abstractState.abstractDetail.BookUID}) - Rozbor k maturitě` : `${params.book} (${params.abstractId}) - Rozbor k maturitě`;


    }, [params.abstractId]);

    const loadAbstractDetail = (bookSlug, abstractId) => {
        dispatch(resetAbstractDetail());
        dispatch(getAbstractDetail(bookSlug, abstractId));
    }



    return (
        <Container className=" container-content-web shadow normalFont py-5">
            {(appState.loading ? (<Spinner height={250} width={250} />) : (

                appState.error ? <ErrorPage reloadFunc={() => loadAbstractDetail()} error={appState.error} /> : (

                    (abstractState.abstractDetail &&
                        (<div>
                            <AbstractDetailHeading abstractDetail={abstractState.abstractDetail} />
                            <div className="col-12 col-lg-11 px-0 mx-auto">
                                <DetailCopy abstractDetail={abstractState.abstractDetail} />
                                <DetailNavigation abstractDetail={abstractState.abstractDetail} />
                            </div>
                            <Helmet>
                                <title>{`${abstractState.abstractDetail.bookTitle}(${abstractState.abstractDetail.BookUID}) - rozbor díla k maturitě ze stránky ${abstractState.abstractDetail.website} | LínýČtenář.cz`}</title>
                                <meta name="description" content={`Rozbor knihy ${abstractState.abstractDetail.bookTitle}(${abstractState.abstractDetail.BookUID}) k maturitě už na tebe čeká na stránce ${abstractState.abstractDetail.website}.`} />
                            </Helmet>
                        </div>)
                    ))))}
        </Container>

    );
}

export default AbstractDetail;