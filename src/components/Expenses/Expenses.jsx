import Card from '../UI/Card';
import ExpenceItem from './ExpenceItem.jsx';
import ExpensesFilter from './ExpensesFilter.jsx';
import React, { useState } from 'react';
import './Expenses.css';
const Expenses = props => {
    const [year, setYear] = useState('');
    const onChangeYear = value => {
        setYear(value);
    };
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter year={year} setYear={onChangeYear} />
                {props.items.map(element => {
                    return (
                        <ExpenceItem
                            title={element.title}
                            amount={element.amount}
                            date={element.date}
                            key={element.id}
                        />
                    );
                })}
            </Card>
        </div>
    );
};

export default Expenses;
