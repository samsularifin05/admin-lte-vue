import { doDecrypt, doEncrypt } from "./encrypt";
import { ref, onMounted, onBeforeUnmount } from "vue";

export const removeWindowClass = (classList: string) => {
  const window = document && document.getElementById("app");
  if (window) {
    window.classList.remove(classList);
  }
};

export const getItem = (nama: string) => {
  return localStorage.getItem(doEncrypt(nama)) === null
    ? []
    : doDecrypt(JSON.parse(localStorage.getItem(doEncrypt(nama)) || "[]"));
};

export const setItem = (nama: string, data: any) => {
  localStorage.setItem(doEncrypt(nama), JSON.stringify(doEncrypt(data)));
};

export const removeItem = (nama: string) => {
  localStorage.removeItem(doEncrypt(nama));
};

export const addWindowClass = (classList: string) => {
  const window = document.getElementById("app");
  if (window) {
    window.classList.add(classList);
  }
};

export const calculateWindowSize = (windowWidth: number) => {
  if (windowWidth >= 1200) {
    return "lg";
  }
  if (windowWidth >= 992) {
    return "md";
  }
  if (windowWidth >= 768) {
    return "sm";
  }
  return "xs";
};

export const useWindowSize = () => {
  const windowSize = ref({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleResize = () => {
    windowSize.value = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  };

  onMounted(() => {
    window.addEventListener("resize", handleResize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
  });

  return windowSize.value;
};
