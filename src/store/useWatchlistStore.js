import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useWatchlistStore = create(
    persist(
        (set) => ({
            watchlist: [],
            // Create
            addToWatchlist: (movie) => set((state) => {
                const isExist = state.watchlist.find((item) => item.id === movie.id);
                if (!isExist) {
                    return { watchlist: [movie, ...state.watchlist] };
                }
                return state; 
            }),
            // Delete
            removeFromWatchlist: (movieId) => set((state) => ({
                watchlist: state.watchlist.filter((item) => item.id !== movieId)
            })),
        }),
        {
            name: 'chill-movie-watchlist',
        }
    )
);

export default useWatchlistStore;