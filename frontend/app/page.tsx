"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [members, setMembers] = useState([]);
  const [activeTab, setActiveTab] = useState("list");

  const [form, setForm] = useState({
    id: "",
    nama: "",
    jurusan: "",
    fakultas: "",
  });

  // GET DATA
  const fetchData = () => {
    fetch("http://127.0.0.1:8000/mahasiswa")
      .then((res) => res.json())
      .then((data) => setMembers(data.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // HANDLE INPUT
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // POST DATA
  const handleSubmit = (e: any) => {
    e.preventDefault();

    fetch("http://127.0.0.1:8000/mahasiswa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(() => {
        fetchData();
        setForm({ id: "", nama: "", jurusan: "", fakultas: "" });
        setActiveTab("list");
      })
      .catch((err) => console.error(err));
  };

  return (
    <main style={styles.container}>
      <div style={styles.card}>
        {/* HEADER */}
        <div style={styles.header}>
          <p style={styles.label}>Praktikum Rekayasa Sistem Informasi</p>
          <h1 style={styles.title}>Kelompok 1</h1>
          <h3 style={styles.subtitle}>
            Penugasan Git & Version Control
          </h3>
        </div>

        {/* TAB */}
        <div style={styles.tabContainer}>
          <button
            style={activeTab === "list" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("list")}
          >
            📋 Daftar
          </button>
          <button
            style={activeTab === "form" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("form")}
          >
            ➕ Tambah
          </button>
        </div>

        {/* FORM */}
        {activeTab === "form" && (
          <form onSubmit={handleSubmit} style={styles.form}>
            <input name="id" placeholder="NIM" value={form.id} onChange={handleChange} required />
            <input name="nama" placeholder="Nama" value={form.nama} onChange={handleChange} required />
            <input name="jurusan" placeholder="Jurusan" value={form.jurusan} onChange={handleChange} required />
            <input name="fakultas" placeholder="Fakultas" value={form.fakultas} onChange={handleChange} required />

            <button type="submit" style={styles.button}>
              Tambah
            </button>
          </form>
        )}

        {/* LIST */}
        {activeTab === "list" && (
          <ul style={styles.list}>
            {members.map((m: any, i) => (
              <li key={m.id} style={styles.item}>
                <div style={styles.left}>
                  <span style={styles.icon}>👤</span>
                  <span>{i + 1}. {m.nama}</span>
                </div>
                <span style={styles.nim}>{m.id}</span>
              </li>
            ))}
          </ul>
        )}
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
  },
  card: {
    width: "420px",
    padding: "24px",
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center" as const,
    marginBottom: "16px",
  },
  label: {
    fontSize: "12px",
    color: "#6b7280",
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
  tabContainer: {
    display: "flex",
    marginBottom: "16px",
    gap: "8px",
  },
  tab: {
    flex: 1,
    padding: "8px",
    background: "#e5e7eb",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  activeTab: {
    flex: 1,
    padding: "8px",
    background: "#10b981",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  },
  button: {
    padding: "8px",
    background: "#10b981",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    background: "#d1fae5",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "8px",
  },
  left: {
    display: "flex",
    gap: "8px",
  },
  icon: {
    fontSize: "18px",
  },
  nim: {
    color: "red",
    fontWeight: "bold",
  },
};