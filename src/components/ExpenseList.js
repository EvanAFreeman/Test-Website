import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from'../selectors/expenses';

//lecture 101
//everything here automatically updates when changed in real time

//parentheses to directly render?
//export purely for testing in lecture 120 and changed a bit
export const ExpenseList = (props) => (
    <div className="content-container">
    <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
    </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No expenses</span>
                    </div>
                ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense}/>
                    })
                )
            }
        </div>
    </div>
);

//making a HOC
//connected()() is the default
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

//making a HOC
//connected()() is the default
export default connect(mapStateToProps)(ExpenseList)



/*
import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from'../selectors/expenses';

//lecture 101
//everything here automatically updates when changed in real time

//parentheses to directly render?
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.length}

        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}
    </div>

);

//making a HOC
//connected()() is the default
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

//making a HOC
//connected()() is the default
export default connect(mapStateToProps)(ExpenseList)
*/