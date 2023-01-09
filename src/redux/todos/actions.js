import { ADDED,TOGGLED,CLREADCOMPLETED,COMPLETEDALLTODOS,DELETED,COLORCHANGED } from "./actionTypes"

export function added(inputText){
    return{
        type: ADDED,
        payload: inputText
    }
}

export function toggled(todoId){
    return{
        type: TOGGLED,
        payload: todoId
    }
}

export function clearComplted(){
    return{
        type: CLREADCOMPLETED,
    }
}

export function clearAllTodos(){
    return{
        type: COMPLETEDALLTODOS
    }
}

export function deleteTodo(todoId){
    return{
        type: DELETED,
        payload: todoId
    }
}

export function colorChange(todoId, color){
    return{
        type: DELETED,
        payload: {
            todoId,
            color
        }
    }
}