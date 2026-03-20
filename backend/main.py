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