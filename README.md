# Modul 2 Praktikum Mobile Programming: Diary App

Aplikasi **Buku Harian (Diary App)** berbasis React Native dengan Expo CLI. Aplikasi ini dibangun untuk memenuhi Tugas Praktikum Pertemuan 2 Mata Kuliah Mobile Programming.

---

## 👤 Identitas Mahasiswa

* **Nama:** Taufiq Komara
* **NIM:** 2430511052
* **Program Studi:** Teknik Informatika
* **Perguruan Tinggi:** Universitas Muhammadiyah Sukabumi (UMMI)

---

## 📱 Fitur & Ringkasan Studi Kasus

Sesuai dengan spesifikasi pada Modul Praktikum 02, aplikasi ini mengimplementasikan:
1. **Header Profil:** Menampilkan judul *"Buku Harian"* beserta gambar avatar profil pengguna di sudut kanan atas.
2. **Daftar Entri Statis (5 Entri):**
   - *Pagi yang Tenang* (Border Kuning)
   - *Produktif di Kampus* (Border Biru)
   - *Senja di Taman* (Border Hijau)
   - *Makan Malam Spesial* (Border Merah)
   - *Hujan Deras* (Border Abu-abu)
3. **Komponen Reusable (`DiaryCard`):** Refaktorisasi komponen kartu diary terpisah agar dapat menerima data dinamis melalui `props`.
4. **Variasi Warna Border:** Setiap kartu diary memiliki warna border (*border color*) yang dinamis sesuai mood/kategori entri.
5. **Dukungan Gambar Lokal & Remote:** Menggunakan gambar dari aset lokal (`assets/moods/happy.png`) serta gambar jaringan (*URL remote*).
6. **Responsif & Safe Area:** Menggunakan `react-native-safe-area-context` dan `ScrollView` agar tampilan rapi di perangkat iOS maupun Android.

---

## 📁 Struktur Proyek

```text
diary-app/
├── assets/
│   └── moods/
│       └── happy.png
├── src/
│   ├── components/
│   │   └── DiaryCard.js
│   └── screens/
│       └── DiaryListScreen.js
├── App.js
├── app.json
├── package.json
└── README.md