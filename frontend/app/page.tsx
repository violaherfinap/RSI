"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/mahasiswa")
      .then((res) => res.json())
      .then((data) => setMembers(data.data))
      .catch((err) => console.error("ERROR:", err));
  }, []);

  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <p style={styles.label}>Praktikum Rekayasa Sistem Informasi</p>
          <h1 style={styles.title}>Kelompok 1</h1>
          <h3 style={styles.subtitle}>Penugasan Git & Version Control</h3>
        </div>

        <div style={styles.divider} />

        <ul style={styles.list}>
          {members.map((m: any, i) => (
            <li key={m.id} style={styles.item}>
              <span style={styles.number}>{i + 1}</span>

              <div style={{ flex: 1 }}>
                <h4 style={styles.name}>{m.nama}</h4>
              </div>

              <span style={styles.nim}>{m.id}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f4f4",
  },
  card: {
    width: "400px",
    background: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center" as const,
  },
  label: {
    fontSize: "12px",
    color: "#6b7280",
    marginBottom: "4px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#065f46",
  },
  subtitle: {
    fontSize: "14px",
    color: "#374151",
  },
  divider: {
    height: "1px",
    background: "#e5e7eb",
    margin: "16px 0",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: {
    display: "flex",
    alignItems: "center",
    background: "#d1fae5",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  number: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    background: "#065f46",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    marginRight: "10px",
  },
  name: {
    margin: 0,
    fontSize: "14px",
  },
  nim: {
    color: "#dc2626",
    fontWeight: "bold",
    fontSize: "12px",
  },
};