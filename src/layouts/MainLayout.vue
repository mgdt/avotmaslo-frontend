<script>
import PopupCallback from "@/components/PopupCallback.vue";
import { useCartStore } from "@/stores/cart";
import { onMounted } from "vue";

export default {
  components: {
    PopupCallback,
  },
  setup() {
    const { loadCart } = useCartStore();

    onMounted(() => {
      loadCart();
    });
  },
};
</script>

<template>
  <RouterView />
  <PopupCallback />
</template>

<style>
@import "@/assets/css/style.css";
</style>
