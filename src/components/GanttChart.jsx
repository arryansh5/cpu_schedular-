import React, { useMemo } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

export default function GanttChart({ chartData }) {
  // chartData expected: [{ pid: 'P1', start: 0, end: 3 }, ...]
  const labels = chartData.map((s, i) => `${s.pid} (${s.start}-${s.end})`);
  const durations = chartData.map(s => s.end - s.start);
  const starts = chartData.map(s => s.start);

  const data = useMemo(() => ({
    labels,
    datasets: [
      {
        label: "Gantt",
        data: durations,
        // Chart.js stacked bar trick:
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      }
    ]
  }), [labels, durations]);

  const options = {
    indexAxis: 'y',
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const idx = context.dataIndex;
            const s = chartData[idx];
            return `${s.pid}: ${s.start} → ${s.end}`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
      }
    }
  };

  // NOTE: To represent start positions we could use stacked invisible dataset; for starter, durations show ordering and labels show ranges.
  return <div className="mt-4"><Bar data={data} options={options} /></div>;
}
