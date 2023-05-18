<script setup lang="ts">
// import { onMounted } from "vue";
import {
  Header,
  Sidebar,
  Footer,
  Content,
  removeWindowClass,
  calculateWindowSize,
  addWindowClass
} from "./components";

import { useTheme } from "./store";
import { watch } from "vue";

const store = useTheme();

let screenSize = calculateWindowSize(window.innerWidth);
watch([() => store.getTheme().menuSidebarCollapsed, () => screenSize], () => {
  removeWindowClass("sidebar-closed");
  removeWindowClass("sidebar-collapse");
  removeWindowClass("sidebar-open");
  if (store.getTheme().menuSidebarCollapsed && screenSize === "lg") {
    addWindowClass("sidebar-collapse");
  } else if (store.getTheme().menuSidebarCollapsed && screenSize === "xs") {
    addWindowClass("sidebar-open");
  } else if (!store.getTheme().menuSidebarCollapsed && screenSize !== "lg") {
    addWindowClass("sidebar-closed");
    addWindowClass("sidebar-collapse");
  }
});
</script>

<template>
  <Header v-if="store.getTheme().handleHeader" />
  <Sidebar v-if="store.getTheme().handleSidebar" />
  <Content v-if="store.getTheme().handleContent" />
  <Footer v-if="store.getTheme().handleFooter" />
</template>
