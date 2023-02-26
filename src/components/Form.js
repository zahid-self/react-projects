import React, { useState } from 'react'
import plusImage from "../images/plus.png"
import notesImage from "../images/notes.png"
import doubleClickImage from "../images/double-tick.png"
import { useDispatch } from 'react-redux'
import { added, clearComplted, completeAllTodos } from '../redux/todos/actions'

const Form = () => {

    const dispatch = useDispatch();
    const[inputText, setInpuText] = useState('')

    const handleCompleteAllTodo = () => {
        dispatch(completeAllTodos())
    }

    const handleClearCompleteTodos = () => {
        dispatch(clearComplted())
    }

    const handleChange = (e) => {
        setInpuText(e.target.value)
    }

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(added(inputText))
        setInpuText('')
    }

    return (
        <div>
            <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={handleAddTodo}>
                <img
                    src={notesImage}
                    className="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    value={inputText}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url(${plusImage})] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer" onClick={handleCompleteAllTodo}>
                    <img
                        className="w-4 h-4"
                        src={doubleClickImage}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={handleClearCompleteTodos}>Clear completed</li>
            </ul>
        </div>
    )
}

export default Form