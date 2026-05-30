import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoChill from '../assets/logo/Logo.png';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

const Footer = () => {
    const [genreOpen, setGenreOpen] = useState(false);
    const [bantuanOpen, setBantuanOpen] = useState(false);

    const genreList = [
        "Aksi", "Anak-anak", "Anime", "Britania", "Drama", "Fantasi", 
        "Sci-fi", "Kejahatan", "Komedi", "Petualangan", "Perang", "Romantis", 
        "Sains & Alam", "Dokumenter", "Misteri", "Horror", "Thriller", "Terlaris"
    ];
    const bantuanList = [
        { label: "FAQ", href: "#" },
        { label: "Kontak Kami", href: "#" },
        { label: "Privasi", href: "#" },
        { label: "Syarat & Ketentuan", href: "#" },
    ];

    return (
        <footer 
            className="w-full bg-[#181818] border-t border-white/10 pt-10 pb-8 px-4 md:px-[80px] mt-[60px] relative z-50"
            role="contentinfo"
        >
            <div className="max-w-[1280px] mx-auto">
                {/* Desktop Layout */}
                <div className="hidden md:flex justify-between items-start gap-[40px] min-h-[164px]">
                    {/* Brand */}
                    <div className="flex flex-col gap-4 w-[350px]">
                        <Link to="/home">
                            <img src={logoChill} alt="Chill Movie" className="w-[150px]" />
                        </Link>
                        <p className="text-white/60 text-[15px] leading-relaxed">
                            Chill adalah platform streaming modern yang menghadirkan ribuan film, acara TV, 
                            dan konten orisinal eksklusif.
                        </p>
                        <p className="text-white/40 text-[14px] font-medium mt-2">
                            &copy; 2026 Chill All Rights Reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-[100px]">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white text-[18px] font-bold">Genre</h4>
                            <nav aria-label="Genre navigation">
                                <div className="grid grid-cols-3 gap-x-[40px] gap-y-[12px]">
                                    {genreList.map((item, index) => (
                                        <a 
                                            key={index} 
                                            href="#" 
                                            className="text-white/60 hover:text-white text-[15px] transition-all whitespace-nowrap"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </nav>
                        </div>
                        <div className="flex flex-col gap-4 min-w-[150px]">
                            <h4 className="text-white text-[18px] font-bold">Bantuan</h4>
                            <nav aria-label="Help navigation">
                                <div className="flex flex-col gap-[12px]">
                                    {bantuanList.map((item, index) => (
                                        <a 
                                            key={index} 
                                            href={item.href} 
                                            className="text-white/60 hover:text-white text-[15px] transition-all whitespace-nowrap"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col gap-6">
                    {/* Logo + Copyright */}
                    <div className="flex flex-col gap-3">
                        <Link to="/home">
                            <img src={logoChill} alt="Chill Movie" className="w-[100px]" />
                        </Link>
                        <p className="text-white/40 text-sm">
                            &copy;2026 Chill All Rights Reserved
                        </p>
                    </div>

                    {/* Genre Accordion */}
                    <div className="border-t border-white/10 pt-4">
                        <button
                            onClick={() => setGenreOpen(!genreOpen)}
                            className="w-full flex items-center justify-between py-2"
                        >
                            <span className="text-white text-base font-semibold">Genre</span>
                            {genreOpen ? (
                                <FaChevronDown size={12} className="text-white/50" />
                            ) : (
                                <FaChevronRight size={12} className="text-white/50" />
                            )}
                        </button>
                        {genreOpen && (
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-3 pb-2">
                                {genreList.map((item, index) => (
                                    <a 
                                        key={index} 
                                        href="#" 
                                        className="text-white/50 text-sm hover:text-white transition"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Bantuan Accordion */}
                    <div className="border-t border-white/10 pt-4">
                        <button
                            onClick={() => setBantuanOpen(!bantuanOpen)}
                            className="w-full flex items-center justify-between py-2"
                        >
                            <span className="text-white text-base font-semibold">Bantuan</span>
                            {bantuanOpen ? (
                                <FaChevronDown size={12} className="text-white/50" />
                            ) : (
                                <FaChevronRight size={12} className="text-white/50" />
                            )}
                        </button>
                        {bantuanOpen && (
                            <div className="flex flex-col gap-2 mt-3 pb-2">
                                {bantuanList.map((item, index) => (
                                    <a 
                                        key={index} 
                                        href={item.href} 
                                        className="text-white/50 text-sm hover:text-white transition"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
