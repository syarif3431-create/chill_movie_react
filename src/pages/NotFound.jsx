import { Link } from 'react-router-dom';
import logo from '../assets/logo/Logo.png';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#181818] text-white flex flex-col">
            {/* Simple header */}
            <header className="px-[16px] md:px-[80px] py-4">
                <Link to="/home">
                    <img src={logo} alt="Chill" className="h-[20px] md:h-[40px] w-auto" />
                </Link>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
                <div className="absolute w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full"></div>
                <h1 className="relative z-10 text-[90px] md:text-[180px] font-black tracking-[12px] text-[#222] select-none leading-none">
                    404
                </h1>
                <h2 className="relative z-10 -mt-4 md:-mt-8 text-[16px] md:text-[28px] uppercase tracking-[8px] text-zinc-600 font-bold">
                    Not Found
                </h2>
                <p className="relative z-10 mt-6 text-zinc-500 text-sm md:text-base max-w-md leading-relaxed">
                    Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
                </p>
                <Link
                    to="/home"
                    className="relative z-10 mt-10 px-8 py-3 bg-[#2F80ED] text-white font-bold rounded-md hover:bg-[#2F80ED]/80 transition-all duration-300 hover:scale-105"
                >
                    Kembali ke Beranda
                </Link>
            </main>

            <footer className="text-center py-6 text-zinc-600 text-sm">
                &copy; 2026 Chill. All Rights Reserved.
            </footer>
        </div>
    );
};

export default NotFound;
