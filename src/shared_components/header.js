import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, Dropdown, Overlay } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBookOpen, faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import { compose } from "redux";
import ReactAutocomplete from 'react-autocomplete';
import debounce from 'lodash.debounce';

import { writerSearchFunction, updateCurrentSearchFunction, resetWritersList, getSuggestions, cleanSuggestions } from '../state/writers/writersActions';
import { bookSearchFunction, resetAuthorsBooks } from '../state/books/booksActions';
import { escapeSpecialCharsFromString } from '../utils/stringEscaping';




class Header extends Component {

    constructor(props) {
        super(props);
        this.attachRef = target => this.setState({ target });
        this.onChangeDebounced = debounce(this.onChangeDebounced, 400);
        this.state = {
            show: false,
            inputString: '',
            isNavExpand: false

        };




    }

    hideNav() {
        if (window.innerWidth <= 1200) {
            document.querySelector(".animated-icon2").click();
        }

    };

    /*    hideNavFromBranding(){
            if(window.innerWidth <= 1200 && this.state.show){
                document.querySelector(".animated-icon2").click();
            }
        }*/

    updateReducer() {
        let queryString = escapeSpecialCharsFromString(this.state.inputString);
        queryString = queryString.toLowerCase().replace(/\./g, '');

        this.props.resetAuthorsBooks();
        this.props.resetWritersList();

        this.props.updateCurrentSearchFunction(this.state.inputString);

        // this.props.writerSearchFunction(queryString);
        // this.props.bookSearchFunction(queryString);
    };


    handleSearchButton() {
        if (this.state.inputString.length < 1) {
            this.setState({ show: true });
        } else {
            this.updateReducer();
            this.props.history.push(`/search?query=${escapeSpecialCharsFromString(this.state.inputString).toLowerCase().replace(/\./g, '')}`);
            this.hideNav();
        }
    }

    _handleKeyDown(e) {
        if (e.key === 'Enter') {
            this.handleSearchButton();
        }
    }

    handleInputChange = (inputValue) => {
        this.setState({ inputString: inputValue });
        this.onChangeDebounced();
    }

    onChangeDebounced = () => {
        if (!this.props.appState.loadingSuggestions && this.state.inputString.length > 2) {
            if (this.state.show === true) {
                this.setState({ show: false });
            }
            this.props.getSuggestions(escapeSpecialCharsFromString(this.state.inputString));
        } else if (this.state.inputString.length > 0) {
            if (this.state.show === false) {
                this.setState({ show: true });
            }
            this.props.cleanSuggestions();
        } else {
            if (this.state.show === true) {
                this.setState({ show: false });
            }
        }
    }


    getInputWidth() {
        return document.getElementById("inputBar").clientWidth - 80;
    }


    toggleTheIcon() {
        var icon = document.querySelector('.animated-icon2');
        icon.classList.toggle('open');
    }

