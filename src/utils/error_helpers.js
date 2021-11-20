import ErrorImage from './error_image.png';
import { TOGGLE_ERROR, TOGGLE_LOADING } from '../state/appState/appStateTypes';
export const getErrorImage = (status) => {
    //TODO - dodělat obrázky pro ruzné image
    if (status === 404) {
        return ErrorImage;
    } else if (status === 403) {
        return ErrorImage;

    } else if (status === 400) {
        return ErrorImage;;
    } else if (status === 500) {
        return ErrorImage;
    } else {
        return ErrorImage;
    }
}

export const handleError = (error, dispatch) => {
    let newMessage;
    if (error.response) {
        //TODO - error message structure
        newMessage = { status: error.response.status, message: error.response.data };
    } else if (error.request) {
        newMessage = { status: 500, message: "Server neodpovídá" };


    } else {
        newMessage = { status: 500, message: "Chyba při navazování spojení se serverem" };
    }
    dispatch({ type: TOGGLE_ERROR, payload: newMessage });
    dispatch({ type: TOGGLE_LOADING, payload: false });
}