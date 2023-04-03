const dashboardRoutes = {
    path: '/dashboard',
    component: () => import('@/views/layouts/DashboardLayout.vue'),
    meta: {
        requiresAuth: true
    },
    children: [
        {
            path: '',
            name: 'dashboard',
            component: () => import('@/views/dashboard/MainPage.vue')
        },
    ]
}

export default dashboardRoutes;