import React from 'react'
import Task from './Task'

const Tasks = () => {
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        <Task/>
        <Task/>
    </div>
  )
}

export default Tasks