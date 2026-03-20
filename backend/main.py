from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Kerangka data khusus untuk Mahasiswa
class Mahasiswa(BaseModel):
    id: str
    nama: str
    jurusan: str
    fakultas: str

# Database bodong
db_mahasiswa = []

# Endpoint GET (Untuk melihat data mahasiswa)
@app.get("/mahasiswa")
def get_mahasiswa():
    return {"pesan": "Ini adalah daftar mahasiswa", "data": db_mahasiswa}

# Endpoint POST (Untuk menambah data mahasiswa baru)
@app.post("/mahasiswa")
def create_mahasiswa(mhs: Mahasiswa):
    db_mahasiswa.append(mhs.model_dump())
    return {"pesan": "Data mahasiswa baru berhasil ditambahkan!", "data": mhs}

# Endpoint PUT (Untuk memperbarui data mahasiswa)
@app.put("/mahasiswa/{id}")
def update_mahasiswa(id: str, mhs: Mahasiswa):
    for i, data in enumerate(db_mahasiswa):
        if data["id"] == id:
            db_mahasiswa[i] = mhs.model_dump()
            return {"pesan": f"Data mahasiswa dengan ID {id} berhasil diperbarui!", "data": mhs}
    return {"pesan": f"Mahasiswa dengan ID {id} tidak ditemukan"}

# Endpoint DELETE (Untuk menghapus data mahasiswa)
@app.delete("/mahasiswa/{id}")
def delete_mahasiswa(id: str):
    for i, data in enumerate(db_mahasiswa):
        if data["id"] == id:
            hapus = db_mahasiswa.pop(i)
            return {"pesan": f"Data mahasiswa dengan ID {id} berhasil dihapus!", "data": hapus}
    return {"pesan": f"Mahasiswa dengan ID {id} tidak ditemukan"}