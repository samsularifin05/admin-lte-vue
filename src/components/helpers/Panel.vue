<script setup lang="ts">
type Props = {
  title?: string;
};
defineProps<Props>();
</script>
<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>{{ title }}</h1>
          </div>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="container-fluid">
        <slot />
      </div>
    </section>
  </div>
</template>
