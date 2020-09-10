import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

//export stateless functional component, description, amount, createdAt
const ExpenseListItem = ({ id,  description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <Link to={`/edit/${id}`}>Item</Link>
        <p>
        {numeral(amount / 100).format('$0,0.00')}
        - 
        {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);

//it can be used empty because we need nothing from the state
export default ExpenseListItem;