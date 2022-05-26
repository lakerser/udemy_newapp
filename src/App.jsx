import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/newExpense/newExpense';
import React, { useState } from 'react';
const initialState = [
    {
        id: 'element1',
        title: 'Toilet paper',
        amount: 94.12,
        date: new Date(2022, 7, 14),
    },
    {
        id: 'element2',
        title: 'New TV',
        amount: 294.67,
        date: new Date(2022, 7, 28),
    },
    {
        id: 'element3',
        title: 'Car Insurance',
        amount: 94.12,
        date: new Date(2022, 7, 14),
    },
    {
        id: 'element4',
        title: 'New Desk',
        amount: 94.12,
        date: new Date(2022, 7, 14),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(initialState);

    const addExpenseHandler = expense => {
        setExpenses(previous => [...previous, expense]);
    };

    // return React.createElement(
    //     'div',
    //     {},
    //     React.createElement('h2', {}, "Let's get started!"),
    //     React.createElement(Expenses, {items}, "Let's get started!"),

    // );
    return (
        <div>
            <NewExpense onSaveExpenseData={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
