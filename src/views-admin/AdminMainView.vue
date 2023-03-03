<script>
import ProductList from "@/components-admin/ProductList.vue";

export default {
  components: {
    ProductList,
  },
  setup() {},
};
</script>

<template>
  <div class="container">
    <RouterLink to="/admin/product/create" class="btn btn-secondary">
      Создать товар
    </RouterLink>
    <ProductList />
  </div>
</template>

<style scoped src="../assets/libs/bootstrap.min.css"></style>
