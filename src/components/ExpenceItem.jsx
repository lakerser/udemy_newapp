import react from 'react';
import './ExpenceItem.css';
function ExpenceItem(props) {
    const month = props.date.toLocaleString('en-US',{month:'long'})
    const date = props.date.toLocaleString('en-US',{day:'2-digit'})
    const year = props.date.getFullYear()
    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{date}</div>
                <div>{year}</div>
            </div>
            <div>
                <h2 className="expense-item__description">{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenceItem;
