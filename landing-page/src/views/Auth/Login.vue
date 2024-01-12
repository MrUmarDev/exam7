<template>
  <div
    class="w-screen h-screen relative bg-gradient-to-tr from-authBgS items-center to-authBgE flex justify-center"
  >
    <div class="card w-[500px] bg-white rounded-lg p-5">
      <div class="flex justify-center mb-[43px]">
        <span class="me-2 w-[6px] bg-[#F8D442]" />
        <h2 class="uppercase text-[32px] font-[700]">crud operations</h2>
      </div>
      <div class="text-center mb-[50px]">
        <h3 class="text-[28px] font-[600] uppercase">{{ t('login.sign') }}</h3>
        <p class="text-[14px]">{{ t('login.text') }}</p>
      </div>
      <div>
        <v-text-field
          type="email"
          density="compact"
          :label="t('login.email')"
          :placeholder="t('login.email')"
          variant="outlined"
          v-model="email"
          class="mb-5"
        />
        <v-text-field
          type="password"
          density="compact"
          :label="t('login.password')"
          :placeholder="t('login.password')"
          variant="outlined"
          minlength="8"
          v-model="password"
          class="mb-5"
        />
      </div>
      <v-button @click="onSubmit" :disabled="false" id="myBtn" class="uppercase w-100 my-[30px]">{{
        t('login.sign')
      }}</v-button>
      <div class="flex justify-center">
        <p class="me-2">{{ t('login.forgot') }}</p>
        <router-link
          to="/forgotpassword"
          class="capitalize underline text-[#F8D442] hover:text-blue-600"
          >{{ t('login.reset') }}</router-link
        >
      </div>
    </div>
    <div class="absolute items-end top-5 right-5 text-center">
      <lang-switcher />
    </div>
  </div>
</template>

<script setup>
import { useAuth } from '@/composables/auth';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import LangSwitcher from '@/components/langSwitcher.vue';
import VButton from '@/components/button.vue';

const { login } = useAuth();
const { t } = useI18n();

const email = ref('');
const password = ref('');

async function onSubmit() {
  if (!email.value.length && !password.value.length) return;

  await login({
    email: email.value,
    password: password.value
  });
}
</script>
