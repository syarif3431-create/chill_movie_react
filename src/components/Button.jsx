const Button = ({ children, type = "button", variant = "primary", onClick, icon, disabled = false }) => {
    const baseStyle = "w-full h-[48px] rounded-[50px] font-bold transition duration-300 flex justify-center items-center gap-2 font-lato disabled:opacity-50 disabled:cursor-not-allowed";
    const variants = {
        primary: "bg-chill-button hover:bg-[#3f4445] text-white border border-white/10 hover:shadow-lg",
        outline: "border border-white/20 bg-transparent hover:bg-white/5 text-white text-[14px]",
    };

    return (
        <button 
            type={type} 
            onClick={onClick} 
            disabled={disabled}
            className={`${baseStyle} ${variants[variant]}`}
        >
            {icon && <img src={icon} alt="" className="w-[18px]" />}
            {children}
        </button>
    );
};

export default Button;
