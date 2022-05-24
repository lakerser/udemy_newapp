import react from 'react';
import './ExpenceItem.css';
function ExpenceItem(props) {
    const expenseData = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = '294.64$';

    return (
        <div className="expense-item">
            <div>{expenseData.toISOString()}</div>
            <div>
                <h2 className="expense-item__description">{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenceItem;
