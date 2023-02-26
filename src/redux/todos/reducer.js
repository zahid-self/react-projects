import { initialState } from "./initialState";
import { ADDED, TOGGLED, COLORSELECTED, ALLCOMPLETED, CLREACOMPLETED, DELETED } from "./actionTypes"

const todoNextId = (todos) => {
    let maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
}

const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: todoNextId(state),
                    text: action.payload,
                    completed: false,
                    color: 'green'
                }
            ]
        case TOGGLED:
            return state.map((todo) => {
                if (action.payload !== todo.id) {
                    return todo
                }

                return{
                    ...todo,
                    completed: !todo.completed
                }
            })
        case COLORSELECTED:
            let { todoId, color } = action.payload
            return state.map((todo) => {
                if (todoId !== todo.id) {
                    return todo
                }

                return{
                    ...todo,
                    color: color
                }
            })
        case DELETED:
            return state.filter((todo) => todo.id !== action.payload)
        case ALLCOMPLETED:
            return state.map((todo) => {
                return{
                    ...todo,
                    completed: true
                }
            }) 
        case CLREACOMPLETED:
            return state.filter((todo) => todo.completed !== true)      
        default:
            return state;
    }

}

export default todoReducer