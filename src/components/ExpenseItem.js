import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


function ExpenseItem(props){
    // const expenseDate = new Date(2022, 12, 20);
    // const expenseTitle = 'Car Insurance';
    // let expenseAmt = 45000;
    const month = props.date.toLocaleDateString('en-Us',{month: 'long'});
    const year = props.date.toLocaleDateString('en-Us', {year: 'numeric'});
    const day = props.date.toLocaleDateString('en-Us', {day: 'numeric'});
    return (
    <div className='expense-item'>
         <div className='date'>
        {/* {props.date.toISOString()} */}
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
     
     </div>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>Rs.{props.amount}
                </div>
        </div>
    </div>
    );
}

export default ExpenseItem;