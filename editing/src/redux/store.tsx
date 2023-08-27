import { combineReducers, compose, legacy_createStore} from 'redux'
import notesReducer from './notesReducer';

const reactReduxDevTools =  (window as any).__REDUX_DEVTOOLS_EXTENSION_ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

function createStore() {
    return legacy_createStore(
        combineReducers({
            noteList: notesReducer,
        }),
        compose(
            reactReduxDevTools,
        )
    )
}

export default createStore;