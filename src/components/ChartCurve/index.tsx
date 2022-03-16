// region import
import React, { useEffect, useRef } from 'react'
import { CircularProgress, styled } from '@mui/material'
import { Chart, registerables } from 'chart.js'

// hooks
import { useStage } from 'hooks'

// modules
import { initialState, handleComplete } from './module'
// endregion

Chart.register(...registerables)

interface ChartCurveProps {
data: string[]
secondaryData: string[]
labels: string[],
}

const SpinnerContainer = styled('div')`
  display: flex;
  justify-content: center;
`

function ChartCurve(props: ChartCurveProps) {
  const refContainer = useRef<HTMLCanvasElement>(null)
  const stage = useStage(initialState)

  useEffect(() => {
    let chart: Chart<'line', (string | number)[], string>
    if (refContainer.current) {
      const context = refContainer.current.getContext('2d')

      if (context) {
        context.canvas.height = 100

        const gradientRed = context.createLinearGradient(0, 50, 0, 300)
        gradientRed.addColorStop(0, 'rgb(255, 140, 140, 0.5)')

        const gradientGreen = context.createLinearGradient(0, 50, 0, 300)
        gradientGreen.addColorStop(0, 'rgb(200, 252, 163, 0.5)')

        chart = new Chart(context, {
          type: 'line',
          data: {
            labels: props.labels,
            datasets: [
              {
                fill: true,
                backgroundColor: gradientGreen,
                borderColor: '#c8fca3',
                data: props.data,
              },
              {
                fill: true,
                backgroundColor: gradientRed,
                borderColor: '#ff8c8c',
                data: props.secondaryData,
              },
            ],
          },
          options: {
            animation: {
              onComplete: handleComplete(stage),
            },
            elements: {
              point: {
                radius: 0,
              },
            },
            responsive: true,
            scales: {
              xAxes: {
                grid: {
                  display: false,
                },
              },
              yAxes: {
                beginAtZero: true,
                grid: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        })
      }
    }
    return () => chart?.destroy()
  }, [props.data, props.labels])

  return (
    <div>
      <canvas
        ref={refContainer}
        style={{
          display: stage.state.loading ? 'none' : 'block',
        }}
        aria-label="chart-curve"
      />
      {stage.state.loading && (
        <SpinnerContainer>
          <CircularProgress />
        </SpinnerContainer>
      )}
    </div>
  )
}

export default ChartCurve
