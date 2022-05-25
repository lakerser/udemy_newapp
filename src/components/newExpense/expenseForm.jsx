import './expenseForm.css';
const ExpenseForm = () => {
    const titleHandlerListener = (event) =>{
        console.log(event.target.value);
        console.log('changed')
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label >Title</label>
                    <input onChange={titleHandlerListener} type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <dir className="new-expense__actions">
                <button type="submit">Submit</button>
            </dir>
        </form>
    );
};
export default ExpenseForm;
