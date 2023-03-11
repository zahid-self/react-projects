import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTransactionsAsync } from '../../features/transactions/transactionsSlice';
import Transaction from './Transaction'


const Transactions = () => {

    const dispatch = useDispatch();
    const{transactions, isLoading, isError} = useSelector(state => state.transaction);

    useEffect(() => {
        dispatch(fetchTransactionsAsync())
    },[dispatch])

    let content = null;

    if(isLoading) content = <p>Loading...</p>;
    if(!isLoading && isError) content = <p className='error'>There was an error!</p>;
    if(!isLoading && !isError && transactions.length > 0){
        content = transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>)
    }

    if(!isLoading && !isError && transactions.length === 0){
        content = <p>No transaction found!</p>;
    }

    return (
        <div className="conatiner_of_list_of_transactions">
            <ul>
                {content}
            </ul>
        </div>
    )
}

export default Transactions