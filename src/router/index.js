import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import DefaultLayout from '@/components/layouts/DefaultLayout';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/examples',
    redirect: '/examples/scoped-slots',
    name: 'Examples',
    component: DefaultLayout,
    children: [
      {
        path: '/examples/scoped-slots',
        name: 'ScopedSlots',
        component: () => import('../views/examples/ScopedSlots.vue'),
      },
      {
        path: '/examples/code-prism',
        name: 'CodePrism',
        component: () => import('../views/examples/CodePrism.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
