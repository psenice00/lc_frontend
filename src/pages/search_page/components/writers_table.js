import React, { Fragment } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import ErrorPage from "../../../shared_components/error_page";
import PaginationEL from "../../../shared_components/pagination";
import { customURLwriters, getWriters } from "../../../state/writers/writersActions";
import WriterTableItem from "./writer_table_item";
import Spinner from "../../../shared_components/spinner";

const WritersTable = (props) => {
    const appState = useSelector((state) => state.appStateReducer);
    const writersState = useSelector((state) => state.writersReducer);
    const dispatch = useDispatch();

    return (
        <>
            {(appState.loading && writersState.writers.length === 0) ? (<Spinner height={250} width={250} />) : (

                appState.error ? <ErrorPage reloadFunc={() => props.reload()} error={appState.error} /> : (
                    <Fragment>
                        <Table hover >

                            <tbody>
                                {writersState.writers === undefined ? null : (
                                    writersState.writers.map((writer) => {
                                        return (
                                            <WriterTableItem writer={writer} key={writer.slug} />
                                        )
                                    })
                                )}
                            </tbody>
                        </Table>
                        {writersState.next !== null && <PaginationEL nextFunc={() => dispatch(customURLwriters(writersState.next))} isLoading={appState.loading} />}

                    </Fragment>
                )

            )}
        </>
    );
}

export default WritersTable;