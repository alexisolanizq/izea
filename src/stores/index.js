import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
  state: () => ({
    isAuth: false
  }),
  actions:{
    changeIsAuth(){
      this.isAuth = !this.isAuth
    }
  },
  persist: true
})

export default useMainStore
