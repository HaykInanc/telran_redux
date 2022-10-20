
// значение state по-умолчанию
const defaultState = 0;

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET     = 'RESET';
const ADD       = 'ADD';

export const incrementAction = () => ({type: INCREMENT});
export const decrementAction = () => ({type: DECREMENT});
export const resetAction     = () => ({type: RESET});
export const addAction       = (payload) => ({type: ADD, payload});

// функция с логикой изменения состояния
// принимает в качестве аргументов state и action(объект из dispatch)

export const countReducer = (state = defaultState, action) =>{
    if (action.type === INCREMENT){
        return state + 1
    }else if(action.type === DECREMENT){
        return state - 1
    }else if(action.type === RESET){
        return 0
    }else if(action.type === ADD){
        return state + action.payload
    }else{
        return state
    }
}