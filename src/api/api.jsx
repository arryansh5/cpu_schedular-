import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

export async function simulate(payload) {
  const res = await axios.post(`${API_BASE}/simulate`, payload, {
    headers: { "Content-Type": "application/json" }
  });
  return res.data;
}

export async function exportPdf(payload) {
  const res = await axios.post(`${API_BASE}/export/pdf`, payload, {
    responseType: "blob"
  });
  return res.data;
}

export async function exportExcel(payload) {
  const res = await axios.post(`${API_BASE}/export/excel`, payload, {
    responseType: "blob"
  });
  return res.data;
}
