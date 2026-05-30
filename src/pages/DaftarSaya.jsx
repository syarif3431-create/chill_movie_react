import { useNavigate } from 'react-router-dom';
import useWatchlistStore from '../store/useWatchlistStore';
import MovieCard from '../components/MovieCard';
import SEO from '../components/SEO';

const DaftarSaya = () => {
    const navigate = useNavigate();
    const { watchlist } = useWatchlistStore();

    return (
        <div className="w-full bg-[#181818] min-h-screen overflow-x-hidden pt-[80px] md:pt-[100px]">
            <SEO title="Daftar Saya" description="Film dan series yang kamu simpan untuk ditonton nanti." />
            <main className="px-4 md:px-[80px] pt-6 md:pt-10 pb-20">
                {/* Title */}
                <h1 className="text-white text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                    Daftar Saya
                </h1>

                {watchlist.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[50vh] text-center">
                        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                            <svg className="w-10 h-10 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                            Daftar Kamu Masih Kosong
                        </h2>
                        <p className="text-zinc-500 max-w-md text-sm md:text-base">
                            Simpan film kesukaan kamu dan tonton nanti.
                        </p>
                        <button
                            onClick={() => navigate('/home')}
                            className="mt-8 px-8 py-3 bg-[#2F80ED] text-white font-bold rounded-md hover:bg-[#2F80ED]/80 transition-all duration-300 hover:scale-105"
                        >
                            Jelajahi Film
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 md:gap-4">
                        {watchlist.map((movie, index) => (
                            <div key={movie.id} className="relative">
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
            </main>
        </div>
    );
};

export default DaftarSaya;
