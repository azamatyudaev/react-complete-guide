import './NewExpensesForm.css'
import { useState } from 'react'

const NewExpensesForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState('')
  // const [enteredAmount, setEnteredAmount] = useState('')
  // const [enteredDate, setEnteredDate] = useState('')

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  })

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value)

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })

    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value
      }
    })
  }

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value)

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })

    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value
      }
    })
  }

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value)

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })

    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(userInput)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
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
