import React, { useState } from "react";
import InputForm from "../components/InputForm";
import GanttChart from "../components/GanttChart";
import Metrics from "../components/Metrics";
import { simulate } from "../api/api";

export default function Simulator() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const runSimulation = async (payload) => {
    setLoading(true);
    try {
      const data = await simulate(payload);
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Simulation failed. Check backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Simulator</h2>
      <InputForm onSimulate={runSimulation} loading={loading} />
      {result && (
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Gantt Chart</h3>
          <GanttChart chartData={result.gantt} />
          <h3 className="mt-4 font-semibold">Metrics</h3>
          <Metrics metrics={result.metrics} />
        </div>
      )}
    </div>
  );
}
