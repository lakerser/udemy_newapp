import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter.jsx';
import React, { useState } from 'react';
import './Expenses.css';
import ExpensesList from './ExpencesList';
const Expenses = props => {
    const [year, setYear] = useState(new Date().getFullYear().toString());
    const onChangeYear = value => {
        setYear(value);
    };
    const filteredExpenses = props.items.filter(element => {
        return element.date.getFullYear().toString() === year;
    });

    
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter year={year} setYear={onChangeYear} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
};

export default Expenses;
