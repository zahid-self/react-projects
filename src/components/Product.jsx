import React from 'react'
import Button from './Button'

const Product = ({ title, quantity, price }) => {
  return (
    <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        <div className="flex justify-between px-4 items-center">
            <div className="text-lg font-semibold">
                <p>{ title } {`(${quantity})`}</p>
                <p className="text-gray-400 text-base">Tk { price }</p>
            </div>
            <div className="text-lg font-semibold">
                <Button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Product