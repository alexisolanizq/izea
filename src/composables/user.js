import { ref, watch } from 'vue'

export const useUser = () => {
  const isEnable = ref(false)
  const isReadyForm = ref(false)
  const loginForm = ref({
    email: '',
    password: ''
  })
  
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
  
  watch(loginForm.value, () => {

    if (loginForm.value.email.match(emailRegex)) {
      isEnable.value = true
    } else {
      isEnable.value = false
    }
    if (loginForm.value.email.length > 0 && loginForm.value.password.length > 6) {
      isReadyForm.value = true
    } else {
      isReadyForm.value = false
    }
  })

  return {
    loginForm,
    isEnable,
    isReadyForm
  }
}
