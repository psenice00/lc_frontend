import { GET_BOOKS, GET_AUTHORS_BOOKS, RESET_AUTHORS_BOOKS, GET_BOOK_DETAIL, SEARCH_BOOKS, CUSTOM_URL_BOOK } from './booksTypes';

const initialState = {
    books: [],
    book: {},
    prev: null,
    next: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload.results,
                next: action.payload.next,
                prev: action.payload.previous

            };
        case GET_AUTHORS_BOOKS:
            return {
                ...state,
                books: action.payload.results,
                next: action.payload.next,
                prev: action.payload.previous
            }
        case RESET_AUTHORS_BOOKS:
            return {
                ...state,
                books: action.payload,
            }
        case CUSTOM_URL_BOOK:
            return {
                ...state,
                books: [...state.books, ...action.payload.results],
                next: action.payload.next,

            };
        case GET_BOOK_DETAIL:
            return {
                ...state,
                book: action.payload,
            }
        case SEARCH_BOOKS:
            return {
                ...state,
                books: action.payload.results,
                next: action.payload.next,
                prev: action.payload.previous
            }
        default:
            return state;
    }
}