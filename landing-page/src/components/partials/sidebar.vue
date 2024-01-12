<script setup lang="ts">
import VButton from '../button.vue';
import { useI18n } from 'vue-i18n';
import { useAuthStore } from '@/store/auth';

const store = useAuthStore();

const handleLogout = () => {
  store.clearUser();
};
const { t } = useI18n();
type routeProp = {
  text: string;
  name: string;
  icon: string;
};
defineProps<{
  permanent: boolean;
  routes: routeProp[];
}>();
</script>

<template>
  <v-navigation-drawer color="grey-lighten-2" :permanent="permanent" class="text-left">
    <div class="px-5">
      <div class="flex justify-center mb-[200px] mt-[18px]">
        <span class="me-2 w-[6px] bg-[#F8D442]" />
        <h2 class="uppercase text-[20px] font-[700]">crud operations</h2>
      </div>
    </div>
    <div>
      <router-link
        v-for="(link, index) in routes"
        :key="index"
        :to="{ name: link.name }"
        class="block w-5/6 transition-all text-center text-[18px] rounded-md mx-auto mb-3 p-2"
      >
        <span class="fa-solid me-3" :class="link.icon" />
        <span>{{ t(`${link.text}`) }}</span>
      </router-link>
    </div>
    <v-button
      class="w-3/6 flex justify-center mx-auto p-2 my-10"
      prepend-icon
      icon="mdi-logout"
      color="grey-lighten-2"
      @click="handleLogout"
      >{{ t('login.loguot') }}</v-button
    >
  </v-navigation-drawer>
</template>

<style scoped>
.router-link-exact-active {
  background-color: #feaf00;
}
</style>
