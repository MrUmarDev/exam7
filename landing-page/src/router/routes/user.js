import { USER } from '@/constants/layouts';
import {
  RT_HOME,
  RT_CART,
  RT_ABOUT,
  MT_HOME,
  MT_CART,
  MT_ABOUT
} from '@/constants/routes/user';

export default [
  {
    path: '/',
    name: RT_HOME,
    component: () => import('@/views/User/Home.vue'),
    meta: {
      layout: USER,
      title: MT_HOME
    }
  },
  {
    path: '/cart',
    name: RT_CART,
    component: () => import('@/views/User/Cart.vue'),
    meta: {
      title: MT_CART,
      layout: USER
    }
  },
  {
    path: '/about',
    name: RT_ABOUT,
    component: () => import('@/views/User/About.vue'),
    meta: {
      title: MT_ABOUT,
      layout: USER
    }
  }
];

// complete
