export default (expenses) => {
    /* this was my version, using reduce was not but it is simpler
    let total = 0;
    if (expenses) {
        expenses.map((expense) => {
            total = total + expense.amount;
            //return <ExpenseListItem key={expense.id} {...expense}/>
        });
    }
    */

    return expenses.map((expense) => expense.amount).reduce(function(sum, value){
        return sum + value;
    }, 0)
};