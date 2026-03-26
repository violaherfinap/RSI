from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Mahasiswa(BaseModel):
    id: str
    nama: str
    jurusan: str
    fakultas: str

db_mahasiswa = []

@app.get("/mahasiswa")
def get_mahasiswa():
    return {"pesan": "Ini adalah daftar mahasiswa", "data": db_mahasiswa}

@app.get("/mahasiswa/{id}")
def get_mahasiswa_by_id(id: str):
    for data in db_mahasiswa:
        if data["id"] == id:
            return {"status": "success", "data": data}
    raise HTTPException(status_code=404, detail="Mahasiswa tidak ditemukan")


@app.post("/mahasiswa")
def create_mahasiswa(mhs: Mahasiswa):
    db_mahasiswa.append(mhs.model_dump())
    return {"pesan": "Data mahasiswa baru berhasil ditambahkan!", "data": mhs}

@app.put("/mahasiswa/{id}")
def update_mahasiswa(id: str, mhs: Mahasiswa):
    for i, data in enumerate(db_mahasiswa):
        if data["id"] == id:
            db_mahasiswa[i] = mhs.model_dump()
            return {"pesan": f"Data mahasiswa dengan ID {id} berhasil diperbarui!", "data": mhs}
    return {"pesan": f"Mahasiswa dengan ID {id} tidak ditemukan"}

@app.delete("/mahasiswa/{id}")
def delete_mahasiswa(id: str):
    for i, data in enumerate(db_mahasiswa):
        if data["id"] == id:
            hapus = db_mahasiswa.pop(i)
            return {"pesan": f"Data mahasiswa dengan ID {id} berhasil dihapus!", "data": hapus}
    return {"pesan": f"Mahasiswa dengan ID {id} tidak ditemukan"}