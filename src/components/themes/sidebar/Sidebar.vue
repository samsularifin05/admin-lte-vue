<script setup lang="ts">
import menu from "./menu";
import SiderbarNavList from "./SidebarNavList.vue";
</script>
<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <a href="/#" class="brand-link text-center">
      <span class="brand-text font-weight-light text-center">ADMIN SAM</span>
    </a>
    <div class="sidebar">
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          data-accordion="false"
        >
          <SiderbarNavList v-for="item in menu" :data="item" />
        </ul>
      </nav>
    </div>
  </aside>
</template>
