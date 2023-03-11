import { colorSelect } from "../actions";


const colorChange = (todoId, color) => {
    return async(dispatch) => {
        const response = await fetch(`http://localhost:9000/todos/${todoId}`,{
            method: "PATCH",
            body: JSON.stringify({
                color: color
            }),
            headers: {
                "Content-Type" : "application/json",
            }
        });
        const todo = await response.json();
        dispatch(colorSelect(todo.id,todo.color))
    }
}

export default colorChange