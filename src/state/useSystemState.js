/**
 * useSystemState.js - Central state management for the 3D portfolio
 */

import { create } from 'zustand'

const useSystemState = create((set) => ({
  // Boot stages: 'logo' | 'booting' | 'waiting_for_input' | 'booted' | 'fullscreen' | 'in_panel'
  bootStage: 'logo',

  // Whether to show fullscreen terminal (after boot animation)
  showFullscreen: false,

  // Currently selected menu item (0-indexed)
  selectedIndex: 0,

  // Which panel is open (null = showing menu)
  activePanel: null,

  // Number of menu items (for bounds checking)
  menuItemCount: 6,

  // Actions
  setBootStage: (stage) => set({ bootStage: stage }),

  setShowFullscreen: (show) => set({ showFullscreen: show }),

  setSelectedIndex: (index) => set({ selectedIndex: index }),

  setActivePanel: (panel) => set({ activePanel: panel, bootStage: 'in_panel' }),

  setSelectedIndex: (index) => set({ selectedIndex: index }),

  moveUp: () => set((state) => ({
    selectedIndex: Math.max(0, state.selectedIndex - 1)
  })),

  moveDown: () => set((state) => ({
    selectedIndex: Math.min(state.menuItemCount - 1, state.selectedIndex + 1)
  })),

  goToMenu: () => set({ activePanel: null, bootStage: 'fullscreen' }),
}))

export default useSystemState