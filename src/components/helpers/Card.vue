<script setup lang="ts">
type Props = {
  title: string;
  footer?: string;
};
defineProps<Props>();
</script>
<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">{{ title }}</h3>
    </div>
    <div class="card-body">
      <slot />
    </div>

    <div v-if="footer" class="card-footer">{{ footer }}</div>
  </div>
</template>
