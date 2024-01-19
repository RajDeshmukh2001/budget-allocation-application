import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { dispatch, remaining, currency } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const handleSubmit = () => {
        if (cost > remaining) {
            alert(`The value cannot exceed remaining funds: ${currency} ${remaining}`);
            setCost('');
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };

        if (action === "Reduce") {
            dispatch({
                type: "REDUCE_EXPENSE",
                payload: expense,
            });
        } else {
            dispatch({
                type: "ADD_EXPENSE",
                payload: expense,
            });
        }

        setCost('');
        setName('');
    }

    return (
        <div className="d-flex justify-content-between mb-3">
            <div className="d-flex">
                <div className="input-group-prepend mx-2">
                    <label htmlFor="inputGroupSelect01" className="input-group-text">Department</label>
                </div>
                <select id="inputGroupSelect01" className="custom-select" onChange={(e) => setName(e.target.value)}>
                    <option defaultValue>Choose...</option>
                    <option value="Marketing" name="marketing"> Marketing</option>
                    <option value="Sales" name="sales">Sales</option>
                    <option value="Finance" name="finance">Finance</option>
                    <option value="HR" name="hr">HR</option>
                    <option value="IT" name="it">IT</option>
                </select>
            </div>

            <div className="d-flex">
                <div className="input-group-prepend mx-2">
                    <label htmlFor="inputGroupSelect02" className="input-group-text">Allocation</label>
                </div>
                <select id="inputGroupSelect02" className="custom-select" onChange={(e) => setAction(e.target.value)}>
                    <option defaultValue value="Add" name="Add">Add</option>
                    <option value="Reduce" name="Reduce">Reduce</option>
                </select>
            </div>

            <div className="d-flex">
                <div className="input-group-prepend mx-2">
                    <label htmlFor="inputGroupSelect03" className="input-group-text">{currency}</label>
                </div>
                <input type="number" id="cost" value={cost} onChange={(e) => setCost(e.target.value)} required />
            </div>

            <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
        </div>
    )
}

export default AllocationForm;