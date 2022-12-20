import './Expenses.css'
import { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import ExpensesList from '../ExpensesList/ExpensesList'
import ExpensesChart from '../ExpensesChart/ExpensesChart'

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2021')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  )
}

export default Expenses
