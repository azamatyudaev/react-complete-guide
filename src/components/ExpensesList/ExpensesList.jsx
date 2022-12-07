import './ExpensesList.css'
import ExpensesItem from '../ExpensesItem/ExpensesItem'

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found!</h2>
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpensesItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  )
}

export default ExpensesList