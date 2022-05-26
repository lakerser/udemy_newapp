import ExpenceItem from './ExpenceItem';
import './ExpencesList.css';
const ExpensesList = props => {
    let expencesContent = (
        <h2 className="expenses-list__fallback">No expenses found.</h2>
    );
    props.items.length > 0 &&
        (expencesContent = props.items.map(element => {
            return (
                <ExpenceItem
                    title={element.title}
                    amount={element.amount}
                    date={element.date}
                    key={element.id}
                />
            );
        }));
        
    return <ul className="expenses-list">{expencesContent}</ul>;
};

export default ExpensesList;
