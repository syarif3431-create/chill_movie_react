# 🎬 Chill Movie

Modern streaming platform simulation built with React.js, Zustand, Axios, and Tailwind CSS.

---

## ✨ Features

- 🎞️ Real-time movie & TV show catalog from TMDB API
- 🔍 Genre-based movie discovery (Action, Horror, Comedy, etc.)
- 📺 Dedicated Series & Film pages
- ❤️ Smart Watchlist System (Add/Remove with persist)
- 👤 User Profile with editable username, email & password
- 🛡️ Protected Routes with authentication
- 📊 Admin Dashboard (CRUD film management)
- 💳 Subscription page with pricing plans
- 🌙 Premium dark cinematic UI
- 📱 Fully responsive design (Mobile & Desktop)
- 🎬 Hero section with YouTube trailer embed + fallback image
- 🚫 Custom 404 Not Found page
- 💾 Persistent Local Storage with Zustand
- 🔒 Login & Register with validation
- 🎯 SEO optimized with react-helmet-async
- ♿ Accessible (aria-labels, semantic HTML)

---

## 🧠 Watchlist System

User dapat:
- Menambahkan film ke **Daftar Saya** dari halaman Home, Series, atau Film
- Menghapus film menggunakan smart toggle button
- Melihat daftar film tersimpan di halaman Daftar Saya (grid layout)
- Menyimpan data secara persisten menggunakan Zustand Persist

---

## 📄 Pages

| Halaman | Route | Deskripsi |
|---------|-------|-----------|
| Login | `/login` | Halaman masuk akun |
| Register | `/register` | Halaman daftar akun baru |
| Home | `/home` | Beranda dengan Hero & Movie Rows |
| Series | `/series` | Katalog TV Series |
| Film | `/film` | Katalog Film per genre |
| Daftar Saya | `/daftar-saya` | Watchlist user |
| Profil | `/profil` | Edit profil & lihat subscription |
| Dashboard | `/dashboard` | Admin CRUD film |
| Subscription | `/subscription` | Pilih paket berlangganan |
| 404 | `*` | Halaman tidak ditemukan |

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React 19 | Frontend Framework |
| Vite 8 | Build Tool |
| Tailwind CSS 3 | Styling |
| Zustand 5 | State Management |
| React Router DOM 7 | Client-side Routing |
| Axios | HTTP Client |
| TMDB API | Movie & TV Database |
| React Icons | Icon Library |
| React Helmet Async | SEO Meta Tags |
| Vercel | Deployment |

---

## 📂 Project Structure

```plaintext
src/
├── api/
│   ├── apiRequests.js    # TMDB endpoint definitions
│   └── axiosConfig.js    # Axios instance configuration
├── assets/
│   ├── image/            # Background images
│   └── logo/             # Icons & logos
├── components/
│   ├── Button.jsx        # Reusable button component
│   ├── ErrorBoundary.jsx # Error boundary wrapper
│   ├── Footer.jsx        # Footer with accordion (mobile)
│   ├── Hero.jsx          # Hero section with YouTube embed
│   ├── InputField.jsx    # Form input with password toggle
│   ├── MovieCard.jsx     # Movie card (portrait & continue)
│   ├── MovieRow.jsx      # Horizontal scrollable movie row
│   ├── Navbar.jsx        # Navigation bar with dropdown
│   ├── ProtectedRoute.jsx# Auth guard for routes
│   └── SEO.jsx           # SEO meta component
├── css/
│   └── app.css           # Global styles & Tailwind imports
├── layouts/
│   ├── AuthLayout.jsx    # Layout for login/register
│   └── MainLayout.jsx    # Layout with Navbar + Footer
├── pages/
│   ├── DaftarSaya.jsx    # Watchlist page
│   ├── DashboardPage.jsx # Admin dashboard
│   ├── FilmPage.jsx      # Film catalog
│   ├── HomePage.jsx      # Home page
│   ├── LoginPage.jsx     # Login page
│   ├── NotFound.jsx      # 404 page
│   ├── ProfilePage.jsx   # User profile
│   ├── RegisterPage.jsx  # Register page
│   ├── SeriesPage.jsx    # Series catalog
│   └── SubscriptionPage.jsx # Subscription plans
├── store/
│   ├── useAuthStore.js   # Authentication state
│   ├── useListStore.js   # List state (legacy)
│   ├── useUIStore.js     # UI state (mute toggle)
│   └── useWatchlistStore.js # Watchlist state (persist)
├── utilities/
│   └── auth.js           # LocalStorage auth helpers
├── App.jsx               # Root component with routes
└── main.jsx              # Entry point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/your-repo/chill-movie.git
cd chill-movie

# Install dependencies
npm install

# Create .env file
echo VITE_TMDB_KEY=your_tmdb_api_key > .env

# Run development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🌍 API Source

Data provided by **TMDB (The Movie Database)**:

- Website: https://www.themoviedb.org/
- API Docs: https://developer.themoviedb.org/docs

### Environment Variables

```env
VITE_TMDB_KEY=your_tmdb_api_key_here
```

> Dapatkan API key gratis di https://www.themoviedb.org/settings/api

---

## 🌐 Deployment

Project ini di-deploy menggunakan **Vercel** dengan konfigurasi SPA rewrite:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Pastikan tambahkan `VITE_TMDB_KEY` di Vercel Environment Variables.

---

## 👨‍💻 Author

**Syarif Hidayat**

---

## 📝 License

This project is for educational purposes only.
