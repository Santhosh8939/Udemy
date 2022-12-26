
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {


  const expenses=[
    {
      id: 'e1',
      title: 'News Paper',
      amount: 9412,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 7949, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 29467,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id:'e5',
      title: 'New PAGE',
      amount: 450,
      date: new Date(2021, 5, 12),
    }
  ];

  return (
    <div className="App">
     
        <p>
          hello
        </p>
        <ExpenseItem  title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
        <ExpenseItem title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date} />
      
    </div>
  );
}

export default App;
