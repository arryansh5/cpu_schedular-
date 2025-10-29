import React from "react";
export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">CPU Scheduling Algorithms Simulator</h1>
      <p className="text-gray-700">Compare FCFS, SJF, Round Robin, Priority, Multilevel Queue, EDF and more.</p>
      <div className="mt-6">
        <a href="/simulator" className="px-4 py-2 bg-blue-600 text-white rounded">Go to Simulator</a>
      </div>
    </div>
  );
}
