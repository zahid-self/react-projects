import { connect } from "react-redux"
import { decrement, increment } from "../redux/counter/actions"

const Counter = ({ counter, handleIncrement, handleDecrement }) => {

    return (
        <div
            className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            <div className="text-2xl font-semibold">{ counter }</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={handleIncrement}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={handleDecrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter : state.counter.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement : () => dispatch(increment()),
        handleDecrement : () => dispatch(decrement()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)