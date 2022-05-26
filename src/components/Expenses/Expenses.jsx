import Card from '../UI/Card';
import ExpenceItem from './ExpenceItem.jsx';
import ExpensesFilter from './ExpensesFilter.jsx';
import React, { useState } from 'react';
import './Expenses.css';
const Expenses = props => {
    const [year, setYear] = useState(new Date().getFullYear().toString());
    const onChangeYear = value => {
        setYear(value);
    };
    const filteredExpenses = props.items.filter(element => {
        return element.date.getFullYear().toString() === year;
    });

    let expencesContent = <p>No expenses found.</p>;
    filteredExpenses.length > 0 &&
        (expencesContent = filteredExpenses.map(element => {
            return (
                <ExpenceItem
                    title={element.title}
                    amount={element.amount}
                    date={element.date}
                    key={element.id}
                />
            );
        }));
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter year={year} setYear={onChangeYear} />
                {expencesContent}
            </Card>
        </div>
    );
};

export default Expenses;
