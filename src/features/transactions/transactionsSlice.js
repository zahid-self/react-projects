import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addTransaction, deleteTransaction, getTransactions } from "./transactionsAPI"

const initialState = {
    transactions: [],
    isLoading: true,
    isError: true,
    error: ""
}

export const fetchTransactionsAsync = createAsyncThunk('transactions/fetchTransactionsAsync', 
    async() => {
        const transactions = await getTransactions();
        return transactions;
    }
)

export const createTransactionsAsync = createAsyncThunk('transactions/createTransactionsAsync', async(data) => {
    const transaction = await addTransaction(data);
    return transaction;
})

export const editTransactionsAsync = createAsyncThunk('transactions/editTransactionsAsync', async({id, data}) => {
    const transaction = await editTransactionsAsync(id,data);
    return transaction;
})

export const removeTransactionsAsync = createAsyncThunk('transactions/removeTransactionsAsync', async({id}) => {
    const transaction = await deleteTransaction(id);
    return transaction;
})

const transactionsSlice = createSlice({
    name:'transaction',
    initialState,
    extraReducers: (builder) => {
       builder
       .addCase(fetchTransactionsAsync.pending,(state)=> {
            console.log('here');
            state.isLoading = true
            state.isError = false
       })
       .addCase(fetchTransactionsAsync.fulfilled,(state,action)=> {
            console.log(action.payload);
            state.isLoading = false
            state.isError = false
            state.transactions = action.payload
       })
       
       .addCase(fetchTransactionsAsync.rejected,(state,action)=> {
            state.isLoading = false
            state.isError = true
            state.error = action.error?.message
            state.transactions = []
       })

       .addCase(createTransactionsAsync.pending,(state)=> {
            state.isLoading = true
            state.isError = false
       })
       .addCase(createTransactionsAsync.fulfilled,(state,action)=> {
            state.isLoading = false
            state.isError = false
            state.transactions.push(action.payload)
       })
       .addCase(createTransactionsAsync.rejected,(state,action)=> {
            state.isLoading = false
            state.isError = true
            state.error = action.error?.message
       })

       .addCase(editTransactionsAsync.pending,(state)=> {
            state.isLoading = true
            state.isError = false
       })
       .addCase(editTransactionsAsync.fulfilled,(state,action)=> {
            state.isLoading = false
            state.isError = false
            let editTransactionIndex = state.transactions.findIndex(t => t.id === action.payload.id)
            state.transactions[editTransactionIndex] = action.payload
       })
       .addCase(editTransactionsAsync.rejected,(state,action)=> {
            state.isLoading = false
            state.isError = true
            state.error = action.error?.message
       })


       .addCase(removeTransactionsAsync.pending,(state)=> {
            state.isLoading = true
            state.isError = false
       })
       .addCase(removeTransactionsAsync.fulfilled,(state,action)=> {
            state.isLoading = false
            state.isError = false
            state.transactions.filter(t => t.id !== action.payload)
       })
       .addCase(removeTransactionsAsync.rejected,(state,action)=> {
            state.isLoading = false
            state.isError = true
            state.error = action.error?.message
       })
    }
})


export default transactionsSlice.reducer