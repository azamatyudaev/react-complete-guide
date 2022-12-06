import './Expenses.css'
import ExpensesItem from './ExpensesItem/ExpensesItem'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpensesFilter'
import { useState } from 'react'

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2019')

  const filterChangeHandler = (selectedYear) => {
    console.log('Expenses.jsx')
    console.log(selectedYear)
    setFilteredYear(selectedYear)
  }

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />

        {expenses.map((expense) => (
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