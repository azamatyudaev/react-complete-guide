import './NewExpenses.css'
import NewExpensesForm from '../NewExpensesForm/NewExpensesForm'
import { useState } from 'react'

const NewExpenses = ({ onAddExpenses }) => {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpensesDataHandler = (enteredExpensesData) => {
    const expensesData = {
      ...enteredExpensesData,
      id: Math.random().toString()
    }

    onAddExpenses(expensesData)

    setIsEditing(false)
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <NewExpensesForm
          onSaveExpensesData={saveExpensesDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  )
}

export default NewExpenses
