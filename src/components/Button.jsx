import React from 'react'

const Button = ({ children, rest }) => {
  return (
    <button className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center" {...rest}>
        { children }
    </button>
  )
}

export default Button