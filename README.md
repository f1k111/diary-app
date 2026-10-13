# Modul Praktikum 3 Mobile Programming: Diary App (Layout Responsif & Modal)

Aplikasi **Buku Harian (Diary App)** berbasis React Native dengan Expo CLI. Proyek ini merupakan kelanjutan dari Modul 2, dengan penambahan fitur tata letak responsif, sistem *design tokens*, dan modal detail yang interaktif.

---

## 👤 Identitas Mahasiswa

* **Nama:** Taufiq Komara
* **NIM:** 2430511052
* **Kelas:** 4C
* **Program Studi:** Teknik Informatika

---

## ✨ Fitur Baru (Pembaruan Modul 3)

Sesuai dengan spesifikasi pada Modul Praktikum 03, aplikasi ini telah mengimplementasikan beberapa pembaruan utama:
1. **Sistem Design Tokens (`tokens.js`):** Pemusatan pengaturan gaya (style) seperti warna dasar (surface, text, accent), jarak (spacing), ukuran huruf (typography), dan radius. Hal ini membuat UI aplikasi jauh lebih konsisten.
2. **Layout Responsif (`FlatList`):** Daftar entri buku harian secara dinamis beradaptasi dengan ukuran layar perangkat:
   - **1 Kolom:** Untuk layar smartphone standar (mode Portrait).
   - **2 Kolom:** Untuk layar dengan lebar $\ge$ 600px (Tablet atau mode Landscape).
3. **Komponen Interaktif (`Pressable`):** Kartu entri (`DiaryCard`) sekarang dapat merespons sentuhan pengguna dengan memberikan efek visual saat ditekan.
4. **Modal Detail (`DiaryDetailModal`):** Menampilkan detail lengkap entri (termasuk *hero image* yang proporsional 16:9 dan isi catatan penuh) dalam sebuah *pop-up* (Modal) saat pengguna menekan salah satu kartu.
5. **Aksesibilitas Dasar:** Penambahan atribut `accessibilityLabel` pada kartu interaktif untuk mendukung *screen reader*.
6. **Integrasi Status Bar & Safe Area:** Menggunakan `StatusBar` dari Expo agar jam dan ikon baterai pada HP terlihat jelas, serta area UI yang aman di dalam layar.

---

## 💡 Penjelasan Breakpoint 600px (Layout Responsif)

Perubahan tata letak (layout) aplikasi dari 1 kolom menjadi 2 kolom diatur secara dinamis menggunakan *hook* `useWindowDimensions` dari React Native. Hook ini bertugas membaca dimensi lebar layar (`width`) perangkat secara otomatis dan *real-time*. 

Jika lebar layar perangkat berada di bawah **600px** (misalnya pada smartphone dalam mode berdiri/portrait), variabel pengecekan layout bernilai `false`, sehingga komponen `FlatList` akan merender data dalam **1 kolom** penuh.

Namun, jika lebar layar terdeteksi mencapai **600px atau lebih** (misalnya saat smartphone diputar ke mode miring/landscape, atau diakses melalui tablet), variabel pengecekan bernilai `true`. Hal ini secara otomatis mengubah properti `numColumns` pada `FlatList` menjadi **2**, sehingga ruang layar yang lebih lebar dapat dimanfaatkan secara optimal tanpa terlihat melar (*overflow*).

---

## 📁 Struktur Proyek Terbaru

```text
diary-app/
├── assets/
│   └── moods/
│       └── happy.png
├── src/
│   ├── components/
│   │   ├── DiaryCard.js
│   │   └── DiaryDetailModal.js   <-- (Baru) Komponen Modal Detail
│   ├── screens/
│   │   └── DiaryListScreen.js
│   └── styles/
│       └── tokens.js             <-- (Baru) Design tokens
├── App.js
├── app.json
├── package.json
└── README.md