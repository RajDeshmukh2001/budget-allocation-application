import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = ({ id, name, cost }) => {
    const { dispatch, currency } = useContext(AppContext);

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense,
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: "REDUCE_EXPENSE",
            payload: expense,
        })
    }

    const handleDeleteExpense = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: id,
        })
    } 

    return (
        <tr>
            <td>{name}</td>
            <td>{currency} {cost.toLocaleString('en-IN')}</td>
            <td><button className="btn btn-primary" onClick={() => increaseAllocation(name)}>+</button></td>
            <td><button className="btn btn-warning" onClick={() => decreaseAllocation(name)}>-</button></td>
            <td><TiDelete className="delete-btn" size="1.5em" onClick={handleDeleteExpense} /></td>
        </tr>
    )
}

export default ExpenseItem;