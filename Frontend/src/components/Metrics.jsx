import React from "react";
/*
 metrics expected shape:
 {
  avgWaitingTime: number,
  avgTurnaroundTime: number,
  throughput: number,
  cpuUtilization: number
 }
*/
export default function Metrics({ metrics }) {
  if (!metrics) return null;
  return (
    <div className="grid grid-cols-2 gap-4 mt-2">
      <div className="p-3 border rounded">
        <div className="text-sm text-gray-500">Avg Waiting Time</div>
        <div className="text-xl font-semibold">{metrics.avgWaitingTime?.toFixed(2)}</div>
      </div>
      <div className="p-3 border rounded">
        <div className="text-sm text-gray-500">Avg Turnaround</div>
        <div className="text-xl font-semibold">{metrics.avgTurnaroundTime?.toFixed(2)}</div>
      </div>
      <div className="p-3 border rounded">
        <div className="text-sm text-gray-500">Throughput</div>
        <div className="text-xl font-semibold">{metrics.throughput?.toFixed(2)}</div>
      </div>
      <div className="p-3 border rounded">
        <div className="text-sm text-gray-500">CPU Utilization</div>
        <div className="text-xl font-semibold">{(metrics.cpuUtilization * 100)?.toFixed(2)}%</div>
      </div>
    </div>
  );
}
