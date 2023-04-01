const authRoutes = {
    path: '/auth',
    component: () => import('@/views/layouts/AuthLayout.vue'),
    name: 'auth',
    meta: {
        requiresAuth: false
    },
    children: [
        {
            path: 'login',
            name: 'login',
            component: () => import('@/views/auth/LoginPage.vue')
        },
        {
            path: 'register',
            name: 'register',
            component: () => import('@/views/auth/RegisterPage.vue')
        },
    ]
}

export default authRoutes;