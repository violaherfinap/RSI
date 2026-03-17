export default function HomePage() {
  const members = [
    { nim: "L0224002", name: "Anindya Artanti Pambudi" },
    { nim: "L0224005", name: "Jonnathan Azarel Gunawan" },
    { nim: "L0224025", name: "Theodosius Rexy Mahardika" },
    { nim: "L0224026", name: "Viola Herfina Putri" },
    { nim: "L0224045", name: "Muhammad Darell Hylmi" },
  ];

  return (
    <main className="container">
      <div className="card">
        <div className="header">
          <p className="label">Praktikum Rekayasa Sistem Informasi</p>
          <h1 className="title">Kelompok 1</h1>
          <h3 className="subtitle">Penugasan Git &amp; Version Control</h3>
        </div>

        <div className="divider" />

        <ul className="list">
          {members.map((m, i) => (
            <li key={m.nim} className="item">
              <span className="number">{i + 1}</span>
              <h4 className="name">{m.name}</h4>
              <h5 className="nim">{m.nim}</h5>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}