import react from 'react';
import ExpenceItem from './components/ExpenceItem';
function App() {
    const expenses = [
        {
            id: 'element1',
            title: 'Toilet paper',
            amount: 94.12,
            date: new Date(2022, 7, 14),
        },
        {
            id: 'element2',
            title: 'New TV',
            amount: 294.67,
            date: new Date(2022, 7, 28),
        },
        {
            id: 'element3',
            title: 'Car Insurance',
            amount: 94.12,
            date: new Date(2022, 7, 14),
        },
        {
            id: 'element4',
            title: 'New Desk',
            amount: 94.12,
            date: new Date(2022, 7, 14),
        },
    ];
    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenceItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
                
            />
            <ExpenceItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            />
            <ExpenceItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            />
            <ExpenceItem
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
            />
        </div>
    );
}

export default App;
