import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/counter/actions"

const HooksCounter = () => {

    const counter = useSelector((state) => state.value);
    const dispatch = useDispatch();

    const handleIncrement = (value) => {
        dispatch(increment(value))
    }


    const handleDecrement = (value) => {
        dispatch(decrement(value))
    }

    return (
        <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>

            <div class="max-w-md mx-auto mt-10 space-y-5" id="countersParent">
                <div
                    class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                >
                    <div class="text-2xl font-semibold" id="counter">{ counter }</div>
                    <div class="flex space-x-3">
                        <button
                            class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                            onClick={() => handleIncrement(5)}
                        >
                            Increment
                        </button>
                        <button
                            class="bg-red-400 text-white px-3 py-2 rounded shadow"
                            onClick={() => handleDecrement(2)}
                        >
                            Decrement
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HooksCounter