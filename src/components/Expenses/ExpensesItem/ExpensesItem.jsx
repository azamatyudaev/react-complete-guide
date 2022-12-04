import './ExpensesItem.css'
import ExpensesDate from './ExpensesDate/ExpensesDate'
import Card from '../../UI/Card'

const ExpensesItem = (props) => {
  const handleClick = () => {
    console.log('Clicked!')
  }

  return (
    <Card className="expense-item">
      <ExpensesDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button type="button" onClick={handleClick}>Change Title</button>
    </Card>
  )
}

export default ExpensesItem