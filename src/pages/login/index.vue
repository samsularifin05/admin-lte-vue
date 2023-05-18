<script setup lang="ts">
import { onMounted } from "vue";
import { useTheme } from "../../store";
import { useRouter } from "vue-router";
const themeStore = useTheme();
const router = useRouter();
onMounted(() => {
  const currentTheme = themeStore.getTheme();
  themeStore.setTheme({
    ...currentTheme,
    handleHeader: false,
    handleFooter: false,
    handleSidebar: false
  });
});

const Login = () => {
  //   console.log("Masuk");
  const currentTheme = themeStore.getTheme();
  themeStore.setTheme({
    ...currentTheme,
    handleHeader: true,
    handleFooter: true,
    handleSidebar: true
  });
  router.replace("/dashboard");
};
</script>
<template>
  <div class="login-box container" style="margin-top: 10%">
    <div class="card card-outline card-primary">
      <div class="card-header text-center">
        <div class="h1"><b>ADMIN LTE </b>APP</div>
      </div>
      <div class="card-body">
        <p class="login-box-msg">Sign in to start your session</p>
        <div class="form-group">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label>Username</label>
          <div class="input-group">
            <input
              class="form-control"
              placeholder="Masukan Username"
              type="text"
            />
          </div>
        </div>
        <div class="form-group">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label>Password</label>
          <div class="input-group">
            <input
              class="form-control"
              placeholder="Masukan Password"
              type="password"
            />
          </div>
        </div>
        <div class="form-group mt-4">
          <div class="input-group">
            <button @click="Login()" class="btn btn-primary btn-block">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
