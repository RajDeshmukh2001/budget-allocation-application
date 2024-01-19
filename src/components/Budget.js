import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, totalExpenses } = useContext(AppContext);

    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (e) => {
        const budgetValue = e.target.value;

        if (parseInt(budgetValue, 10) > 20000) {
            alert(`Budget cannot exceed ${currency}20000`);
            return;
        }
        
        if (parseInt(budgetValue, 10) < totalExpenses) {
            alert(`Cannot reduce the budget value lower than the spending`);
            return;
        }

        setNewBudget(budgetValue);
    }

    return (
        <div className="alert alert-secondary d-flex align-items-center">
            <span className="me-auto">Budget: {currency} </span>
            <input className="w-75" type="number" step="10" min={totalExpenses} max="20000" value={newBudget} onChange={handleBudgetChange} />
        </div>
    )
}

export default Budget;