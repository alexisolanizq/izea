import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
  state: () => ({
    isAuth: true
  })
})

export default useMainStore