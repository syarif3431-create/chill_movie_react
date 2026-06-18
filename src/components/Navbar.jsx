import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo/Logo.png';
import avatar from '../assets/logo/avatar.png';
import { useAuthStore } from '../store/useAuthStore';
import { 
    FaTh, 
    FaUser, 
    FaCreditCard, 
    FaSignOutAlt, 
    FaChevronDown,
    FaChevronUp
} from 'react-icons/fa';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const dropdownRef = useRef(null);
    const { currentUser, logoutZustand } = useAuthStore();

    const handleLogout = () => {
        logoutZustand();
        setOpen(false);
        navigate('/login', { replace: true });
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close dropdown on route change
    const prevPathname = useRef(location.pathname);
    useEffect(() => {
        if (prevPathname.current !== location.pathname) {
            setOpen(false);
            prevPathname.current = location.pathname;
        }
    }, [location.pathname]);

    const navLinks = [
        { to: '/series', label: 'Series' },
        { to: '/film', label: 'Film' },
        { to: '/daftar-saya', label: 'Daftar Saya' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav 
            className="fixed top-0 left-0 w-full z-50 bg-[#181818]/80 backdrop-blur-md px-4 md:px-[80px] py-3 md:py-4 flex justify-between items-center"
            role="navigation"
            aria-label="Main navigation"
        >
            {/* Left: Logo + Nav Links */}
            <div className="flex items-center gap-4 md:gap-[50px]">
                <Link to="/home" aria-label="Beranda Chill Movie" className="flex-shrink-0">
                    <img src={logo} alt="Chill" className="h-[18px] md:h-[32px] w-auto" />
                </Link>

                {/* Nav links - always visible */}
                <div className="flex items-center gap-4 md:gap-[40px] text-white font-medium text-[12px] md:text-[15px]">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.to}
                            to={link.to} 
                            className={`transition-all duration-200 whitespace-nowrap ${
                                isActive(link.to) 
                                    ? 'text-white font-semibold' 
                                    : 'text-white/80 hover:text-white'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Right: Avatar + Chevron */}
            <div className="relative" ref={dropdownRef}>
                <button 
                    onClick={() => setOpen(!open)} 
                    className="flex items-center gap-1.5 cursor-pointer group"
                    aria-expanded={open}
                    aria-haspopup="true"
                    aria-label="Menu pengguna"
                >
                    <img 
                        src={avatar} 
                        alt="" 
                        className="w-[30px] md:w-[36px] h-[30px] md:h-[36px] rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all" 
                    />
                    {open ? (
                        <FaChevronUp size={10} className="text-white/60" />
                    ) : (
                        <FaChevronDown size={10} className="text-white/60" />
                    )}
                </button>

                {open && (
                    <div 
                        className="absolute right-0 mt-3 w-[180px] md:w-[210px] bg-[#1e1e1e] border border-white/10 rounded-lg overflow-hidden shadow-2xl"
                        role="menu"
                    >
                        <div className="px-4 py-3 border-b border-white/10">
                            <p className="text-white/50 text-xs">
                                Halo, <span className="text-white font-semibold">{currentUser || 'User'}!</span>
                            </p>
                        </div>
                        <div className="py-1">
                            <Link 
                                to="/dashboard" 
                                className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${
                                    isActive('/dashboard') 
                                        ? 'bg-white/5 text-white' 
                                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                                }`}
                                role="menuitem"
                                onClick={() => setOpen(false)}
                            >
                                <FaTh size={13} className="text-white/40" />
                                <span className="text-[13px] font-medium">Dashboard</span>
                            </Link>
                            <Link 
                                to="/profil" 
                                className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${
                                    isActive('/profil') 
                                        ? 'bg-white/5 text-white' 
                                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                                }`}
                                role="menuitem"
                                onClick={() => setOpen(false)}
                            >
                                <FaUser size={13} className="text-white/40" />
                                <span className="text-[13px] font-medium">Account</span>
                            </Link>
                            <Link 
                                to="/subscription" 
                                className="flex items-center gap-3 px-4 py-2.5 text-white/70 hover:bg-white/5 hover:text-white transition-colors"
                                role="menuitem"
                                onClick={() => setOpen(false)}
                            >
                                <FaCreditCard size={13} className="text-white/40" />
                                <span className="text-[13px] font-medium">Subscription</span>
                            </Link>
                        </div>
                        <hr className="border-white/10" />
                        <button 
                            onClick={handleLogout} 
                            className="flex items-center gap-3 px-4 py-2.5 text-white/70 hover:bg-white/5 hover:text-white transition-colors w-full text-left"
                            role="menuitem"
                        >
                            <FaSignOutAlt size={13} className="text-white/40" />
                            <span className="text-[13px] font-medium">Sign out</span>
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
