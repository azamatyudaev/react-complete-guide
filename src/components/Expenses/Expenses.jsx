import './Expenses.css'
import ExpensesItem from './ExpensesItem/ExpensesItem'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpensesFilter'
import { useState } from 'react'

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2021')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  let expensesContent = <p>No expenses found!</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpensesItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />

        {/*{filteredExpenses.length === 0 ? (*/}
        {/*  <p>No expenses found!</p>*/}
        {/*) : (*/}
        {/*  filteredExpenses.map((expense) => (*/}
        {/*    <ExpensesItem*/}
        {/*      key={expense.id}*/}
        {/*      title={expense.title}*/}
        {/*      amount={expense.amount}*/}
        {/*      date={expense.date}*/}
        {/*    />*/}
        {/*  ))*/}
        {/*)}*/}

        {/*{filteredExpenses.length === 0 && <p>No expenses found!</p>}*/}
        {/*{filteredExpenses.length > 0 &&*/}
        {/*  filteredExpenses.map((expense) => (*/}
        {/*    <ExpensesItem*/}
        {/*      key={expense.id}*/}
        {/*      title={expense.title}*/}
        {/*      amount={expense.amount}*/}
        {/*      date={expense.date}*/}
        {/*    />*/}
        {/*  ))}*/}

        {expensesContent}
      </Card>
    </>
  )
}

export default Expenses
