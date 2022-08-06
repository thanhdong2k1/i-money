<template>
  <div class="mt-8"></div>
</template>
<script>
import { useRouter } from "vue-router";

import { useLogout } from "@/composables/useLogout";
export default {
  setup() {
    const { error, logout } = useLogout();
    const router = useRouter();

    async function onLogout() {
      await logout();
      if (!error.value) router.push({ name: "Login", params: {} });
    }
    onLogout();
    return { error };
  },
};
</script>
