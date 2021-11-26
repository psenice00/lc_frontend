import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Table, Button, Row } from 'react-bootstrap';
import { Helmet } from "react-helmet";

import Spinner from '../../shared_components/spinner';
import WriterItem from "./components/writer_item";
import { getWriters, customURLwriters } from "../../state/writers/writersActions";
import PaginationEL from "../../shared_components/pagination";
import ErrorPage from "../../shared_components/error_page";

const Writers = () => {

    const appState = useSelector((state) => state.appStateReducer);
    const writersState = useSelector((state) => state.writersReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        if (writersState.writers) {
            if (writersState.writers.length < 20) {
                dispatch(getWriters());
            }

        }

        document.title = "Seznam spisovatelů";
    }, []);

    return (
        <Container className="container-content shadow normalFont py-5">
            {(appState.loading && writersState.writers.length === 0) ? (<Spinner height={250} width={250} />) : (

                appState.error ? <ErrorPage reloadFunc={() => dispatch(getWriters())} error={appState.error} /> : (
                    <Fragment>
                        <div className=" pl-0 pl-xl-4 mt-3"><h2 className="text-center text-md-left mb-5 ml-0 ml-md-4 ml-lg-5  pl-0 pl-lg-5">Seznam spisovatelů</h2></div>
                        <div className="mx-auto">
                            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5957599795213364"
                                crossorigin="anonymous"></script>
                            <ins class="adsbygoogle"
                                style="display:block"
                                data-ad-client="ca-pub-5957599795213364"
                                data-ad-slot="2114087550"
                                data-ad-format="auto"
                                data-full-width-responsive="true"></ins>
                            <script>
                                (adsbygoogle = window.adsbygoogle || []).push({ });
                            </script>
                        </div>
                        <Table hover className="col-12 col-lg-10 mx-auto">

                            <tbody>
                                {writersState.writers === undefined ? null : (
                                    writersState.writers.map((writer) => {
                                        return (
                                            <WriterItem writer={writer} key={writer.slug} />
                                        )
                                    })
                                )}
                            </tbody>
                        </Table>
                        {writersState.next !== null && <PaginationEL nextFunc={() => dispatch(customURLwriters(writersState.next))} isLoading={appState.loading} />}
                        <Helmet>
                            <title>Seznam spisovatelů | LínýČtenář.cz</title>
                            <meta name="description" content="Seznam autorů s dostupnými rozbory děl k maturitě." />
                        </Helmet>

                    </Fragment>
                )

            )}
        </Container>
    );
}

export default Writers;