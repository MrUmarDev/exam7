import { ADMIN } from '@/constants/layouts';

import {
  RT_DASH,
  RT_ORDER,
  RT_CREATE,
  RT_PRODUCTS,
  RT_CUSTOMERS,
  RT_CUSTOMERCREATE,
  RT_EXPENSES,
  RT_INVENTORY,
  RT_REPORTSIND,
  RT_REPORTSINT,
  RT_REPORTSEXT,
  MT_DASH,
  MT_ORDER,
  MT_CREATE,
  MT_PRODUCTS,
  MT_CUSTOMERS,
  MT_CUSTOMERCREATE,
  MT_EXPENSES,
  MT_INVENTORY,
  MT_REPORTSIND,
  MT_REPORTSINT,
  MT_REPORTSEXT
} from '@/constants/routes/admin';

export default [
  {
    path: '/admin',
    name: RT_DASH,
    component: () => import('@/views/Admin/Dashboard.vue'),
    meta: {
      layout: ADMIN,
      title: MT_DASH
    }
  },
  {
    path: '/admin/orders',
    name: RT_ORDER,
    component: () => import('@/views/Admin/orders/Index.vue'),
    meta: {
      layout: ADMIN,
      title: MT_ORDER
    }
  },
  {
    path: '/admin/orders/create',
    name: RT_CREATE,
    component: () => import('@/views/Admin/orders/Create.vue'),
    meta: {
      layout: ADMIN,
      title: MT_CREATE
    }
  },
  {
    path: '/admin/products',
    name: RT_PRODUCTS,
    component: () => import('@/views/Admin/products/Index.vue'),
    meta: {
      layout: ADMIN,
      title: MT_PRODUCTS
    }
  },
  {
    path: '/admin/customers',
    name: RT_CUSTOMERS,
    component: () => import('@/views/Admin/customers/Index.vue'),
    meta: {
      layout: ADMIN,
      title: MT_CUSTOMERS
    }
  },
  {
    path: '/admin/customers/create',
    name: RT_CUSTOMERCREATE,
    component: () => import('@/views/Admin/customers/Create.vue'),
    meta: {
      layout: ADMIN,
      title: MT_CUSTOMERCREATE
    }
  },
  {
    path: '/admin/expenses',
    name: RT_EXPENSES,
    component: () => import('@/views/Admin/expenses/Index.vue'),
    meta: {
      layout: ADMIN,
      title: MT_EXPENSES
    }
  },
  {
    path: '/admin/inventory',
    name: RT_INVENTORY,
    component: () => import('@/views/Admin/inventory/Index.vue'),
    meta: {
      layout: ADMIN,
      title: MT_INVENTORY
    }
  },
  {
    path: '/admin/reports',
    name: RT_REPORTSIND,
    component: () => import('@/views/Admin/reports/Index.vue'),
    meta: {
      title: MT_REPORTSIND,
      layout: ADMIN
    },
    children: [
      {
        path: 'intern',
        name: RT_REPORTSINT,
        component: () => import('@/views/Admin/reports/Intern.vue'),
        meta: {
          title: MT_REPORTSINT,
          layout: ADMIN
        }
      },
      {
        path: 'extern',
        name: RT_REPORTSEXT,
        component: () => import('@/views/Admin/reports/Extern.vue'),
        meta: {
          title: MT_REPORTSEXT,
          layout: ADMIN
        }
      }
    ]
  }
];
