import './Expenses.css'
import ExpensesItem from './ExpensesItem/ExpensesItem'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpensesFilter'
import { useState } from 'react'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2019')

  const filterChangeHandler = (selectedYear) => {
    console.log('Expenses.jsx')
    console.log(selectedYear)
    setFilteredYear(selectedYear)
  }

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
        <ExpensesItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpensesItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpensesItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpensesItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </>
  )
}

export default Expenses