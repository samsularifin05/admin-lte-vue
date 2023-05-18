import { defineStore } from "pinia";
type Props = {
  handleSidebar: boolean;
  handleContent: boolean;
  handleFooter: boolean;
  handleHeader: boolean;
  menuSidebarCollapsed: boolean;
};
export const useTheme = defineStore("theme", {
  state: () => {
    return {
      themes: {
        handleSidebar: true,
        handleContent: true,
        handleFooter: true,
        handleHeader: true,
        menuSidebarCollapsed: false
      }
    };
  },
  getters: {
    getTheme: (state) => () => {
      return state.themes;
    }
  },
  actions: {
    async setTheme(value: Props) {
      this.themes = value;
    }
  }
});
