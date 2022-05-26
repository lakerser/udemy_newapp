import './expenseForm.css';
import { useState } from 'react';
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // })
    const titleHandlerListener = event => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // });
    };
    const amountHandlerListener = event => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // });
    };
    const dataHandlerListener = event => {
        setenteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // });
    };
    const submitHandler = event =>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date:  new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setenteredDate('');

    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        // value={userInput.enteredTitle}
                        value={enteredTitle}
                        onChange={titleHandlerListener}
                        type="text"
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        // value={userInput.enteredAmount}
                        value={enteredAmount}
                        onChange={amountHandlerListener}
                        type="number"
                        min="0.1"
                        step="0.1"
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        // value={userInput.enteredDate}
                        value={enteredDate}
                        onChange={dataHandlerListener}
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                    />
                </div>
            </div>
            <dir className="new-expense__actions">
                <button type="submit">Submit</button>
            </dir>
        </form>
    );
};
export default ExpenseForm;
