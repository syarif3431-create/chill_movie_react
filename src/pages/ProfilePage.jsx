import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import useWatchlistStore from '../store/useWatchlistStore';
import SEO from '../components/SEO';
import MovieCard from '../components/MovieCard';
import avatar from '../assets/logo/avatar.png';
import pensil from '../assets/logo/pensil.png';

const ProfilePage = () => {
    const { currentUser, loginZustand } = useAuthStore();
    const { watchlist } = useWatchlistStore();

    const storedEmail = localStorage.getItem('chill-email') || `${(currentUser || 'user').toLowerCase()}1980@gmail.com`;

    const [username, setUsername] = useState(currentUser || '');
    const [email, setEmail] = useState(storedEmail);
    const [password, setPassword] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [editField, setEditField] = useState(null);

    const handleSave = () => {
        if (!username.trim()) return;
        setIsSaving(true);
        setSuccessMsg('');

        setTimeout(() => {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const userIndex = users.findIndex(
                u => u.username.toLowerCase() === currentUser.toLowerCase()
            );
            if (userIndex !== -1) {
                users[userIndex].username = username.trim();
                if (password.trim()) {
                    users[userIndex].password = password.trim();
                }
                localStorage.setItem('users', JSON.stringify(users));
            }

            localStorage.setItem('chill-email', email);
            loginZustand(username.trim());

            setPassword('');
            setEditField(null);
            setIsSaving(false);
            setSuccessMsg('Profil berhasil disimpan!');
            setTimeout(() => setSuccessMsg(''), 3000);
        }, 400);
    };

    return (
        <div className="w-full bg-[#0f0f0f] min-h-screen overflow-x-hidden pt-[70px] md:pt-[100px] pb-10">
            <SEO title="Profil Saya" description="Kelola profil akun Chill Movie kamu." />

            <div className="max-w-[1100px] mx-auto px-4 md:px-8 pt-6 md:pt-10">

                {/* Two column layout */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12">

                    {/* Left Column: Profile */}
                    <div className="flex-1 max-w-[520px]">
                        {/* Title */}
                        <h1 className="text-white text-xl md:text-2xl font-bold italic mb-6 md:mb-8">
                            Profil Saya
                        </h1>

                        {/* Avatar + Ubah Foto */}
                        <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-10">
                            <div className="w-[70px] h-[70px] md:w-[85px] md:h-[85px] rounded-full overflow-hidden border-2 border-white/10 flex-shrink-0 bg-[#1a1a1a]">
                                <img
                                    src={avatar}
                                    alt="Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <button className="px-4 py-1.5 border border-[#2F80ED] text-[#2F80ED] text-xs md:text-sm font-semibold rounded-full hover:bg-[#2F80ED]/10 transition w-fit">
                                    Ubah Foto
                                </button>
                                <span className="text-white/40 text-[11px] md:text-xs flex items-center gap-1.5">
                                    <img src={pensil} alt="" className="w-2.5 h-2.5 invert opacity-40" />
                                    Maksimal 2MB
                                </span>
                            </div>
                        </div>

                        {/* Form Fields */}
                        <div className="flex flex-col gap-4">
                            {/* Nama Pengguna */}
                            <div className="border border-white/15 rounded-lg px-4 py-3 flex items-center justify-between bg-transparent hover:border-white/25 transition">
                                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                                    <span className="text-white/40 text-[11px]">Nama Pengguna</span>
                                    {editField === 'username' ? (
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="bg-transparent text-white text-[15px] font-medium outline-none border-b border-[#2F80ED] pb-0.5 w-full"
                                            autoFocus
                                        />
                                    ) : (
                                        <span className="text-white text-[15px] font-medium truncate">{username}</span>
                                    )}
                                </div>
                                <button
                                    onClick={() => setEditField(editField === 'username' ? null : 'username')}
                                    className="p-1.5 hover:bg-white/10 rounded-full transition ml-3 flex-shrink-0"
                                    aria-label="Edit nama pengguna"
                                >
                                    <img src={pensil} alt="" className="w-4 h-4 invert opacity-40 hover:opacity-80 transition" />
                                </button>
                            </div>

                            {/* Email */}
                            <div className="border border-white/15 rounded-lg px-4 py-3 flex items-center justify-between bg-transparent hover:border-white/25 transition">
                                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                                    <span className="text-white/40 text-[11px]">Email</span>
                                    {editField === 'email' ? (
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="bg-transparent text-white text-[15px] font-medium outline-none border-b border-[#2F80ED] pb-0.5 w-full"
                                            autoFocus
                                        />
                                    ) : (
                                        <span className="text-white/60 text-[15px] font-medium truncate">{email}</span>
                                    )}
                                </div>
                            </div>

                            {/* Kata Sandi */}
                            <div className="border border-white/15 rounded-lg px-4 py-3 flex items-center justify-between bg-transparent hover:border-white/25 transition">
                                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                                    <span className="text-white/40 text-[11px]">Kata Sandi</span>
                                    {editField === 'password' ? (
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Masukkan kata sandi baru"
                                            className="bg-transparent text-white text-[15px] font-medium outline-none border-b border-[#2F80ED] pb-0.5 w-full placeholder:text-white/20 placeholder:font-normal"
                                            autoFocus
                                        />
                                    ) : (
                                        <span className="text-white/60 text-[15px] font-medium tracking-[3px]">••••••••••••••</span>
                                    )}
                                </div>
                                <button
                                    onClick={() => setEditField(editField === 'password' ? null : 'password')}
                                    className="p-1.5 hover:bg-white/10 rounded-full transition ml-3 flex-shrink-0"
                                    aria-label="Edit kata sandi"
                                >
                                    <img src={pensil} alt="" className="w-4 h-4 invert opacity-40 hover:opacity-80 transition" />
                                </button>
                            </div>
                        </div>

                        {/* Success Message */}
                        {successMsg && (
                            <div className="mt-4 bg-green-500/10 border border-green-500/30 text-green-400 text-sm px-4 py-2.5 rounded-lg">
                                {successMsg}
                            </div>
                        )}

                        {/* Save Button */}
                        <button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="mt-5 px-6 py-2 bg-[#1E3A5F] text-white text-sm font-bold rounded-md hover:bg-[#2F80ED] transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSaving ? 'Menyimpan...' : 'Simpan'}
                        </button>
                    </div>

                    {/* Right Column: Premium Subscription Banner */}
                    <div className="w-full md:w-[380px] flex-shrink-0 md:mt-14">
                        <div className="bg-[#3b5fe0] rounded-xl p-5 md:p-6 relative overflow-hidden">
                            {/* Aktif badge */}
                            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-[11px] font-semibold rounded-full mb-3">
                                Aktif
                            </div>
                            <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                                Akun Premium Individual ✨
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed mb-3">
                                Saat ini kamu sedang menggunakan akses akun premium.
                            </p>
                            <p className="text-white/50 text-xs">
                                Berlaku hingga 31 Desember 2026
                            </p>
                            {/* Decorative gradient */}
                            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        </div>
                    </div>
                </div>

                {/* Daftar Saya Section */}
                <div className="mt-14 md:mt-16">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-white text-xl md:text-2xl font-bold italic">
                            Daftar Saya
                        </h2>
                        <Link
                            to="/daftar-saya"
                            className="text-white/40 text-xs md:text-sm hover:text-white transition"
                        >
                            Lihat Semua
                        </Link>
                    </div>

                    {watchlist.length === 0 ? (
                        <div className="bg-[#1a1a1a] border border-white/5 rounded-lg p-8 text-center">
                            <p className="text-white/40 text-sm">
                                Belum ada film di daftar kamu.
                            </p>
                            <Link
                                to="/home"
                                className="inline-block mt-4 px-5 py-2 bg-[#1E3A5F] text-white text-sm font-semibold rounded hover:bg-[#2F80ED] transition"
                            >
                                Jelajahi Film
                            </Link>
                        </div>
                    ) : (
                        <div className="flex overflow-x-auto scrollbar-hide gap-3 md:gap-4 pb-4">
                            {watchlist.slice(0, 8).map((movie, index) => (
                                <div key={movie.id} className="flex-shrink-0">
                                    <MovieCard
                                        id={movie.id}
                                        title={movie.title}
                                        image={movie.image}
                                        rating={movie.rating}
                                        genres={movie.genres}
                                        variant="portrait"
                                        isNew={index % 2 === 0}
                                        isTop10={movie.rating >= 7}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
