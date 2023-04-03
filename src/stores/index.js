import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
  state: () => ({
    isAuth: false
  })
})

export default useMainStore
