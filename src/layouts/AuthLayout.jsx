import { Link } from 'react-router-dom';
import Logo from "../assets/logo/Logo.png";
import loginBG from "../assets/image/loginBG.jpg";

const AuthLayout = ({ children, title, subtitle }) => {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center p-4 font-lato"
            style={{ backgroundImage: `url(${loginBG})` }}
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
            <div className="relative z-10 bg-[#181A1CD6] text-white 
                    w-[306px] md:w-[529px] 
                    p-6 md:p-10 
                    rounded-[8px] md:rounded-[16px] 
                    flex flex-col items-center 
                    gap-5 md:gap-[37px]
                    border border-white/5
                    shadow-2xl">
                <Link to="/" aria-label="Kembali ke beranda">
                    <img src={Logo} alt="Chill Movie" className="w-[100px] md:w-[163px]" />
                </Link>
                <div className="text-center w-full">
                    <h1 className="text-2xl md:text-[32px] font-bold mb-1">{title}</h1>
                    <p className="text-sm md:text-lg font-light opacity-80">{subtitle}</p>
                </div>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
