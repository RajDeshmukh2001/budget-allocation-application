import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: "CHANGE_CURRENCY",
            payload: val,
        });
    };

    const handleButton = (e, currencyValue) => {
        const buttons = document.querySelectorAll('.currency-btn');
        buttons.forEach(button => button.classList.remove('active'));

        e.target.classList.add('active');
        changeCurrency(currencyValue);
    } 

    return (
        <div className="btn-group w-100">
            <button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Currency ({currency})</button>
            <ul className="dropdown-menu">
                <li><button className="dropdown-item currency-btn active" onClick={(e) => handleButton(e, "₹")}>₹ Rupees</button></li>
                <li><button className="dropdown-item currency-btn" onClick={(e) => handleButton(e, "$")}>$ Dollar</button></li>
                <li><button className="dropdown-item currency-btn" onClick={(e) => handleButton(e, "€")}>€ Euro</button></li>
                <li><button className="dropdown-item currency-btn" onClick={(e) => handleButton(e, "£")}>£ Pound</button></li>
            </ul>
        </div>
    )
}

export default ChangeCurrency;