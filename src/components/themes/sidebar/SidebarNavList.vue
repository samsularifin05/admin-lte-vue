<script setup lang="ts">
import { ref } from "vue";
import { Menu } from "./menu";
import SiderbarNavList from "./SidebarNavList.vue";

interface Props {
  data: Menu;
  submenu?: any;
  clicked?: any;
  active?: any;
  handleExpand?: any;
  expand?: any;
  navheader?: any;
}

defineProps<Props>();

const isMenuExtended = ref(false);
const isExpandable = ref(true);

const handleMainMenuAction = () => {
  if (isExpandable.value) {
    toggleMenu();
    return;
  }
};

const toggleMenu = () => {
  isMenuExtended.value = !isMenuExtended.value;
};
</script>

<template>
  <li
    :class="{
      'nav-item menu-open': isMenuExtended,
      'nav-item': !isMenuExtended
    }"
  >
    <a
      class="nav-link"
      v-if="data.children?.length"
      @click="handleMainMenuAction"
      style="cursor: pointer"
    >
      <i v-if="data.icon" :class="data.icon"></i>
      <p v-if="data.title">
        {{ data.title }}
        <i class="right fas fa-angle-left" />
      </p>
    </a>
    <router-link :to="(data.path as any)" class="nav-link" v-else>
      <i :class="data.icon"></i>
      <i class="far fa-circle nav-icon" v-if="submenu" />
      <p>{{ data.title }}</p>
    </router-link>

    <ul className="nav nav-treeview" v-if="data.children?.length">
      <SiderbarNavList
        v-for="item in data.children"
        :data="item"
        submenu="active"
      />
    </ul>
  </li>
</template>
