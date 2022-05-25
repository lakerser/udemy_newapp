import react from 'react';
import Expenses from './components/Expenses';
function App() {
    const item = [
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
       <Expenses item={item}/>
        </div>
    );
}

export default App;
