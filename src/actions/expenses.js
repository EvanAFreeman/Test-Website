import uuid from 'uuid'
import database from '../firebase/firebase'

//Add expense, using npm uuid
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    //only works due to thunk, lecture 152, lets you return functions
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt }

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

//Remove expense
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//Edit expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});


export const startSetExpenses = () => {
    return (dispatch) => {
        //this looks at the database for all of the expenses and takes a snapshot
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];
            //we then look through the snapshot for every expense and add then to an array
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                  id: childSnapshot.key,
                  ...childSnapshot.val()
                });
            });
            //we then dispatch the array of expenses to setExpenses to show them
            dispatch(setExpenses(expenses));
        });
    };
};