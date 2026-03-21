"use client";
import { useEffect, useState } from "react";

type Mahasiswa = {
  id: string;
  nama: string;
  jurusan: string;
  fakultas: string;
};

export default function HomePage() {
  const [items, setItems] = useState<Mahasiswa[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/mahasiswa")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.data); // ambil isi array
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container">
      <div className="card">
        <h1>Daftar Mahasiswa</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {items.map((mhs, i) => (
              <li key={i}>
                <b>{mhs.nama}</b> - {mhs.jurusan} ({mhs.fakultas})
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}