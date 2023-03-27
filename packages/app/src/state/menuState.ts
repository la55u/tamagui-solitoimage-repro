import { create } from 'zustand'

type Item = any

type MenuStore = {
  currentMenuIndex: number
  setMenuIndex: (idx: number) => void

  currentCategoryIndex: number
  setCategoryIndex: (idx: number) => void

  activeItem: null | Item
  setActiveItem: (item: Item) => void
  clearActiveItem: () => void
}

export const useMenuStore = create<MenuStore>()((set) => ({
  currentMenuIndex: 0,
  setMenuIndex: (idx: number) => set({ currentMenuIndex: idx }),

  currentCategoryIndex: 0,
  setCategoryIndex: (idx: number) => set({ currentCategoryIndex: idx }),

  activeItem: null,
  setActiveItem: (item: Item) => set({ activeItem: item }),
  clearActiveItem: () => set({ activeItem: null }),
}))
