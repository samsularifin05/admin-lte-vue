<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <ul class="navbar-nav">
      <li class="nav-item">
        <button
          class="nav-link"
          data-widget="pushmenu"
          aria-label="Menu Hide Bar"
          @click="toggleMenu"
          role="button"
        >
          <i class="fas fa-bars" />
        </button>
      </li>
    </ul>

    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <div class="nav-link dropdown-toggle user-action">
          <img
            src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg"
            class="avatarProfile"
            alt="Avatar"
          />
          <b class="caret" />
          <div class="dropdown-menu">
            <button type="button" class="dropdown-item">
              <i class="fa fa-user" /> Profile
            </button>
            <button type="button" class="dropdown-item">
              <i class="nav-icon fas fa-arrow-right-from-bracket" />{" "} Logout
            </button>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { useTheme } from "../../store";

export default {
  setup() {
    const themeStore = useTheme();

    const toggleMenu = () => {
      const currentTheme = themeStore.getTheme();
      themeStore.setTheme({
        ...currentTheme,
        menuSidebarCollapsed: !currentTheme.menuSidebarCollapsed
      });
    };
    return {
      toggleMenu
    };
  }
};
</script>
