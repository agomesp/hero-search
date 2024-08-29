import {create} from 'zustand';

const initialState = (set: Function): any => ({
    search: '',
    currentPage: 1,
    totalPages: 0,
    currentHeroes: [],
    setCurrentPage: (currentPage: number) => set({currentPage}),
    setTotalPages: (total: number) => set({totalPages: Math.floor(total)}),
    setSearch: (search: any) => set({search}),
    setCurrentHeroes: (currentHeroes: any) => set({currentHeroes}),
});

const useNewsStore: any = create((set: any) => initialState(set));

export default useNewsStore;