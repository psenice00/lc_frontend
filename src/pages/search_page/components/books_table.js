import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ErrorPage from "../../../shared_components/error_page";
import PaginationEL from "../../../shared_components/pagination";
import Spinner from "../../../shared_components/spinner";
import { customURLbooks } from "../../../state/books/booksActions";
import BookTableItem from "./book_table_item";

const BookTable = (props) => {
    const appState = useSelector((state) => state.appStateReducer);
    const booksState = useSelector((state) => state.bookReducer);
    const dispatch = useDispatch();

    return (
        < >
            {(appState.loading && booksState.books.length === 0) ? (<Spinner height={250} width={250} />) : (

                appState.error ? <ErrorPage reloadFunc={() => props.reload()} error={appState.error} /> : (

                    <>
                        <Table hover >
                            <tbody>
                                {booksState.books !== undefined && (
                                    booksState.books.map((book, index) => {
                                        return <BookTableItem key={book.slug} book={book} index={index} slug={book.slug} />
                                    })
                                )}
                            </tbody>
                        </Table>

                        {booksState.next !== null && <PaginationEL nextFunc={() => dispatch(customURLbooks(booksState.next))} isLoading={appState.loading} />}

                    </>
                )

            )}
        </>
    );

}

export default BookTable;