from fastapi import FastAPI
from pydantic import BaseModel

# Inisialisasi aplikasi
app = FastAPI()

# Membuat kerangka data untuk item yang akan dikirim (POST)
class Item(BaseModel):
    id: int
    nama: str
    deskripsi: str | None = None

# Database buatan untuk menyimpan data sementara
db_items = []

# 1. Endpoint GET (Untuk mengambil/melihat data)
@app.get("/items")
def get_items():
    return {"pesan": "Ini adalah daftar item milik Princess Vio", "data": db_items}

# 2. Endpoint POST (Untuk menambah data baru)
@app.post("/items")
def create_item(item: Item):
    db_items.append(item.model_dump())
    return {"pesan": "Item baru berhasil ditambahkan!", "data": item}