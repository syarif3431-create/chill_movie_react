import { useState } from 'react';

const InputField = ({
    label,
    name,
    type = "text",
    placeholder,
    icon,
    value,
    onChange,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="flex flex-col gap-[8px] text-left w-full font-lato">
            <label
                htmlFor={name || label}
                className="text-[16px] text-white opacity-80 ml-2"
            >
                {label}
            </label>
            <div className="relative">
                <input
                    id={name || label}
                    name={name || label}
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full h-[48px] px-6 rounded-[50px] border border-chill-border bg-chill-dark text-white outline-none focus:border-[#2F80ED] transition duration-300 placeholder:opacity-40"
                    aria-label={label}
                    {...props}
                    required
                />
                {isPassword && icon && (
                    <button
                        type="button"
                        onClick={handleTogglePassword}
                        className="absolute right-5 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity"
                        aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                    >
                        <img
                            src={icon}
                            alt=""
                            className="w-[18px]"
                        />
                    </button>
                )}
            </div>
        </div>
    );
};

export default InputField;