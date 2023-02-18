import React from 'react'

const Counter = ({ id ,count, incrementHandler, decrementHandler}) => {

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button className="bg-indigo-400 text-white px-3 py-2 rounded shadow" onClick={() => incrementHandler(id)}>
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => decrementHandler(id)}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter