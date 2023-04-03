import { defineStore } from 'pinia'
import axiosInstance from '../../../plugins/axios'
import { toast } from 'vue3-toastify'
import useMainStore from '@/stores'
import router from '../../../router'

const mainStore = useMainStore()

const useUserStore = defineStore('user', {
  state: () => ({
    userData: {},
    accessToken: ''
  }),
  getters: {},
  actions: {
    async login(bodyForm) {
      const url = '/v1/accounts/login/'
      try {
        const { data } = await axiosInstance.post(url, bodyForm, {
          headers: {
            'content-type': 'application/json;charset=UTF-8'
          }
        })
        
        mainStore.changeIsAuth()
        this.userData = data.response.user
        this.accessToken = data.response.access_token

        toast.success('Bienvenido', {
          position: toast.POSITION.TOP_RIGHT
        })


        
        router.push('/')
        
      } catch (error) {
        if (error.response) {
          toast.error(`${error?.response?.data?.response?.message}`, {
            position: toast.POSITION.TOP_RIGHT
          })
        }
        return error
      }
    },

    logout() {
      mainStore.isAuth = false,
      this.userData = {}
      this.accessToken = null
      router.push('/')
    }
  },
  persist: true
})

export default useUserStore