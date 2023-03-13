import React from 'react'
import editImg from "../../assets/images/edit.svg"
import deleteImg from "../../assets/images/delete.svg"
import { useDispatch } from 'react-redux'
import { editActive, removeTransactionsAsync } from '../../features/transactions/transactionsSlice'

const Transaction = ({transaction}) => {

    const{id,type,name,amount} = transaction || {}

    console.log(id);
    const dispatch = useDispatch();

    const handleEdit = (e) => {
        dispatch(editActive(transaction))
    }

    const handleDelete = (e) => {
        dispatch(removeTransactionsAsync(id))
    }

    return (
        <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {amount}</p>
                <button className="link" onClick={handleEdit}>
                    <img
                        alt='Edit'
                        className="icon"
                        src={editImg}
                    />
                </button>
                <button className="link" onClick={handleDelete}>
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