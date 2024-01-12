<template>
  <div class="flex justify-center items-center p-5 gap-4">
    <h2 class="text-center text-2xl">{{ t('empty') }}</h2>
    <i class="fa-solid fa-face-frown-open text-yellow-500 text-2xl"></i>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
