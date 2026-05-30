import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useListStore = create(
    persist(
        (set, get) => ({
            myList: [],
            toggleWatchlist: (movie) => {
                const { myList } = get();
                const isExist = myList.some((item) => item.id === movie.id);
                if (isExist) {
                    set({ myList: myList.filter((item) => item.id !== movie.id) });
                } else {
                    set({ myList: [...myList, movie] });
                }
            },
            removeFromList: (movieId) => {
                const { myList } = get();
                set({ myList: myList.filter((m) => m.id !== movieId) });
            },
            isInList: (movieId) => get().myList.some((item) => item.id === movieId),
        }),
        { name: 'chill-watchlist' }
    )
);