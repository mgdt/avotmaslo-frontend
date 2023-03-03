<script>
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";
import MainLayout from "./layouts/MainLayout.vue";
import AdminLayout from "./layouts/AdminLayout.vue";
import AdminLoginLayout from "./layouts/AdminLoginLayout.vue";

import "@/assets/fonts/gilroy/stylesheet.css";

export default {
  components: {
    RouterView,
    MainLayout,
    AdminLayout,
    AdminLoginLayout,
  },
  setup() {
    const layout = computed(() => {
      const route = useRoute();
      return route.meta.layout + "-layout";
    });

    return {
      layout,
    };
  },
};
</script>

<template>
  <component :is="layout"></component>
</template>
