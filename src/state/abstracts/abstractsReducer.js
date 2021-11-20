import { GET_BOOK_ABSTRACTS, GET_ABSTRACT_DETAIL, RESET_ABSTRACT_DETAIL, CUSTOM_URL_ABSTRACTS } from './abstractsTypes';

const initialState = {
    abstracts: [],
    next: null,
    prev: null,
    abstractDetail: {},
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BOOK_ABSTRACTS:
            return {
                ...state,
                abstracts: action.payload.results,
                next: action.payload.next,
                prev: action.payload.previous
            };
        case CUSTOM_URL_ABSTRACTS:
            return {
                ...state,
                abstracts: [...state.abstracts, ...action.payload.results],
                next: action.payload.next,
            };
        case GET_ABSTRACT_DETAIL:
            return {
                ...state,
                abstractDetail: action.payload,
            };
        case RESET_ABSTRACT_DETAIL:
            return {
                ...state,
                abstractDetail: action.payload,
            };
        default:
            return state;
    }
}