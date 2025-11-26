# Save Your Plate

## Deskripsi Singkat
**Save Your Plate** adalah platform berbasis web yang membantu pengelolaan makanan agar tidak terbuang percuma. Pengguna bisa mencatat produk makanan mereka, mengelola stok, dan memantau konsumsi, sehingga mengurangi food waste dan mendorong pola konsumsi yang lebih bertanggung jawab.  

---

## Masalah yang Diselesaikan
Banyak makanan terbuang setiap hari karena kurangnya pemantauan stok atau kesadaran terhadap food waste.  
**Save Your Plate** hadir untuk:  
- Membantu pengguna mencatat dan mengelola makanan mereka.  
- Memberikan kontrol terhadap stok makanan agar tidak kedaluwarsa.  
- Meningkatkan kesadaran akan pengurangan food waste.  

---

## Solusi yang Dibuat
Platform ini menyediakan:  
- **Halaman utama (Landing Page)** dengan pesan edukatif untuk mengurangi food waste.  
- **Autentikasi pengguna**: register, login, dan proteksi halaman dashboard.  
- **Dashboard** untuk mengelola produk makanan: tambah, edit, hapus.  
- **Upload foto produk** untuk memudahkan visualisasi stok.  
- **Responsif dan interaktif** di berbagai perangkat: mobile, tablet, dan desktop.  

---

## Tech Stack & Fitur Utama
**Backend:**  
- Node.js, Express.js  
- MongoDB dengan Mongoose  
- JWT untuk autentikasi  
- Bcrypt untuk hash password  

**Frontend:**  
- React.js (React Router)  
- Axios untuk komunikasi API  
- CSS custom untuk desain responsif dan soft blue theme  

**Fitur Utama:**  
- Register & Login dengan keamanan token JWT  
- Upload foto produk  
- Tambah, edit, dan hapus produk  
- Landing page edukatif  
- Dashboard interaktif dengan grid responsif  

---

## Cara Menjalankan Project

### 1. Clone repository
```bash
git clone <URL_REPO>
cd SaveYourPlate
```
### 2. Backend Setup
```
cd backend
npm install
cp .env.example .env
# lalu isi .env dengan:
# MONGO_URI=<mongodb_connection_string>
# JWT_SECRET=<secret_key>
npm run dev
```
Server akan berjalan di `http://localhost:5000`

### 3. Frontend Setup
```
cd frontend
npm install
npm start
```
Frontend akan berjalan di `http://localhost:3000`

Notes
- Pastikan folder uploads/ ada di backend untuk menyimpan foto produk.
- Gunakan token JWT yang tersimpan di localStorage untuk akses halaman dashboard.
- Tampilan sudah responsif untuk mobile, tablet, dan desktop.

<img width="2845" height="1517" alt="image" src="https://github.com/user-attachments/assets/c365f91e-669e-4be7-85c4-af3a01fe9906" />
<img width="2845" height="1517" alt="image" src="https://github.com/user-attachments/assets/827270ef-b8b2-4cb9-81ce-d8574da563b8" />
<img width="2845" height="1517" alt="image" src="https://github.com/user-attachments/assets/457e0fb8-7bba-4d10-b52a-de90d1c3e3b8" />
<img width="2845" height="1517" alt="image" src="https://github.com/user-attachments/assets/7790ebf5-7906-4893-8af9-9c08f1cd7f47" />
<img width="2845" height="1517" alt="image" src="https://github.com/user-attachments/assets/30aa7a83-2e1f-4d54-9e80-237ac40e8ff2" />
<img width="2845" height="1682" alt="image" src="https://github.com/user-attachments/assets/9727be70-5b0e-47a0-94d3-76a852c1d8de" />
<img width="2879" height="1705" alt="image" src="https://github.com/user-attachments/assets/44ce5c94-2132-4bc9-8112-ea33ccd159ad" />


