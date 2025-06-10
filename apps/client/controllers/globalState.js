import { create } from "zustand";
import {persist} from 'zustand/middleware';

export const useUserStore = create(persist((set,get) => ({
    user: null,
    role: null,
    setRole: (role) => set({role}),
    setUser: (userData) => set({user: userData}),
    clearUser: () => set({user: null, role: null})
}),{ name: 'auth'}
));

export const useListingsStore = create((set) => ({
    listings: [],
    setListings : (newListings) => set({listings : newListings}),
    publicListings: [],
    setPublicListings: (listings) => set({publicListings: listings})
}

))

export const useSidebarStore = create((set) => ({
    sidebar: true,
    toggleSidebar: () => set((state) => ({sidebar: !state.sidebar}))
}));
