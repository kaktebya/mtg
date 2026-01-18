const myRoutes = [
	{ path: '/', component: () => import('../pages/homePage.vue') },
	{ path: '/single-card', component: () => import('../pages/singleCard.vue') },
]

export default myRoutes
