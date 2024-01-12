import { AUTH } from '@/constants/layouts';
import { RT_LOGIN, MT_LOGIN, RT_FORGOT, MT_FORGOT } from '@/constants/routes/auth';
export default [
  {
    path: '/forgotpassword',
    name: RT_FORGOT,
    component: () => import('@/views/Auth/ForgotPassword.vue'),
    meta: {
      layout: AUTH,
      title: MT_FORGOT
    }
  },
  {
    path: '/login',
    name: RT_LOGIN,
    component: () => import('@/views/Auth/Login.vue'),
    meta: {
      layout: AUTH,
      title: MT_LOGIN
    }
  }
];
