import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component{
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.startRemoveExpense({id: this.props.expense.id});
        this.props.history.push('/');
    };
    render() {
        return (
        <div>
            <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
            <button onClick={this.onRemove}>Remove</button>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => {
        dispatch(startEditExpense(id, expense))
    },
    startRemoveExpense: (data) => {
        dispatch(startRemoveExpense(data))
    }
});

//lecture 108
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);


/* original version
const EditExpensePage = (props) => {
    return (
    <div>
        <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense));
                props.history.push('/');
            }}
        />
        <button 
            onClick={() => {
                props.dispatch(removeExpense({id: props.expense.id}));
                props.history.push('/');
                console.log(props.expense.id);
        }}>Remove</button>
    </div>
    )
};

//lecture 108
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    };
};
export default connect(mapStateToProps)(EditExpensePage);
*/