import { ref, onBeforeMount } from 'vue'
import useMainStore from '../stores'
export const useNavbar = () => {
  const navList = ref([
    {
      id: 1,
      name: 'Creadores',
      to: '/'
    },
    {
      id: 2,
      name: 'Marcas',
      to: '/'
    },
    {
      id: 3,
      name: 'Recursos',
      to: '/',
      items: [
        {
          id: 1,
          name: 'Socios'
        }
      ]
    }
  ])
  const topOfPage = ref(false)
  const dropdownToggle = ref(false)

  const { isAuth } = useMainStore()

  const handleScroll = () => {
    if (window.scrollY >= 40) {
      topOfPage.value = true
    } else {
      topOfPage.value = false
    }
  }

  onBeforeMount(() => window.addEventListener('scroll', handleScroll))

  return {
    isAuth,
    navList,
    topOfPage,
    dropdownToggle
  }
}
