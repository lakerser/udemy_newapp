import Card from '../UI/Card';
import ExpenceItem from './ExpenceItem.jsx';
import ExpensesFilter from './ExpensesFilter.jsx';
import React, { useState } from 'react';
import './Expenses.css';
const Expenses = props => {
    const [year, setYear] = useState(new Date().getFullYear());
    const onChangeYear = value => {
        debugger
        setYear(value);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter year={year} setYear={onChangeYear} />
                {props.items
                    .filter(element => {
                        return element.date.getFullYear() == year;
                    })
                    .map(element => {
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
