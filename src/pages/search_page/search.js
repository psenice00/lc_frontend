import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { bookSearchFunction } from "../../state/books/booksActions";
import { writerSearchFunction } from "../../state/writers/writersActions";
import BookTable from "./components/books_table";
import WritersTable from "./components/writers_table";


const Search = (props) => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const writersState = useSelector((state) => state.writersReducer);

    useEffect(() => {
        loadSearchQuery();
        if (writersState.currentSearchField === '') {
            setSearch(new URLSearchParams(props.location.search).get('query'));
        } else {
            setSearch(writersState.currentSearchField);
        }
    }, [writersState.currentSearchField]);

    const loadSearchQuery = () => {
        let searchSlug = new URLSearchParams(props.location.search).get('query');
        dispatch(writerSearchFunction(searchSlug));
        dispatch(bookSearchFunction(searchSlug));
    }

    return (
        <Container className="container-content-web shadow normalFont py-5">
            <div className="col-12 col-md-11 mx-0 mx-md-auto px-0 px-sm-2 px-lg-4">
                <div className=" pl-0 pl-xl-4 mt-3"><h2 className="text-center text-md-left mb-5 ml-0 ml-md-4 ml-lg-5  pl-0 pl-lg-5 align-middle"><FontAwesomeIcon icon={faSearch} size="sm" /> - {search}</h2></div>
                <Tabs fill defaultActiveKey="writers" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="writers" title="Spisovatelé">
                        <WritersTable reload={loadSearchQuery} />
                    </Tab>
                    <Tab eventKey="books" title="Knihy">
                        <BookTable reload={loadSearchQuery} />
                    </Tab>
                </Tabs>
            </div>
        </Container>
    );

}

export default Search;