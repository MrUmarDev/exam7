<template>
  <div class="relative w-[100px]">
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <span
          id="lang"
          class="cursor-pointer uppercase p-3 rounded-full hover:bg-gray-100 transition-all"
          v-bind="props"
          >{{ currentLang }}</span
        >
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in langs" :key="i" @click="onLangChange(item)">
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { updateMeta } from '@/router';

type langObj = {
  text: string;
  locale: string;
};

const currentLang = localStorage.getItem('lang') || 'uz';
const showList = ref<boolean>(false);
const { locale } = useI18n();
const route = useRoute();
const langs = ref<langObj[]>([
  {
    text: "O'zbek",
    locale: 'uz'
  },
  {
    text: 'English',
    locale: 'en'
  },
  {
    text: 'Russkiy',
    locale: 'ru'
  }
]);
function onLangChange(lang: langObj) {
  showList.value = false;
  locale.value = lang.locale;
  localStorage.setItem('lang', lang.locale);
  document.getElementById('lang').textContent = lang.locale;
  updateMeta(route?.meta?.title);
}
</script>
