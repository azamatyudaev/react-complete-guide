import './NewExpensesForm.css'
import { useState } from 'react'

const NewExpensesForm = ({ onSaveExpensesData }) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  })

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value
      }
    })
  }

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value
      }
    })
  }

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value
      }
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const expensesData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    }

    console.log('New Expenses Form', expensesData)

    onSaveExpensesData(expensesData)

    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            onChange={dateChangeHandler}
            min="2022-01-01"
            max="2032-12-31"
            value={userInput.enteredDate}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default NewExpensesForm
