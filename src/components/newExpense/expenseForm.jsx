import './expenseForm.css';
import { useState } from 'react';
const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setenteredDate] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:'',
    })
    const titleHandlerListener = event => {
        setUserInput({
            ...userInput,
            enteredTitle:event.target.value
        });
    };
    const amountHandlerListener = event => {
        setUserInput({
            ...userInput,
            enteredAmount:event.target.value
        });
    };
    const dataHandlerListener = event => {
        setUserInput({
            ...userInput,
            enteredDate:event.target.value
        });
    };
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={userInput.enteredTitle} onChange={titleHandlerListener} type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value={userInput.enteredAmount} onChange={amountHandlerListener} type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input value={userInput.enteredDate} onChange={dataHandlerListener} type="date" min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <dir className="new-expense__actions">
                <button type="submit">Submit</button>
            </dir>
        </form>
    );
};
export default ExpenseForm;
