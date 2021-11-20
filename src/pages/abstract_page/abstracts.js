import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { getBookDetail } from "../../state/books/booksActions";
import { getAbstracts, customURLabstracts } from "../../state/abstracts/abstractsActions";
import AbstractHeading from "./components/abstract_heading";
import AbstractItem from "./components/abstract_item";
import Spinner from '../../shared_components/spinner';
import PaginationEL from "../../shared_components/pagination";
import ErrorPage from "../../shared_components/error_page";

const Abstracts = () => {
    const appState = useSelector((state) => state.appStateReducer);
    const writersState = useSelector((state) => state.writersReducer);
    const booksState = useSelector((state) => state.bookReducer);
    const abstractState = useSelector((state) => state.abstractReducer);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        loadAbstracts(params.book);
    }, []);

    const loadAbstracts = (slug) => {
        dispatch(getBookDetail(slug));
        dispatch(getAbstracts(slug));
    }


    return (
        <Container className=" container-content shadow normalFont py-5">
            {(appState.loading && abstractState.abstracts.length === 0) ? (<Spinner height={250} width={250} />) : (

                appState.error ? <ErrorPage reloadFunc={() => loadAbstracts()} error={appState.error} /> : (
                    <div>
                        {booksState.book && <AbstractHeading book={booksState.book} autorSlug={params.writer} />}

                        {abstractState.abstracts !== undefined &&
                            (<Table hover className="col-12 col-lg-10 mx-auto">
                                <tbody>
                                    {
                                        abstractState.abstracts.map((abstract, index) => {
                                            return (
                                                <AbstractItem key={index} book={booksState.book} abstract={abstract} bookSlug={params.book} writerSlug={params.writer} />
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>)
                        }
                        {abstractState.next !== null && <PaginationEL nextFunc={() => dispatch(customURLabstracts(abstractState.next))} isLoading={appState.loading} />}
                    </div>

                ))}
        </Container>

    );


}

export default Abstracts;