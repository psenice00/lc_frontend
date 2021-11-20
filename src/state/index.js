import { combineReducers } from "redux";
import appStateReducer from "./appState/appStateReducer"
import writersReducer from './writers/writersReducer';
import bookReducer from './books/booksReducer';
import abstractReducer from './abstracts/abstractsReducer';

export default combineReducers({
    appStateReducer,
    writersReducer,
    bookReducer,
    abstractReducer
});
