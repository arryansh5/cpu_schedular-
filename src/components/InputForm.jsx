import React, { useState } from "react";

/*
 Expected process item:
 { pid: "P1", arrival: 0, burst: 5, priority: 1, deadline: null }
*/
export default function InputForm({ onSimulate, loading }) {
  const [rows, setRows] = useState([
    { pid: "P1", arrival: 0, burst: 5, priority: 1, deadline: "" }
  ]);
  const [algorithm, setAlgorithm] = useState("FCFS");
  const [quantum, setQuantum] = useState(2);

  const updateRow = (idx, key, val) => {
    const copy = [...rows];
    copy[idx][key] = key === "pid" ? val : Number(val);
    setRows(copy);
  };

  const addRow = () => {
    const pid = `P${rows.length + 1}`;
    setRows([...rows, { pid, arrival: 0, burst: 1, priority: 1, deadline: "" }]);
  };

  const removeRow = (idx) => setRows(rows.filter((_, i) => i !== idx));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build payload and call parent callback
    const payload = {
      processes: rows.map(r => ({
        pid: r.pid,
        arrival: Number(r.arrival) || 0,
        burst: Number(r.burst) || 0,
        priority: Number(r.priority) || 0,
        deadline: r.deadline || null
      })),
      algorithm,
      quantum: Number(quantum)
    };
    onSimulate(payload);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-4">
      <div className="flex gap-4">
        <label>
          Algorithm
          <select className="ml-2 border p-1" value={algorithm} onChange={e => setAlgorithm(e.target.value)}>
            <option>FCFS</option>
            <option>SJF</option>
            <option>RoundRobin</option>
            <option>Priority</option>
            <option>EDF</option>
          </select>
        </label>
        <label>
          Quantum
          <input type="number" className="ml-2 border p-1 w-20" value={quantum} onChange={e => setQuantum(e.target.value)} />
        </label>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr>
            <th>PID</th>
            <th>Arrival</th>
            <th>Burst</th>
            <th>Priority</th>
            <th>Deadline</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td><input value={r.pid} onChange={e => updateRow(i, "pid", e.target.value)} className="border p-1" /></td>
              <td><input type="number" value={r.arrival} onChange={e => updateRow(i, "arrival", e.target.value)} className="border p-1 w-20" /></td>
              <td><input type="number" value={r.burst} onChange={e => updateRow(i, "burst", e.target.value)} className="border p-1 w-20" /></td>
              <td><input type="number" value={r.priority} onChange={e => updateRow(i, "priority", e.target.value)} className="border p-1 w-20" /></td>
              <td><input value={r.deadline} onChange={e => updateRow(i, "deadline", e.target.value)} className="border p-1" placeholder="optional" /></td>
              <td>
                <button type="button" onClick={() => removeRow(i)} className="text-sm text-red-500">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-4">
        <button type="button" onClick={addRow} className="px-3 py-1 bg-green-500 text-white rounded">Add Process</button>
        <button type="submit" className="px-4 py-1 bg-blue-600 text-white rounded" disabled={loading}>
          {loading ? "Simulating..." : "Simulate"}
        </button>
      </div>
    </form>
  );
}
