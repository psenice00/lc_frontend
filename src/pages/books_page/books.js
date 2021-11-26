import React, { useEffect, Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Table, Image, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";

import { resetWriter, getWriter } from "../../state/writers/writersActions";
import { getBooks, getAutohorsBooks, customURLbooks, resetAuthorsBooks } from "../../state/books/booksActions";
import BookItem from "./components/book_item";
import ErrorPage from "../../shared_components/error_page";
import Spinner from '../../shared_components/spinner';
import PaginationEL from "../../shared_components/pagination";
import databazeKnih from "./components/databaze-knih.png"

const Books = (props) => {
    const appState = useSelector((state) => state.appStateReducer);
    const writersState = useSelector((state) => state.writersReducer);
    const booksState = useSelector((state) => state.bookReducer);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        loadBooks(params.slug);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        const pushAd = () => {
            try {
                const adsbygoogle = window.adsbygoogle
                console.log({ adsbygoogle })
                adsbygoogle.push({})
            } catch (e) {
                console.error(e)
            }
        }

        let interval = setInterval(() => {
            if (window.adsbygoogle) {
                pushAd()
                clearInterval(interval)
            }
        }, 300)

        return () => {
            clearInterval(interval)
        }


    }, [params.slug]);

    const loadBooks = (slugUrl) => {
        if (slugUrl === 'all') {
            dispatch(resetAuthorsBooks());
            dispatch(resetWriter());
            dispatch(getBooks());
            document.title = "Seznam knih";
        } else {
            dispatch(resetAuthorsBooks());
            dispatch(getWriter(slugUrl));
            dispatch(getAutohorsBooks(slugUrl));
            document.title = writersState.writer ? writersState.writer.name : slugUrl;
        }
    }


    return (
        <Container className=" container-content shadow normalFont py-5">
            {(appState.loading && booksState.books.length === 0) ? (<Spinner height={250} width={250} />) : (

                appState.error ? <ErrorPage reloadFunc={() => loadBooks()} error={appState.error} /> : (

                    <Fragment>
                        {writersState.writer ? (
                            <div className="mt-3">
                                <div className="col-12 col-lg-10 mx-auto px-0">
                                    <div className="d-flex justify-content-left align-items-start align-items-md-center mb-5">
                                        <Image className="authorImg rounded  mt-1 mt-md-0" src={writersState.writer.imageUrl} />
                                        <div className="d-inline-block align-middle ml-3 ml-md-5">
                                            <h2 className="text-md-left text-dark mb-0">{writersState.writer.name}</h2>
                                            <h5 className="text-md-left text-muted mt-0">{writersState.writer.pseudonyms}</h5>
                                            <h5 className="text-md-left text-muted">{writersState.writer.liveDate}</h5>
                                        </div>
                                        <div className="d-none d-lg-block ml-auto mb-auto">
                                            <Button className=" border-0" style={{ backgroundColor: '#a03a3b' }}>
                                                <Image src={databazeKnih} width="150px" />
                                                <p style={{ opacity: '0.9' }} className="mb-0">Zobrazit autora</p>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-block d-lg-none ml-auto mb-auto">
                                    <Button className=" border-0 pb-3 pt-2" style={{ backgroundColor: '#a03a3b' }} block>
                                        <span style={{ opacity: '0.9' }} className="align-bottom pr-2">Zobrazit autora na</span>
                                        <Image src={databazeKnih} width="150px" />
                                    </Button>
                                </div>
                                <Helmet>
                                    <title>{`${writersState.writer.name} - autor knih s dostupnými rozbory | LínýČtenář.cz`}</title>
                                    <meta name="description" content={`seznam knih autora ${writersState.writer.name} ke kterým najdeš rozbory k maturitě.`} />
                                </Helmet>
                            </div>
                        ) : (<div className=" pl-0 pl-xl-4  mt-3"><h2 className="text-center text-md-left mb-5 ml-0 ml-md-4 ml-lg-5  pl-0 pl-lg-5 ">Seznam knih</h2>
                            <Helmet>
                                <title>Seznam knih s dostupnými rozbory k maturitě | LínýČtenář.cz</title>
                                <meta name="description" content={`Uplný seznam knih ke kterým najdeš rozbory k maturitě.`} />
                            </Helmet></div>)}
                        <div className="mx-auto col-12">
                            <ins
                                className="adsbygoogle"
                                style={{ display: "inline-block", width: "300px", height: "250px" }}
                                data-ad-client="ca-pub-5957599795213364"
                                data-ad-slot="2114087550"
                            ></ins>
                        </div>
                        <Table hover className="col-12 col-lg-10 mx-auto">
                            <tbody>
                                {booksState.books === undefined ? null : (
                                    booksState.books.map((book, index) => {
                                        return <BookItem key={book.slug} book={book} index={index} slug={book.slug} />
                                    })
                                )}
                            </tbody>
                        </Table>

                        {booksState.next !== null && <PaginationEL nextFunc={() => dispatch(customURLbooks(booksState.next))} isLoading={appState.loading} />}

                    </Fragment>
                )

            )}
        </Container>
    );


}

export default Books;