import { toggled } from "../actions";


const statusChange = (todoId, status) => {
    return async(dispatch) => {
        const response = await fetch(`http://localhost:9000/todos/${todoId}`,{
            method: "PATCH",
            body: JSON.stringify({
                completed: !status
            }),
            headers: {
                "Content-Type" : "application/json",
            }
        });
        const todo = await response.json();
        dispatch(toggled(todo.id))
    }
}

export default statusChange