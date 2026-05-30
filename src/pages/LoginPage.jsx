import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout.jsx';
import InputField from '../components/InputField.jsx';
import Button from '../components/Button.jsx';
import SEO from '../components/SEO.jsx';
import googleIcon from '../assets/logo/google.png';
import eyeOffIcon from '../assets/logo/Vector.png';
import { useAuthStore } from '../store/useAuthStore';
import { getUsers } from '../utilities/auth';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { loginZustand } = useAuthStore();

    const from = location.state?.from?.pathname || '/home';

    const handleLogin = (event) => {
        event.preventDefault();
        setError('');

        if (!username.trim() || !password.trim()) {
            setError("Username dan Password wajib diisi.");
            return;
        }

        setIsLoading(true);

        // Simulate slight delay for UX
        setTimeout(() => {
            const users = getUsers();
            const foundUser = users.find(
                user =>
                    user.username.toLowerCase() === username.trim().toLowerCase() &&
                    user.password === password
            );

            if (foundUser) {
                loginZustand(foundUser.username);
                navigate(from, { replace: true });
            } else {
                setError("Username atau Password salah.");
            }
            setIsLoading(false);
        }, 300);
    };

    return (
        <AuthLayout title="Masuk" subtitle="Selamat datang kembali!">
            <SEO title="Masuk" description="Masuk ke akun Chill Movie kamu." />
            <form onSubmit={handleLogin} className="w-full flex flex-col gap-[20px] md:gap-[24px]" noValidate>
                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-400 text-[13px] px-4 py-2.5 rounded-lg text-center animate-shake">
                        {error}
                    </div>
                )}
                
                <InputField
                    label="Nama Pengguna"
                    name="username"
                    type="text"
                    placeholder="Masukkan nama pengguna"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    autoComplete="username"
                />
                <div className="flex flex-col gap-[8px] md:gap-[12px]">
                    <InputField
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Masukkan Password"
                        icon={eyeOffIcon}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        autoComplete="current-password"
                    />
                    <div className="flex justify-between items-center text-[10px] md:text-[14px] px-1 font-lato">
                        <span className="text-white/60">
                            Belum punya akun? <Link to="/register" className="text-white font-bold hover:underline ml-1">Daftar</Link>
                        </span>
                        <a href="#" className="text-white/60 hover:text-white transition">Lupa kata sandi?</a>
                    </div>
                </div>
                <div className="flex flex-col gap-[12px] md:gap-[16px] mt-2">
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? 'Memproses...' : 'Masuk'}
                    </Button>
                    <div className="text-center text-white/50 text-sm">Atau</div>
                    <Button type="button" variant="outline" icon={googleIcon}>
                        Masuk dengan Google
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
};

export default LoginPage;
