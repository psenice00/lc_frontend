import { GET_BOOKS, GET_AUTHORS_BOOKS, RESET_AUTHORS_BOOKS, GET_BOOK_DETAIL, SEARCH_BOOKS, CUSTOM_URL_BOOK } from './booksTypes';
import { TOGGLE_LOADING, TOGGLE_ERROR } from '../appState/appStateTypes';
import axios from 'axios';
import { handleError } from '../../utils/error_helpers';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.xsrfCookieName = "csrftoken"
// const baseUrl = "https://psenice00.pythonanywhere.com";
// const baseUrl = "http://127.0.0.1:8000";
const baseUrl = "https://www.api.linyctenar.cz";

export const getBooks = () => (dispatch) => {
    dispatch({ type: TOGGLE_LOADING, payload: true });
    dispatch({ type: TOGGLE_ERROR, payload: null });
    axios.get(`${baseUrl}/api/books`)
        .then((res) => {
            dispatch({
                type: GET_BOOKS,
                payload: res.data,
            });
            dispatch({ type: TOGGLE_LOADING, payload: false });
        })
        .catch(error => { handleError(error, dispatch); });
};

export const getAutohorsBooks = (id) => (dispatch) => {
    dispatch({ type: TOGGLE_LOADING, payload: true });
    dispatch({ type: TOGGLE_ERROR, payload: null });
    axios.get(`${baseUrl}/api/authorsbooks/${id}`)
        .then((res) => {
            dispatch({
                type: GET_AUTHORS_BOOKS,
                payload: res.data,
            });
            dispatch({ type: TOGGLE_LOADING, payload: false });
        })
        .catch(error => { handleError(error, dispatch); });
};

export const getBookDetail = (slug) => (dispatch) => {
    dispatch({ type: TOGGLE_LOADING, payload: true });
    dispatch({ type: TOGGLE_ERROR, payload: null });
    axios.get(`${baseUrl}/api/book/${slug}`)
        .then((res) => {
            dispatch({
                type: GET_BOOK_DETAIL,
                payload: res.data,
            });
            dispatch({ type: TOGGLE_LOADING, payload: false });
        })
        .catch(error => { handleError(error, dispatch); });
};

export const bookSearchFunction = (slug) => (dispatch) => {
    dispatch({ type: TOGGLE_LOADING, payload: true });
    dispatch({ type: TOGGLE_ERROR, payload: null });
    axios.get(`${baseUrl}/api/bookSearch?search=${slug}`)
        .then((res) => {
            dispatch({
                type: SEARCH_BOOKS,
                payload: res.data,
            });
            dispatch({ type: TOGGLE_LOADING, payload: false });
        })
        .catch(error => { handleError(error, dispatch); });
};

export const customURLbooks = (url) => (dispatch) => {
    dispatch({ type: TOGGLE_LOADING, payload: true });
    dispatch({ type: TOGGLE_ERROR, payload: null });
    axios.get(url)
        .then((res) => {
            dispatch({
                type: CUSTOM_URL_BOOK,
                payload: res.data,
            });
            dispatch({ type: TOGGLE_LOADING, payload: false });
        })
        .catch(error => { handleError(error, dispatch); });
};


export const resetAuthorsBooks = () => (dispatch) => {
    return (dispatch({
        type: RESET_AUTHORS_BOOKS,
        payload: [],
    }));
}