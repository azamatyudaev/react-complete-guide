import './NewExpensesForm.css'

const NewExpensesForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" min="0.01" step="0.01" />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" min="2022-01-01" max="2032-12-31" />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default NewExpensesForm