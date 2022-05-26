import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/newExpense/newExpense';
import React from 'react';
 const App = () => {
    const items = [
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
    const addExpenseHandler = (expense) => {
    console.log(expense);        

    }

    // return React.createElement(
    //     'div',
    //     {},
    //     React.createElement('h2', {}, "Let's get started!"),
    //     React.createElement(Expenses, {items}, "Let's get started!"),

    // );
    return (
        <div>
            <NewExpense onSaveExpenseData ={addExpenseHandler} />
            <Expenses items={items} />
        </div>
    );
}

export default App;
