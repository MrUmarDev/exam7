<template>
  <div class="flex">
    <v-btn
      v-if="isPrepend"
      :prepend-icon="icon?.length ? icon : ''"
      :color="color"
      :class="class"
      :elevation="elevation"
      :disabled="disabled"
    >
      <slot />
    </v-btn>
    <v-btn
      v-else
      :append-icon="icon?.length ? icon : ''"
      :color="color"
      :class="class"
      :elevation="elevation"
      :disabled="disabled"
    >
      <slot />
    </v-btn>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon?: string;
  color?: string;
  isPrepend?: boolean;
  class?: string;
  elevation?: string | number;
  disabled?: boolean;
}>();
</script>
