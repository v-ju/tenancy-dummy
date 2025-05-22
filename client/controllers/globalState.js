import { create } from "zustand";
import {persist} from 'zustand/middleware';

export const useUserStore = create(persist((set) => ({
    user: null,
    setUser: (userData) => set({user: userData}),
    clearUser: () => ({user: null})
}),{ name: 'auth'}
))

export const useSidebarStore = create((set) => ({
    sidebar: true,
    toggleSidebar: () => set((state) => ({sidebar: !state.sidebar}))
}))