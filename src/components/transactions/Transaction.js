import React from 'react'
import editImg from "../../assets/images/edit.svg"
import deleteImg from "../../assets/images/delete.svg"

const Transaction = ({transaction}) => {

    const{id,type,name,amount} = transaction || {}

    return (
        <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {amount}</p>
                <button className="link">
                    <img
                        alt='Edit'
                        className="icon"
                        src={editImg}
                    />
                </button>
                <button className="link">
                    <img
                        alt='Delete'
                        className="icon"
                        src={deleteImg}
                    />
                </button>
            </div>
        </li>
    )
}

export default Transaction