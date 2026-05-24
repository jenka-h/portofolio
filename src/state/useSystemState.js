/**
 * useSystemState.js - Central state management for the 3D portfolio
 *
 * This Zustand store holds all the application state:
 * - bootStage: controls what phase the system is in (booting, waiting, ready)
 * - selectedIndex: which menu item is currently highlighted
 * - activePanel: which panel is currently open (null = menu)
 *
 * Any component can import and use this to read/write state
 */

import { create } from 'zustand'

const useSystemState = create((set) => ({
  // Boot stages: 'booting' | 'waiting_for_input' | 'booted' | 'in_panel'
  bootStage: 'booting',

  // Currently selected menu item (0-indexed)
  selectedIndex: 0,

  // Which panel is open (null = showing menu)
  activePanel: null,

  // Number of menu items (for bounds checking)
  menuItemCount: 5,

  // Actions to update state
  setBootStage: (stage) => set({ bootStage: stage }),

  setSelectedIndex: (index) => set({ selectedIndex: index }),

  // Set active panel and update boot stage to 'in_panel'
  setActivePanel: (panel) => set({ activePanel: panel, bootStage: 'in_panel' }),

  // Navigate up (decrement index, min 0)
  moveUp: () => set((state) => ({
    selectedIndex: Math.max(0, state.selectedIndex - 1)
  })),

  // Navigate down (increment index, max menuItemCount - 1)
  moveDown: () => set((state) => ({
    selectedIndex: Math.min(state.menuItemCount - 1, state.selectedIndex + 1)
  })),

  // Go back to main menu and restore boot stage
  goToMenu: () => set({ activePanel: null, bootStage: 'booted' }),
}))

export default useSystemState