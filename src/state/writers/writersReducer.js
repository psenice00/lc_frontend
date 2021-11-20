import { GET_WRITERS, GET_WRITER, RESET_WRITER, RESET_WRITERS_LIST, SEARCH_WRITER, RESET_SEARCH, UPDATE_CURRENT_SEARCH, CUSTOM_URL_WRITERS, SEND_MAIL, GET_SUGGESTIONS } from './writersTypes';

const initialState = {
    writers: [],
    prev: null,
    next: null,
    writer: null,
    currentSearchField: '', //pole pro které byl aktuální dotaz proveden
    emailRes: {},
    suggestions: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_WRITERS:
            return {
                ...state,
                writers: action.payload.results,
                next: action.payload.next,
                prev: action.payload.previous

            };
        case GET_WRITER:
            return {
                ...state,
                writer: action.payload,
            };
        case SEARCH_WRITER:
            return {
                ...state,
                writers: [...state.writers, ...action.payload.results],
                next: action.payload.next,

            };
        case CUSTOM_URL_WRITERS:
            return {
                ...state,
                // writers : action.payload,
                writers: [...state.writers, ...action.payload.results],
                next: action.payload.next,

            };
        case RESET_WRITER:
            return {
                ...state,
                writer: action.payload,
            };
        case RESET_WRITERS_LIST:
            return {
                ...state,
                writers: action.payload,
            };
        case RESET_SEARCH:
            return {
                ...state,
                writers: action.payload,
            };
        case UPDATE_CURRENT_SEARCH:
            return {
                ...state,
                currentSearchField: action.payload,
            };
        case SEND_MAIL:
            return {
                ...state,
                emailRes: action.payload,
            };
        case GET_SUGGESTIONS:
            return {
                ...state,
                suggestions: action.payload,
            };
        default:
            return state;
    }
}