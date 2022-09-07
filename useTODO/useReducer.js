export const todoReducer = (initialState, action) =>{

    switch (action.type) {
        case 'ADD':
           return [...initialState, action.payload]  
            break;
        case 'DELETE':
          
            return initialState.filter(todo=>{
                return todo.id !== action.payload
            })
            break;

        case 'TOGGLE':
            return initialState.map(todo=>{
                
                if(todo.id === action.payload){
                    return {...todo, done:!todo.done}
                }
                return todo
            })   
            break;
        default:
            return initialState;
    }
}

