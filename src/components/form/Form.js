import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createTransactionsAsync, editTransactionsAsync } from '../../features/transactions/transactionsSlice';


const Form = () => {

    const[name,setName] = useState('');
    const[type,setType] = useState('');
    const[amount,setAmount] = useState('');
    const[editMode,setEditMode] = useState(false)
    const dispatch = useDispatch();

    const handleCreate = (e)=> {
        e.preventDefault();
        dispatch(createTransactionsAsync({
            name,
            type,
            amount: Number(amount)
        }))
        resetForm();
    }

    const resetForm = () => {
        setName('')
        setType('')
        setAmount('')
    }

    const { editData } = useSelector(state => state.transaction);

    useEffect(() => {
        if(editData?.id){
            setEditMode(true)
            setName(editData?.name)
            setType(editData?.type)
            setAmount(editData?.amount)
        }else{
            resetForm()
            setEditMode(false)
        }

    },[editData])

    const handleEditMode = () => {
        setEditMode(false)
        resetForm()
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(editTransactionsAsync({
            id: editData?.id,
            data:{
                name : name,
                type : type,
                amount: Number(amount)
            }
        }))
        setEditMode(false)
        resetForm()
    }

    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form onSubmit={editMode ? handleUpdate : handleCreate}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="enter expense name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group radio">
                    <label>Type</label>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="income"
                            name="type"
                            required
                            checked={type === 'income'}
                            onChange={() => setType('income')}
                        />
                        <label>Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="type"
                            placeholder="Expense"
                            checked={type === 'expense'}
                            onChange={() => setType('expense')}
                        />
                        <label>Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        placeholder="300"
                        name="amount"
                        required
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <button className="btn" type='submit'>{ editMode ? 'Update Transaction' : 'Add Transaction' }</button>
            </form>

            {editMode && <button className="btn cancel_edit" onClick={handleEditMode}>Cancel Edit</button>}
        </div>
    )
}

export default Form