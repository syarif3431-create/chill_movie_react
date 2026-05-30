import { create } from 'zustand';

export const useUIStore = create((set) => ({
    isMuted: true,
    toggleGlobalMute: () => set((state) => ({ isMuted: !state.isMuted })),
}));

