<script>
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      document.body.classList.add("white");
    });
  },
};
</script>

<template>
  <div class="admin">
    <RouterView />
  </div>
</template>

<style scoped src="../assets/libs/bootstrap.min.css"></style>

<style></style>
