import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = ({items}) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className={'expenses'}>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {items.map((item) => (
                    <ExpenseItem
                        key={item.id}
                        date={item.date}
                        title={item.title}
                        amount={item.amount}/>
                ))}
            </Card>
        </div>
    )
};

export default Expenses;