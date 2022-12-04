import './ExpensesItem.css'
import { useState } from 'react'
import ExpensesDate from './ExpensesDate/ExpensesDate'
import Card from '../../UI/Card'


const ExpensesItem = (props) => {
  const [title, setTitle] = useState(props.title)

  const handleClick = () => {
    setTitle('Updated!')
    console.log(title) // it shows old value because useState update function does not change actual value
  }

  return (
    <Card className="expense-item">
      <ExpensesDate date={props.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button type="button" onClick={handleClick}>Change Title</button>
    </Card>
  )
}

export default ExpensesItem