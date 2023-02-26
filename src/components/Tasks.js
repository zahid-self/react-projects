import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const Tasks = () => {

  const {todos, filters} = useSelector((state) => state);

  const filterWithStatus = (todo) => {
    const { status } = filters;
    switch (status) {
      case 'Complete':
        return todo.completed
      case 'Incomplete':
        return !todo.completed
      default:
        return true;
    } 
  }

  const filterWithColor = (todo) => {
    const { colors } = filters;
    if(colors.length > 0){
      if (colors.includes(todo?.color)) {
        return colors.includes(todo?.color)
      }else{
        return false
      }
    }
    return true
  }

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {
        todos.filter(filterWithStatus).filter(filterWithColor)
        .map((todo) => <Task todo={todo} key={todo.id}/>)
      } 

    </div>
  )
}

export default Tasks