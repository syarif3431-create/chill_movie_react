import { useState, useEffect, useRef } from 'react';
import MovieCard from './MovieCard';
import arrowLeft from '../assets/logo/arrow-left.png';
import arrowRight from '../assets/logo/arrow-right.png';
import tmdbApi from '../api/axiosConfig';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const GENRE_MAP = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Sci-Fi',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western'
};

// skeleton
const MovieSkeleton = ({ variant }) => (
    <div
        className={`flex-shrink-0 animate-pulse bg-white/5 rounded-lg ${variant === 'portrait'
                ? 'w-[150px] md:w-[200px] h-[225px] md:h-[300px]'
                : 'w-[240px] md:w-[302px] h-[130px] md:h-[162px]'
            }`}
    />
);

const MovieRow = ({
    title,
    variant = 'portrait',
    fetchUrl
}) => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const sliderRef = useRef(null);

    // fetch data
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await tmdbApi.get(fetchUrl);
                setMovies(response.data.results || []);
            } catch (error) {
                if (import.meta.env.DEV) {
                    console.error(
                        '[MovieRow API Error]:',
                        error.message
                    );
                }
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);
            }
        };
        if (fetchUrl) {
            fetchData();
        }
    }, [fetchUrl]);
    // slider nav
    const scroll = (direction) => {
        if (sliderRef.current) {
            const scrollAmount =
                window.innerWidth < 768
                    ? 300
                    : 1000;
            sliderRef.current.scrollBy({
                left:
                    direction === 'left'
                        ? -scrollAmount
                        : scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    return (
        <div className="relative w-full py-[30px] md:py-[40px] px-4 md:px-[80px] bg-transparent group/row">
            <h2 className="text-white text-xl md:text-3xl font-bold mb-4 md:mb-6 tracking-wide">
                {title}
            </h2>
            <div className="relative flex items-center">
                {/* nav kiri */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-[-10px] md:left-[-50px] top-1/2 -translate-y-1/2 z-40 opacity-100 md:opacity-0 group-hover/row:opacity-100 transition-all duration-300"
                >
                    <div className="bg-black/80 p-2 md:p-3 rounded-full border border-white/10 backdrop-blur-md hover:scale-110">
                        <img
                            src={arrowLeft}
                            alt="Prev"
                            className="w-4 h-4 brightness-0 invert"
                        />
                    </div>
                </button>
                {/* slider */}
                <div
                    ref={sliderRef}
                    className="flex items-center overflow-x-scroll overflow-y-visible scrollbar-hide gap-4 md:gap-6 scroll-smooth snap-x snap-mandatory py-4"
                >
                    {isLoading ? (
                        [...Array(6)].map((_, i) => (
                            <MovieSkeleton
                                key={i}
                                variant={variant}
                            />
                        ))
                    ) : (
                        movies.map((movie, index) => {
                            const imagePath =
                                variant === 'portrait'
                                    ? movie.poster_path
                                    : (
                                        movie.backdrop_path ||
                                        movie.poster_path
                                    );
                            return (
                                <MovieCard
                                    key={movie.id}
                                    id={movie.id}
                                    variant={variant}
                                    image={
                                        imagePath
                                            ? `${IMG_BASE_URL}${imagePath}`
                                            : ''
                                    }
                                    title={
                                        movie.title ||
                                        movie.name
                                    }
                                    progress={
                                        variant === 'continue'
                                            ? ((movie.id % 8) * 10 + 20)
                                            : null
                                    }
                                    rating={movie.vote_average}
                                    genres={
                                        movie.genre_ids
                                            ?.slice(0, 3)
                                            .map(id => GENRE_MAP[id])
                                            .filter(Boolean)
                                    }
                                    isNew={index % 3 === 0}
                                    isTop10={index < 10 && movie.vote_average >= 7}
                                    episodeCount={movie.name ? Math.floor(movie.id % 20) + 8 : null}
                                />
                            );
                        })
                    )}
                </div>
                {/* nav kanan */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-[-10px] md:right-[-50px] top-1/2 -translate-y-1/2 z-40 opacity-100 md:opacity-0 group-hover/row:opacity-100 transition-all duration-300"
                >
                    <div className="bg-black/80 p-2 md:p-3 rounded-full border border-white/10 backdrop-blur-md hover:scale-110">
                        <img
                            src={arrowRight}
                            alt="Next"
                            className="w-4 h-4 brightness-0 invert"
                        />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default MovieRow;