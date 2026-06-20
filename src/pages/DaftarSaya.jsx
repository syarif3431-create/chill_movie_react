import { useNavigate } from 'react-router-dom';
import useWatchlistStore from '../store/useWatchlistStore';
import MovieCard from '../components/MovieCard';
import SEO from '../components/SEO';
import NotFound from './NotFound';

const DaftarSaya = () => {
    const navigate = useNavigate();
    const { watchlist } = useWatchlistStore();

    // Tampilkan NotFound ketika daftar kosong
    if (watchlist.length === 0) {
        return <NotFound />;
    }

    return (
        <div className="w-full bg-[#181818] min-h-screen overflow-x-hidden pt-[80px] md:pt-[100px]">
            <SEO title="Daftar Saya" description="Film dan series yang kamu simpan untuk ditonton nanti." />
            <main className="px-4 md:px-[80px] pt-6 md:pt-10 pb-20">
                {/* Title */}
                <h1 className="text-white text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                    Daftar Saya
                </h1>

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
            </main>
        </div>
    );
};

export default DaftarSaya;
