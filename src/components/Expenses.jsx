import Card from './Card.jsx';
import ExpenceItem from './ExpenceItem.jsx';
import './Expenses.css';
const Expenses = props => {
    return (
        <Card className="expenses">
            <ExpenceItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenceItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenceItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenceItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            />
        </Card>
    );
};

export default Expenses;
