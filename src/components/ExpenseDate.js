
function ExpenseDate (props){

    const month = props.date.toLocaleDateString('en-Us',{month: 'long'});
    const year = props.date.toLocaleDateString('en-Us', {year: 'numeric'});
    const day = props.date.toLocaleDateString('en-Us', {day: 'numeric'});
    return(
        <div>
        {/* {props.date.toISOString()} */}
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
     
     </div>
    );
}

export default ExpenseDate;