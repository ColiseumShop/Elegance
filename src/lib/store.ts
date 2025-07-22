import { create } from 'zustand';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  [key: string]: any;
}

interface Category {
  id: string;
  name: string;
  image: string;
  [key: string]: any;
}

interface StoreState {
  products: Product[];
  categories: Category[];
  loading: boolean;
  setProducts: (products: Product[]) => void;
  setCategories: (categories: Category[]) => void;
  setLoading: (loading: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  products: [],
  categories: [],
  loading: false,
  setProducts: (products) => set({ products }),
  setCategories: (categories) => set({ categories }),
  setLoading: (loading) => set({ loading }),
})); 