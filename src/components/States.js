import React from 'react'

const States = ({ count }) => {
    return (
        <div class="max-w-md mx-auto mt-10 space-y-5">
                <div
                    class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                >
                <div class="text-2xl font-semibold">
                    <h4>Total count: {count}</h4> 
                </div>
            </div>
        </div>
    )
}

export default States