
// значение state по-умолчанию
const defaultState = [];

const ADD_WORD = 'ADD_WORD';
const DELETE_WORD = 'DELETE_WORD';
export const addAction = (payload) => ({type: ADD_WORD, payload});
export const deleteAction = (payload) => ({type: DELETE_WORD, payload});

// функция с логикой изменения состояния
// принимает в качестве аргументов state и action(объект из dispatch)

export const wordReducer = (state = defaultState, action) =>{
    if (action.type === ADD_WORD){
        return [...state, action.payload]
    }else if (action.type === DELETE_WORD){
        return state.filter(word => word !== action.payload)
    }else{
        return state
    }
}

// добавить обработку type = DELETE