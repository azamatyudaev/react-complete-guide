import './NewExpenses.css'
import NewExpensesForm from '../NewExpensesForm/NewExpensesForm'

const NewExpenses = ({ onAddExpenses }) => {
  const saveExpensesDataHandler = (enteredExpensesData) => {
    const expensesData = {
      ...enteredExpensesData,
      id: Math.random().toString()
    }

    onAddExpenses(expensesData)
  }

  return (
    <div className="new-expense">
      <NewExpensesForm onSaveExpensesData={saveExpensesDataHandler} />
    </div>
  )
}

export default NewExpenses