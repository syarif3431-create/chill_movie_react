import { useState } from 'react';
import useWatchlistStore from '../store/useWatchlistStore';

import {
    FaPlay,
    FaCheck,
    FaPlus,
    FaChevronDown,
    FaStar
} from 'react-icons/fa';

const MovieCard = ({
    id,
    variant = 'portrait',
    image,
    title,
    progress,
    rating,
    genres = [],
    isNew = false,
    isTop10 = false,
    episodeCount
}) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    const {
        watchlist,
        addToWatchlist,
        removeFromWatchlist
    } = useWatchlistStore();

    const isSaved = watchlist.some(
        (item) => item.id === id
    );
    const formattedRating = rating
        ? rating.toFixed(1)
        : "N/A";

    const handleMyList = (e) => {
        e.stopPropagation();
        if (isSaved) {
            removeFromWatchlist(id);
        } else {
            addToWatchlist({
                id,
                image,
                title,
                rating,
                genres,
                variant
            });
        }
    };

    const placeholderBg = "bg-gradient-to-br from-zinc-800 to-zinc-900";

    if (variant === 'continue') {
        return (
            <div 
                className="relative flex-shrink-0 w-[160px] md:w-[302px] h-[90px] md:h-[162px] rounded-lg overflow-hidden cursor-pointer group transition-all duration-500 ease-out hover:scale-[1.05] hover:z-[999] hover:shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
                role="article"
                aria-label={`${title} - Rating ${formattedRating}`}
            >
                {!imgLoaded && !imgError && (
                    <div className={`absolute inset-0 animate-pulse ${placeholderBg}`}></div>
                )}
                {imgError ? (
                    <div className={`w-full h-full ${placeholderBg} flex items-center justify-center`}>
                        <span className="text-white/40 text-xs">No Image</span>
                    </div>
                ) : (
                    <img
                        src={image}
                        alt={title}
                        className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                        loading="lazy"
                        onLoad={() => setImgLoaded(true)}
                        onError={() => setImgError(true)}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Bottom info */}
                <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 z-20">
                    <h3 className="text-white text-[11px] md:text-[14px] font-bold truncate drop-shadow-md">
                        {title}
                    </h3>
                    <div className="flex items-center gap-1 mt-0.5">
                        <FaStar size={9} className="text-yellow-400" aria-hidden="true" />
                        <span className="text-white/70 text-[10px] md:text-[12px] font-medium">
                            {formattedRating}
                        </span>
                    </div>
                </div>

                {/* Progress bar */}
                {progress && (
                    <div className="absolute bottom-0 left-0 w-full h-[3px] md:h-[4px] bg-[#333] z-40">
                        <div
                            className="h-full bg-[#2F80ED]"
                            style={{ width: `${progress}%` }}
                            role="progressbar"
                            aria-valuenow={progress}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        ></div>
                    </div>
                )}
            </div>
        );
    }

    // Portrait variant (default)
    return (
        <div 
            className="relative flex-shrink-0 w-[120px] md:w-[200px] h-[180px] md:h-[300px] rounded-lg overflow-visible cursor-pointer group"
            role="article"
            aria-label={`${title} - Rating ${formattedRating}`}
        >
            {/* Card Image */}
            <div className="relative w-full h-full rounded-lg overflow-hidden transition-all duration-300 group-hover:rounded-t-lg group-hover:rounded-b-none">
                {!imgLoaded && !imgError && (
                    <div className={`absolute inset-0 animate-pulse ${placeholderBg} rounded-lg`}></div>
                )}
                {imgError ? (
                    <div className={`w-full h-full ${placeholderBg} flex items-center justify-center rounded-lg`}>
                        <span className="text-white/40 text-xs text-center px-2">No Image</span>
                    </div>
                ) : (
                    <img
                        src={image}
                        alt={title}
                        className={`w-full h-full object-cover transition-all duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                        loading="lazy"
                        onLoad={() => setImgLoaded(true)}
                        onError={() => setImgError(true)}
                    />
                )}

                {/* Badges */}
                {isNew && (
                    <div className="absolute top-2 left-2 bg-green-600 text-white text-[8px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 rounded z-20">
                        Episode Baru
                    </div>
                )}
                {isTop10 && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-[8px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 rounded z-20 flex items-center gap-0.5">
                        <span>Top</span>
                        <span className="text-[9px] md:text-[11px]">10</span>
                    </div>
                )}
            </div>

            {/* Hover Detail Popup */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180px] md:w-[260px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-[999] pointer-events-none group-hover:pointer-events-auto">
                {/* Poster image top */}
                <div className="w-full h-[140px] md:h-[200px] rounded-t-lg overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    {/* Badges on popup */}
                    {isNew && (
                        <div className="absolute top-2 left-2 bg-green-600 text-white text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded z-20">
                            Episode Baru
                        </div>
                    )}
                    {isTop10 && (
                        <div className="absolute top-2 right-2 bg-red-600 text-white text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded z-20">
                            Top 10
                        </div>
                    )}
                </div>

                {/* Detail section */}
                <div className="bg-[#1e1e1e] rounded-b-lg p-3 md:p-4 shadow-[0_10px_40px_rgba(0,0,0,0.9)] border border-white/5 border-t-0">
                    {/* Action buttons */}
                    <div className="flex items-center gap-2 mb-2.5">
                        <button 
                            className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center text-black hover:scale-110 transition-transform"
                            aria-label={`Play ${title}`}
                        >
                            <FaPlay size={9} />
                        </button>
                        <button
                            onClick={handleMyList}
                            className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/40 bg-transparent flex items-center justify-center hover:scale-110 hover:border-white transition-all"
                            aria-label={isSaved ? 'Hapus dari Daftar Saya' : 'Tambahkan ke Daftar Saya'}
                        >
                            {isSaved ? (
                                <FaCheck size={9} className="text-green-400" />
                            ) : (
                                <FaPlus size={9} className="text-white" />
                            )}
                        </button>
                        <div className="ml-auto">
                            <button 
                                className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/40 bg-transparent flex items-center justify-center text-white hover:scale-110 hover:border-white transition-all"
                                aria-label="Lihat detail"
                            >
                                <FaChevronDown size={9} />
                            </button>
                        </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex items-center gap-2 mb-2 text-[10px] md:text-[11px]">
                        <span className="border border-white/30 text-white/70 px-1.5 py-0.5 rounded text-[9px] font-bold">
                            13+
                        </span>
                        {episodeCount && (
                            <span className="text-white/50">
                                {episodeCount} Episode
                            </span>
                        )}
                    </div>

                    {/* Genres */}
                    {genres.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1">
                            {genres.map((genre, index) => (
                                <span key={index} className="flex items-center">
                                    <span className="text-[10px] md:text-[11px] text-white/70">
                                        {genre}
                                    </span>
                                    {index < genres.length - 1 && (
                                        <span className="text-white/30 mx-1 text-[8px]">•</span>
                                    )}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
