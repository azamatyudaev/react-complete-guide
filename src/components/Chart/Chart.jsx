import './Chart.css'
import ChartBar from '../ChartBar/ChartBar'

const Chart = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map(dataPoint => dataPoint.value)
  const totalMax = Math.max(...dataPointsValues)

  return (
    <div className="chart">
      {dataPoints.map((chart) => (
        <ChartBar
          key={chart.id}
          value={chart.value}
          maxValue={totalMax}
          label={chart.label}
        />
      ))}
    </div>
  )
}

export default Chart
