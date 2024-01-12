<template>
  <v-layout class="!h-screen">
    <sidebar :permanent="permanent" :routes="adminRoutes" />

    <appbar @toggle-sidebar="toggleSidebar" />

    <v-main class="overflow-y-scroll">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref } from 'vue';
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

import Sidebar from '@/components/partials/sidebar.vue';
import Appbar from '@/components/partials/appbar.vue';

const permanent = ref(true);

const adminRoutes = ref([
  {
    text: MT_DASH,
    name: RT_DASH,
    icon: 'mdi-view-dashboard-outline',
    route: '/admin'
  },
  {
    text: MT_ORDER,
    name: RT_ORDER,
    icon: 'mdi-order-bool-ascending-variant',
    route: '/admin/orders'
  },
  {
    text: MT_CREATE,
    name: RT_CREATE,
    icon: 'mdi-format-list-bulleted',
    route: '/admin/orders/create'
  },
  {
    text: MT_PRODUCTS,
    name: RT_PRODUCTS,
    icon: 'mdi-format-list-bulleted',
    route: '/admin/products'
  },
  {
    text: MT_CUSTOMERS,
    name: RT_CUSTOMERS,
    icon: 'mdi-account-tie',
    route: '/admin/customers'
  },
  {
    text: MT_CUSTOMERCREATE,
    name: RT_CUSTOMERCREATE,
    icon: 'mdi-account-tie',
    route: '/admin/customers/create'
  },
  {
    text: MT_EXPENSES,
    name: RT_EXPENSES,
    icon: 'mdi-cash-multiple',
    route: '/admin/expenses'
  },
  {
    text: MT_INVENTORY,
    name: RT_INVENTORY,
    icon: 'mdi-list-status',
    route: '/admin/inventory'
  },
  {
    text: MT_REPORTSIND,
    name: RT_REPORTSIND,
    icon: 'mdi-chart-line',
    route: '/admin/reports',
    children: [
      {
        text: MT_REPORTSINT,
        name: RT_REPORTSINT,
        icon: 'mdi-cash-multiple',
        route: '/admin/reports/intern'
      },
      {
        text: MT_REPORTSEXT,
        name: RT_REPORTSEXT,
        icon: 'mdi-chart-pie',
        route: '/admin/reports/extern'
      }
    ]
  }
]);

const toggleSidebar = () => {
  permanent.value = !permanent.value;
};
</script>
