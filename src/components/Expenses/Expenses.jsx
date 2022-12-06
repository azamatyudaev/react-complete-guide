import './Expenses.css'
import ExpensesItem from './ExpensesItem/ExpensesItem'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpensesFilter'
import { useState } from 'react'

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2019')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />

        {filteredExpenses.map((expense) => (
          <ExpensesItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </>
  )
}

export default Expenses