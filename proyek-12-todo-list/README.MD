# 📝 Todo App dengan JavaScript + LocalStorage

Aplikasi sederhana **Todo List** yang mendukung fitur:

- Add (tambah task baru)
- Edit (ubah task)
- Delete (hapus task)
- Simpan data ke **localStorage** agar tidak hilang meskipun browser ditutup.

---

## 📘 Istilah Penting di Kode

### `addEventListener('DOMContentLoaded', ...)`
- Event listener (pendengar kejadian).
- Fungsinya: jalankan kode setelah seluruh struktur HTML selesai dimuat browser.
- Hampir semua project JS besar pakai ini biar kode JS tidak jalan “kelebihan cepat” sebelum elemen HTML ada.

---

### `localStorage`
- Tempat penyimpanan data di browser.
- Mirip database kecil bawaan browser.
- Data di sini **tidak hilang** meskipun web ditutup (beda dengan `sessionStorage` yang hilang kalau tab ditutup).
- Banyak dipakai untuk menyimpan **state aplikasi**.

---

### `JSON.stringify()` dan `JSON.parse()`
- `stringify()` → ubah array/objek JS jadi string agar bisa disimpan di `localStorage`.
- `parse()` → balikin string jadi array/objek JS lagi.
- Hampir semua aplikasi web yang pakai penyimpanan akan menggunakan JSON.

---

### `document.createElement()` & `appendChild()`
- Digunakan untuk bikin elemen HTML baru lewat JS dan tempel ke DOM.
- Ini inti dari **DOM Manipulation** (manipulasi struktur HTML dengan JS).
- Banyak dipakai di aplikasi modern sebelum adanya framework seperti React.

---

### `onclick = () => { ... }`
- Cara memberi event handler pada tombol.
- Misalnya saat klik **"Edit"**, jalankan fungsi `openModal()`.
- Konsep ini sama dengan `addEventListener`, bedanya ini cara langsung.

---

### Modal
- Popup/box kecil untuk interaksi user (misalnya edit task).
- Di dunia web development, **modal** adalah istilah umum yang dipakai di hampir semua aplikasi.

---

## 🔄 Workflow Add / Edit / Delete Task

```mermaid
flowchart TD
    A[User Input] -->|Add Task| B[DOM Update]
    B --> C[Save to localStorage]

    D[Click Edit] --> E[Open Modal]
    E --> F[Update DOM + localStorage]

    G[Click Delete] --> H[Remove from DOM]
    H --> I[Delete from localStorage]
