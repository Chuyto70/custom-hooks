import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './useReducer'

export const useTODO = () => {

const init = ( ) =>{
   return JSON.parse(localStorage.getItem('todos')) || []
}

    const [todos, dispatch] =  useReducer(todoReducer, [], init)
    console.log(todos);

    
   useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
   },[todos])

    const handleTodo = (todo) =>{

    const action = {
        type: 'ADD',
        payload:todo
    }

    dispatch(action)  
}

const handleDeleteTODO = ( id) =>{
    dispatch({
        type:'DELETE',
        payload:id
    })
}
const handleToggleTODO = (id) =>{
    dispatch({
        type:'TOGGLE',
        payload:id
    })
}


  return{
    todos,
    handleDeleteTODO,
    handleToggleTODO,
    handleTodo
  }
}
