import './App.css';
import React from 'react';
import Budget from './components/Budget';
import 'bootstrap/dist/css/bootstrap.min.css';
import Remaining from './components/Remaining';
import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import AllocationForm from './components/AllocationForm';
import ChangeCurrency from './components/ChangeCurrency';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3 text-center'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm-2'>
                        <ChangeCurrency />
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>

                <h3 className='mt-3'>Change Allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
