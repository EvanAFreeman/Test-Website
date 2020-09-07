import React from 'react'
import { Link } from 'react-router-dom';

//export stateless functional component, description, amount, createdAt
const ExpenseListItem = ({ id,  description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <Link to={`/edit/${id}`}>Item</Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

//it can be used empty because we need nothing from the state
export default ExpenseListItem;