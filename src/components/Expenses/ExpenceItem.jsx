import './ExpenceItem.css';
import { useState } from 'react';
import ExpenceDate from './ExpenceDate.jsx';
import Card from '../UI/Card';
const ExpenceItem = props => {
    const [title, setTitle] = useState(props.title);
    console.log('updated');
    const clickHandler = () => {
        setTitle('changed');
    };
    return (
        <Card className="expense-item">
            <ExpenceDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button hidden onClick={clickHandler}>Change title</button>
        </Card>
    );
};

export default ExpenceItem;
