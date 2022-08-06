<template>
  <!-- Start: Info -->
  <div class="row" v-if="user">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVbbqE6r8K7J_DIPF96hXx1VcQiRwU942wg&usqp=CAU"
            class="w-full h-full object-cover"
            size="xs"
            alt="User's Profile Avatar"
          />
        </div>
        <div class="font-bold text-2xl text-primay mt-3">
          {{ user.displayName }}
        </div>
        <p class="font-semibold text-gray-400 mt-1">{{ user.email }}</p>
      </div>
    </div>
  </div>
  <!-- Start: Menu -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primay">General</h3>
        </div>
        <div class="col-span-1">
          <ul class="font-bold text-xl text-primay">
            <li
              class="last:text-red"
              v-for="(profileOption, index) in profileOptions"
              :key="index"
            >
              <router-link
                class="flex justify-between items-center py-3"
                :to="profileOption.route"
              >
                <div class="flex items-center text-left">
                  <i class="t2ico text-2xl" :class="profileOption.icon"></i>
                  <h5 class="font-semibold ml-3">{{ profileOption.name }}</h5>
                </div>
                <div class="flex items-center text-right">
                  <i class="t2ico t2ico-arrow-right text-2xl"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import { PUBLIC_OPTIONS } from "@/constants";
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();

    const profileOptions = reactive(PUBLIC_OPTIONS);
    return { profileOptions, user };
  },
};
</script>
