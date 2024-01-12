<template>
  <v-app-bar :elevation="1" color="#fdfdfd" class="py-2 flex items-center justify-between">
    <v-app-bar-nav-icon @click="onSidebarToggle" class="me-auto"></v-app-bar-nav-icon>
    <v-btn icon>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
    <langSwitcher />
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import langSwitcher from '@/components/langSwitcher.vue';

const permanent = ref<boolean>(false);

const emit = defineEmits<{
  (e: 'toggleSidebar', permanent: boolean): void;
}>();

function onSidebarToggle(): void {
  permanent.value = !permanent.value;
  emit('toggleSidebar', permanent.value);
}
</script>
