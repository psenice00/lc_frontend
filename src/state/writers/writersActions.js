import { GET_WRITERS, GET_WRITER, RESET_WRITER, SEARCH_WRITER, UPDATE_CURRENT_SEARCH, CUSTOM_URL_WRITERS, SEND_MAIL, RESET_WRITERS_LIST, GET_SUGGESTIONS } from './writersTypes';
import { TOGGLE_LOADING, TOGGLE_ERROR, TOGGLE_SUGGESTIONS_LOADING } from '../appState/appStateTypes';
import { handleError } from '../../utils/error_helpers';

import axios from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.xsrfCookieName = "csrftoken"

// const baseUrl = process.env.REACT_APP_BASE_URL;
// const baseUrl = "https://psenice00.pythonanywhere.com";
const baseUrl = "http://127.0.0.1:8000";

export const getWriters = () => (dispatch) => {
    dispatch({ type: TOGGLE_LOADING, payload: true });
    dispatch({ type: TOGGLE_ERROR, payload: null });
    axios.get(`${baseUrl}/api/writers`)
        .then((res) => {
            dispatch({
                type: GET_WRITERS,
                payload: res.data,
            });
            dispatch({ type: TOGGLE_LOADING, payload: false });
        })
        .catch(error => { handleError(error, dispatch); });
};

export const getWriter = (slug) => (dispatch) => {
    dispatch({ type: TOGGLE_LOADING, payload: true });
    dispatch({ type: TOGGLE_ERROR, payload: null });
    axios.get(`${baseUrl}/api/writer/${slug}`)
        .then((res) => {
            dispatch({
                type: GET_WRITER,
                payload: res.data,
            });
            dispatch({ type: TOGGLE_LOADING, payload: false });
        })
        .catch(error => { handleError(error, dispatch); });
};

export const writerSearchFunction = (slug) => (dispatch) => {
    dispatch({ type: TOGGLE_LOADING, payload: true });
    dispatch({ type: TOGGLE_ERROR, payload: null });
    axios.get(`${baseUrl}/api/writerSearch?search=${slug}`)
        .then((res) => {
            dispatch({
                type: SEARCH_WRITER,
                payload: res.data,
            });
            dispatch({ type: TOGGLE_LOADING, payload: false });
        })
        .catch(error => { handleError(error, dispatch); });
};

export const customURLwriters = (url) => (dispatch) => {
    dispatch({ type: TOGGLE_LOADING, payload: true });
    dispatch({ type: TOGGLE_ERROR, payload: null });
    axios.get(url)
        .then((res) => {
            dispatch({
                type: CUSTOM_URL_WRITERS,
                payload: res.data,
            });
            dispatch({ type: TOGGLE_LOADING, payload: false });
        })
        .catch(error => { handleError(error, dispatch); });
};
export const sendMail = (name, email, message) => (dispatch) => {
    dispatch({ type: TOGGLE_LOADING, payload: true });
    dispatch({ type: TOGGLE_ERROR, payload: null });
    axios({
        method: 'post',
        url: `${baseUrl}/api/createMessage`,
        data: {
            name,
            email,
            message
        }
    })
        .then((res) => {
            dispatch({
                type: SEND_MAIL,
                payload: res.data,
            });
            dispatch({ type: TOGGLE_LOADING, payload: false });
        })
        .catch(error => { handleError(error, dispatch); });
};

export const resetWritersList = () => (dispatch) => {
    return (dispatch({
        type: RESET_WRITERS_LIST,
        payload: [],
    }));

}

export const resetWriter = () => (dispatch) => {
    return (dispatch({
        type: RESET_WRITER,
        payload: null,
    }));
}

export const updateCurrentSearchFunction = (string) => (dispatch) => {
    return (dispatch({
        type: UPDATE_CURRENT_SEARCH,
        payload: string,
    }));
}

export const getSuggestions = (searchField) => (dispatch) => {
    dispatch({ type: TOGGLE_SUGGESTIONS_LOADING, payload: true });
    axios.get(`${baseUrl}/api/suggestions?search=${searchField}`)
        .then((res) => {
            dispatch({
                type: GET_SUGGESTIONS,
                payload: res.data.suggestions,
            });

        }).then(() => { dispatch({ type: TOGGLE_SUGGESTIONS_LOADING, payload: false }); })
        .catch(error => { handleError(error, dispatch); });
};

export const cleanSuggestions = () => (dispatch) => {
    dispatch({ type: TOGGLE_SUGGESTIONS_LOADING, payload: false });
    dispatch({
        type: GET_SUGGESTIONS,
        payload: [],
    });

};