    render() {
        setTimeout(() => {
            var input = document.getElementById('searchInput');
            input.addEventListener('keydown', this._handleKeyDown.bind(this));
        }, 200)


        const { show, target } = this.state;

        return (
            <Navbar sticky="top" id="navbar" className="navbar mb-lg-0 px-3 px-xl-5 py-0" collapseOnSelect bg="light" expand="lg">

                <Link to="/" className="nounderline"><h2 className="mt-2 text-dark font-weight-bolder mr-0 mr-xl-5 pr-0 pr-sm-5">LínýČtenář.cz</h2></Link>
                <Navbar.Toggle onClick={() => this.toggleTheIcon()} id="togglerButton" className="navbar-toggler second-button mr-3" aria-controls="basic-navbar-nav" aria-label="Toggle navigation"> <div className="animated-icon2"><span></span><span></span><span></span><span></span></div></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className="ml-0 ml-xl-5 pl-0 pl-xl-4 bg-light  d-lg-flex justify-content-between ">
                    <div></div>
                    <Nav className="col-12  col-lg-7  ml-2 ml-lg-0 ml-xl-3  pl-0  pl-xl-5 pt-5 pt-lg-0">
                        {/* <div id="inputBar" className=" input-group"> */}
                        {/* <input ref={this.attachRef} value={this.props.searchField} onKeyDown={(event) => this._handleKeyDown(event)} onChange={evt => this.textChangeInput(evt.target.value)} className=" form-control  border-0" type="text" placeholder="Hledat" id="searchInput" aria-label="Search" /> */}
                        <div ref={this.attachRef} id="inputBar" className=" d-flex flex-row col-12" >
                            <ReactAutocomplete
                                labelKey="Hledej"
                                getItemValue={(item) => item.slug}
                                onChange={(e) => this.handleInputChange(e.target.value)}
                                placeholder="Hledej"
                                items={this.props.suggestions}
                                style={{
                                    border: '0',

                                }}
                                menuStyle={{
                                    borderRadius: '0',
                                    fontSize: '100%',
                                    position: 'fixed',
                                    border: ' 1px solid grey',
                                    borderTop: 'none',
                                    background: 'rgba(255, 255, 255, 1)',
                                    overflow: 'auto',
                                    maxHeight: '100%',
                                }}
                                loading={this.props.appState.loadingSuggestions}
                                renderInput={function (props) {
                                    return <>
                                        {this.loading && <div className="spinner-border loader text-secondary" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>}
                                        <input {...props} placeholder="Hledat" id="searchInput" style={{ width: '100%', height: '100%', fontSize: '25px' }} /></>
                                }}
                                value={this.state.inputString}
                                renderItem={(item, isHighlighted) =>
                                    <div key={item.slug} className="px-4 border-top" style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                        {item.isBook ? (
                                            <Link to={{ pathname: '/' + item.authorSlug + '/' + item.slug }} style={{ textDecoration: 'none' }} >
                                                <div className="d-flex row align-items-center py-1">
                                                    <FontAwesomeIcon className="web-color" size="lg" icon={faBookOpen} />
                                                    <div className="ml-3 my-0 py-0 align-middle">
                                                        <h4 className="m-0 p-0 web-color">{item.title}</h4>
                                                        <p className="m-0 p-0 text-secondary">{item.authorName} {item.authorPseudonyms && (item.authorPseudonyms)}</p>
                                                    </div>

                                                </div>
                                            </Link>
                                        ) :
                                            <Link to={{ pathname: '/' + item.slug }} style={{ textDecoration: 'none' }}>
                                                <div className="d-flex row align-items-center py-2">
                                                    <FontAwesomeIcon className="web-color ml-1" size="lg" icon={faUser} />
                                                    <div>
                                                        <h4 className="ml-3 m-0 p-0 my-0 web-color">{item.writer}</h4>
                                                        <p className="ml-3 m-0 p-0 mt-0  text-secondary">{item.pseudonyms}</p>
                                                    </div>
                                                </div>

                                            </Link>

                                        }
                                    </div>
                                }
                            />
                            <div className="input-group-append">
                                <span className=" input-group-text bg-dark border-0 rounded-0 px-3 cursor-pointer" onClick={() => this.handleSearchButton()} id="basic-text1"><FontAwesomeIcon id="searchButton" className="text-white" icon={faSearch} /></span>
                            </div>

                            <Overlay className="d-none d-md-block" target={target} show={show} placement="bottom" >
                                {({ placement, scheduleUpdate, arrowProps, ...props }) => (
                                    <div className="text-center pt-2 pb-0"
                                        {...props}
                                        style={{
                                            backgroundColor: 'rgba(255, 100, 100, 0.85)',
                                            color: 'white',
                                            width: this.getInputWidth() + 'px',
                                            borderRadius: 0,
                                            ...props.style,
                                            zIndex: 2000,
                                        }}
                                    >
                                        <h5>Zadejte alespoň 3 znaky</h5>
                                    </div>
                                )}
                            </Overlay>
                        </div>
                    </Nav>

                    <Dropdown.Divider />

                    <Nav className="text-center py-2 py-lg-0 align-middle">
                        <Link onClick={() => this.hideNav()} className="align-middle web-color h4 pr-0 pr-lg-3 mb-3 mb-lg-0" to="/writers">Spisovatelé</Link>
                        <Link onClick={() => (this.hideNav())} className="web-color h4 pr-0 pr-lg-3 mb-3 mb-lg-0" to={{ pathname: '/all' }}>Knihy</Link>
                        <Link onClick={() => this.hideNav()} className="web-color h4 mb-3 mb-lg-0" to="/questionare">Chybí zde rozbor?</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => ({
    suggestions: state.writersReducer.suggestions,
    appState: state.appStateReducer
})

export default compose(withRouter, connect(mapStateToProps, { getSuggestions, cleanSuggestions, writerSearchFunction, updateCurrentSearchFunction, bookSearchFunction, resetAuthorsBooks, resetWritersList }))(Header);