# Modul Praktikum 4 Mobile Programming: Diary App (Props & State)

Aplikasi **Buku Harian (Diary App)** berbasis React Native dengan Expo CLI. Proyek ini merupakan kelanjutan dari Modul 3, dengan penambahan fitur dinamis menggunakan pengelolaan Props dan State (Pencarian, Like, dan Form Tambah Entri).

---

## 👤 Identitas Mahasiswa

* **Nama:** Taufiq Komara
* **NIM:** 2430511052
* **Kelas:** 4C
* **Program Studi:** Teknik Informatika

---

## ✨ Fitur Baru (Pembaruan Modul 4)

1. **Pencarian Entri (SearchBar):** Pengguna dapat mencari catatan berdasarkan judul, isi, atau tanggal.
2. **Fitur Suka (Like):** Pengguna dapat menekan tombol hati (🤍 menjadi ❤️) pada setiap kartu catatan.
3. **Form Tambah Entri (EntryForm):** Pengguna dapat menambahkan catatan baru secara langsung tanpa perlu me-restart aplikasi. Entri baru akan otomatis muncul di daftar teratas.

---

## 💡 Penjelasan Penggunaan Props dan State

Pada pembaruan Modul 4 ini, aplikasi menggunakan dua konsep utama React Native untuk mengelola aliran data:

*   **Props (Properti):** Digunakan untuk mengirim data dan aksi (fungsi) dari *parent component* ke *child component*. Pada aplikasi ini, komponen utama (`DiaryListScreen`) mengirimkan data seperti `title`, `date`, `moodImage`, serta fungsi aksi (seperti `onToggleLike` dan `onSubmit`) ke komponen anaknya (`DiaryCard`, `EntryForm`, dan `SearchBar`) melalui Props.
*   **State:** Digunakan untuk menyimpan data internal komponen yang bersifat dinamis (dapat berubah) dan akan memicu *render ulang* pada layar saat nilainya berubah.
    *   **Local State:** Contohnya variabel `queryText` pada `SearchBar` dan input form (`title`, `date`, `preview`) pada `EntryForm`.
    *   **Shared / Main State:** Contohnya variabel `entries` (menyimpan seluruh data utama), `query` (kata kunci pencarian), dan `likedIds` (menyimpan ID entri yang disukai) yang diletakkan (diangkat / *lifted*) ke komponen induk (`DiaryListScreen`) agar dapat mengontrol dan didistribusikan ke komponen-komponen lainnya secara selaras.

---

## 📁 Struktur Proyek Terbaru

```text
diary-app/
├── assets/
│   └── moods/
├── src/
│   ├── components/
│   │   ├── DiaryCard.js
│   │   ├── DiaryDetailModal.js
│   │   ├── SearchBar.js        <-- (Baru) Komponen Pencarian
│   │   └── EntryForm.js        <-- (Baru) Komponen Form Entri
│   ├── screens/
│   │   └── DiaryListScreen.js
│   └── styles/
│       └── tokens.js
├── App.js
├── package.json
└── README.md