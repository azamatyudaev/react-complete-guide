import './Chart.css'
import ChartBar from '../ChartBar/ChartBar'

const Chart = ({ charts }) => {
  return (
    <div className="chart">
      {charts.map((chart) => (
        <ChartBar
          key={chart.id}
          value={chart.value}
          maxValue={null}
          label={chart.label}
        />
      ))}
    </div>
  )
}

export default Chart
