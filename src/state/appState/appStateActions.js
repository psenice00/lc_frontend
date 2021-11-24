import { GET_STATS } from './appStateTypes';
import axios from 'axios';
import { notifyError } from '../../utils/notify_toast';

// const baseUrl = process.env.REACT_APP_BASE_URL;
// const baseUrl = "https://psenice00.pythonanywhere.com";
// const baseUrl = "http://127.0.0.1:8000";
const baseUrl = "https://www.api.linyctenar.cz/";

export const getStats = () => (dispatch) => {
    axios.get(`${baseUrl}/api/stats`)
        .then((res) => {
            dispatch({
                type: GET_STATS,
                payload: res.data,
            });
        })
        .catch(error => {
            if (error.response) {
                //TODO - struktura odpovedi serveru
                notifyError(error.response.data.error);
            } else {
                notifyError("Server refused connection!");
            }
        });
};