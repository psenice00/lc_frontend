import {GET_BOOK_ABSTRACTS, GET_ABSTRACT_DETAIL, RESET_ABSTRACT_DETAIL, CUSTOM_URL_ABSTRACTS} from './abstractsTypes';
import { TOGGLE_LOADING, TOGGLE_ERROR } from '../appState/appStateTypes';
import axios from 'axios';
import { handleError } from '../../utils/error_helpers';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.xsrfCookieName = "csrftoken"
// const baseUrl = "https://psenice00.pythonanywhere.com";
const baseUrl = "http://127.0.0.1:8000";

export const getAbstracts = (slug) => (dispatch) => {
    dispatch({ type: TOGGLE_LOADING, payload: true });
    dispatch({ type: TOGGLE_ERROR, payload: null });
    axios.get(`${baseUrl}/api/abstract/${slug}`)
    .then((res) => {
        dispatch({
            type: GET_BOOK_ABSTRACTS,
            payload: res.data,
        });
        dispatch({ type: TOGGLE_LOADING, payload: false });
    })
    .catch(error => {handleError(error, dispatch);});
};
export const getAbstractDetail = (slug, id) => (dispatch) => {
    dispatch({ type: TOGGLE_LOADING, payload: true });
    dispatch({ type: TOGGLE_ERROR, payload: null });
    axios.get(`${baseUrl}/api/abstract/${slug}/${id}`)
    .then((res) => {
        dispatch({
            type: GET_ABSTRACT_DETAIL,
            payload: res.data,
        });
        dispatch({ type: TOGGLE_LOADING, payload: false });
    })
    .catch(error => {handleError(error, dispatch);});
};


export const customURLabstracts = (url) => (dispatch) => {
    dispatch({ type: TOGGLE_LOADING, payload: true });
    dispatch({ type: TOGGLE_ERROR, payload: null });
    axios.get(url)
    .then((res) => {
        dispatch({
            type: CUSTOM_URL_ABSTRACTS,
            payload: res.data,
        });
        dispatch({ type: TOGGLE_LOADING, payload: false });
    })
    .catch(error => {handleError(error, dispatch);});
};

export const resetAbstractDetail = () => (dispatch) => {
    return (    dispatch({
        type: RESET_ABSTRACT_DETAIL,
        payload: {},
    }));
}