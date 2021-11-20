import { GET_STATS, TOGGLE_LOADING, TOGGLE_ERROR, TOGGLE_SUGGESTIONS_LOADING } from './appStateTypes';

const initialState = {
    writers: 0,
    books: 0,
    abstracts: 0,
    loading: false,
    error: true,
    loadingSuggestions: false
}

export default function (state = initialState, acition) {
    switch (acition.type) {
        case GET_STATS:
            return {
                ...state,
                writers: acition.payload.writers,
                books: acition.payload.books,
                abstracts: acition.payload.abstracts
            };
        case TOGGLE_LOADING:
            return {
                ...state,
                loading: acition.payload,
            };
        case TOGGLE_ERROR:
            return {
                ...state,
                error: acition.payload,
            };
        case TOGGLE_SUGGESTIONS_LOADING:
            return {
                ...state,
                loadingSuggestions: acition.payload,
            };
        default:
            return state;
    }
}