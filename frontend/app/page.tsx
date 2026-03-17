export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#84934a]" style={{ backgroundColor: '#ececec' }}>
        <h1 className="text-4xl font-urbanist font-extrabold text-center mb-12" style={{ color: '#492828' }}>
          Kelompok 1
        </h1>
        
        <ul className="space-y-3 mb-8">
          {[
            'Anindya Artanti Pambudi (L0224002)',
            'Jonnathan Azarel Gunawan (L0224005)',
            'Theodosius Rexy Mahardika (L0224025)',
            'Viola Herfina Putri (L0224026)',
            'Muhammad Darell Hylmi (L0224045)'
          ].map((anggota, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold shrink-0" 
                    style={{ backgroundColor: '#84934a', color: '#ececec' }}>
                {index + 1}
              </span>
              <span className="font-poppins font-semibold" style={{ color: '#492828' }}>{anggota}</span>
            </li>
          ))}
        </ul>

        <div className="border-t-2 pt-6 text-center" style={{ borderColor: '#656d3f' }}>
          <p className="text-xl font-urbanist font-bold mb-1" style={{ color: '#492828' }}>
            Penugasan Git dan Version Control
          </p>
          <p className="font-poppins" style={{ color: '#656d3f' }}>
            Praktikum Rekayasa Sistem Informasi
          </p>
        </div>
      </div>
    </main>
  );
}