const initState = {
    todos: [
        {id: 0, desc: 'estudar'},
        {id: 1, desc: 'trabalhar'},
        {id: 2, desc: 'jogar'},
        {id: 3, desc: 'dormir'},
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'ADD_TODO'){
        const todo = {
            id: state.todos.length,
            desc: action.desc
        }
        return {
            ...state,
            todos: [...state.todos, todo]
        }
    }
    return state;
}

export default rootReducer;