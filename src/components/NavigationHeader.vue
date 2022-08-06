<template>
  <header id="header" class="py-8">
    <div class="container mx-auto px-8 h-full">
      <div class="flex justify-between h-full items-center">
        <div class="flex items-center">
          <div
            v-if="!meta.leading"
            class="w-10 h-10 overflow-hidden rounded-full"
          >
            <img
              class="w-full h-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVbbqE6r8K7J_DIPF96hXx1VcQiRwU942wg&usqp=CAU"
              size="xs"
              alt="User's Profile Avatar"
            />
          </div>
          <h1 class="text-xl font-bold text-dark ml-2">{{ meta.text }}</h1>
        </div>
        <div class="flex">
          <ul>
            <li>
              <i class="t2ico t2ico-notification text-2xl"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    // const navItems = reactive([
    //   {
    //     icon: "t2ico-category",
    //     text: "Home",
    //     name: "Home",
    //   },
    //   {
    //     icon: "t2ico-chart",
    //     text: "Report",
    //     name: "Home",
    //   },
    //   {
    //     icon: "t2ico-presentation",
    //     text: "Budget",
    //     name: "Home",
    //   },
    //   {
    //     icon: "t2ico-profile",
    //     text: "Profile",
    //     name: "Profile",
    //   },
    // ]);
    return { meta: computed(() => route.meta) };
  },
};
</script>
<style lang="css" scoped></style>
