import { createStore, combineReducers } from 'redux'
import { countReducer } from './reducer/countReducer';
import { wordReducer } from './reducer/wordReducer';

// формируем объект store (который обеспечивает работу всего Redux)

const rootReducer = combineReducers({
    counter: countReducer,
    words: wordReducer
})

export const store = createStore(rootReducer);