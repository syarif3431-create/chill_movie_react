import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    currentUser: localStorage.getItem('currentUser') || null,
    loginZustand: (username) => {
        localStorage.setItem('currentUser', username);
        set({ currentUser: username });
    },
    logoutZustand: () => {
        localStorage.removeItem('currentUser');
        set({ currentUser: null });
    }
}));