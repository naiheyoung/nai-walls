import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import(''),
	},
	{
		path: '/slef',
		component: () => import('@/components/MySelf.vue'),
	},
	{
		path: '/anime',
		component: () => import('@/components/Anime.vue'),
	},
	{
		path: '/yuanshen',
		component: () => import('@/components/YuanShen.vue'),
	},
	{
		path: '/wz',
		component: () => import('@/components/WangZhe.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
