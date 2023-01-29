import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":200,"category":"Travel","type":"Expense","date":"2022-11-10","id":"af88c914-3936-4a28-a5c9-659e2da5fb9e"},{"amount":50,"category":"Bills","type":"Expense","date":"2022-11-10","id":"ca28ae81-2743-4c5d-a3b2-2c10ff4ac6be"},{"amount":200,"category":"Salary","type":"Income","date":"2022-11-08","id":"2ae72ead-cfd8-4212-a584-4bc4b24ad513"},{"amount":100,"category":"Business","type":"Income","date":"2022-11-14","id":"f161d2fa-2d58-41a7-abac-e7e691ae890d"}]; /* when user first open the application it's blank */

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

   
    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    };
    const addTransaction = (transaction) => { 
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    };

    const balance = transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc-currVal.amount : acc + currVal.amount, 0);
        

    return (
        <ExpenseTrackerContext.Provider value={{
            transactions,
            addTransaction,
            deleteTransaction,
            balance  
            }}>
                {children}
                 </ExpenseTrackerContext.Provider>          
                 );
                };