import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        if (import.meta.env.DEV) {
            console.error('[ErrorBoundary]:', error, errorInfo);
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-[#181818] text-white flex flex-col items-center justify-center px-6 text-center">
                    <div className="absolute w-[400px] h-[400px] bg-red-500/5 blur-3xl rounded-full"></div>
                    <h1 className="relative z-10 text-[60px] md:text-[100px] font-black text-[#222] select-none leading-none">
                        Oops!
                    </h1>
                    <h2 className="relative z-10 mt-4 text-lg md:text-2xl font-bold text-zinc-400">
                        Terjadi Kesalahan
                    </h2>
                    <p className="relative z-10 mt-4 text-zinc-500 text-sm md:text-base max-w-md leading-relaxed">
                        Aplikasi mengalami error yang tidak terduga. Silakan coba muat ulang halaman.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="relative z-10 mt-8 px-8 py-3 bg-[#2F80ED] text-white font-bold rounded-md hover:bg-[#2F80ED]/80 transition-all duration-300 hover:scale-105"
                    >
                        Muat Ulang
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
