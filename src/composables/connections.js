import useUserStore from "@/stores/modules/user"

export const useConnections = () => {

    const {userData: connections} = useUserStore()

    return {
        connections
    }
}