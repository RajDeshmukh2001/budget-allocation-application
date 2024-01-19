import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    const remaining = budget - totalExpenses;

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: <span className="fw-semibold">{currency} {remaining.toLocaleString('en-IN')}</span></span>
        </div>
    )
}

export default Remaining;