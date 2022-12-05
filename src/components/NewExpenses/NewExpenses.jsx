import './NewExpenses.css'
import NewExpensesForm from './NewExpensesForm/NewExpensesForm'

const NewExpenses = ({ onAddExpenses }) => {
  const saveExpensesDataHandler = (enteredExpensesData) => {
    const expensesData = {
      ...enteredExpensesData,
      id: Math.random().toString()
    }

    console.log('New Expenses', expensesData)

    onAddExpenses(expensesData)
  }

  return (
    <div className="new-expense">
      <NewExpensesForm onSaveExpensesData={saveExpensesDataHandler} />
    </div>
  )
}

export default NewExpenses