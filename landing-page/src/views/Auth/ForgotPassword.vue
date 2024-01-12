<template>
  <div
    class="w-screen h-screen bg-gradient-to-tr from-authBgS items-center to-authBgE flex justify-center"
  >
    <div class="card w-[500px] bg-white rounded-lg p-2">
      <div class="flex justify-center mb-[43px] my-5">
        <span class="me-2 w-[6px] bg-[#F8D442]" />
        <h2 class="uppercase text-[25px] font-[700]">{{ t('login.forgot') }}</h2>
      </div>

      <div>
        <h1 class="mx-5 font-bold">{{ t('login.email') }}</h1>
        <v-text-field
          class="mx-5 my-2"
          :type="t('login.email')"
          density="compact"
          :label="t('login.email')"
          variant="outlined"
          v-model="staff.email"
        />
        <h1 class="mx-5 font-bold">{{ t('login.new_password') }}</h1>
        <v-text-field
          class="mx-5 my-2"
          :type="t('login.new_password')"
          density="compact"
          :label="t('login.new_password')"
          variant="outlined"
          v-model="staff.new_password"
        />
        <h1 class="mx-5 font-bold">{{ t('login.confirm_password') }}</h1>
        <v-text-field
          class="mx-5 my-2"
          type="text"
          density="compact"
          :label="t('login.confirm_password')"
          variant="outlined"
          v-model="staff.confirm_password"
        />
      </div>
      <v-button @click="onSubmit" class="uppercase w-100 my-[30px]">{{
        t('login.reset')
      }}</v-button>
    </div>
    <div class="absolute items-end top-5 right-5 text-center">
      <lang-switcher />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

import VButton from '@/components/button.vue';
import langSwitcher from '@/components/langSwitcher.vue';

const { t } = useI18n();

const router = useRouter();

const staff = reactive({
  email: '',
  new_password: '',
  confirm_password: ''
});

function onSubmit() {
  if (!staff.email.length || !staff.new_password.length || !staff.confirm_password) {
    return;
  }
  router.push({ name: 'Login' });
}
</script>
