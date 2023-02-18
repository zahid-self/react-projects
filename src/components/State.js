import React from 'react'

const State = ({count}) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">Total Count : {count}</div>
    </div>
  )
}

export default State