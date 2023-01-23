// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    currentProfile: {
      id: 1,
      username: 'ElonMusk'
    }
  }),
  actions: {
    setNewUsername (newUsername: string) {
      this.currentProfile.username = newUsername
    }
  }
})
