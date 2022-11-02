const Counter = ({id, count, handleDecrement, handleIncrement }) => {

    return (
        <div class="max-w-md mx-auto mt-10 space-y-5">
            <div
                class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
            >
                <div class="text-2xl font-semibold">{count}</div>
                <div class="flex space-x-3">
                    <button
                        class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                        onClick={() => handleIncrement(id)}
                    >
                        Increment
                    </button>
                    <button
                        class="bg-red-400 text-white px-3 py-2 rounded shadow"
                        onClick={() => handleDecrement(id)}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Counter