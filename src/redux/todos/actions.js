import { ADDED,TOGGLED,CLREACOMPLETED,ALLCOMPLETED,DELETED,COLORSELECTED } from "./actionTypes"

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

export function colorSelect(todoId, color){
    return{
        type: COLORSELECTED,
        payload: {
            todoId,
            color
        }
    }
}

export function deleteTodo(todoId){
    return{
        type: DELETED,
        payload: todoId
    }
}

export function clearComplted(){
    return{
        type: CLREACOMPLETED,
    }
}

export function completeAllTodos(){
    return{
        type: ALLCOMPLETED
    }
}



