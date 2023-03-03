<script>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProductsStore } from "@/stores/products";
import { useCategoriesStore } from "@/stores/categories";
import { useBrandsStore } from "@/stores/brands";
import useAdminProduct from "@/composables/useAdminProduct";
import { storeToRefs } from "pinia";
import ProductForm from "@/components-admin/ProductForm.vue";

export default {
  components: {
    ProductForm,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const { product } = useAdminProduct();

    const { updateProduct, fetchProduct } = useProductsStore();
    const { categories } = storeToRefs(useCategoriesStore());
    const { brands } = storeToRefs(useBrandsStore());

    const { fetchCategoreis } = useCategoriesStore();
    const { fetchBrands } = useBrandsStore();

    function updateImage(value) {
      product.value.imageUrl = value;
    }

    function getCategoryName(category) {
      if (category.name) {
        return category.name.replaceAll("<b>", "").replaceAll("</b>", "");
      }
    }

    async function handleSubmit() {
      await updateProduct(route.params.id, product.value);
      router.push({
        name: "adminMain",
      });
    }

    onMounted(async () => {
      await fetchCategoreis();
      await fetchBrands();
      product.value = await fetchProduct(route.params.id);
      console.log(product.value);
    });

    return {
      product,
      handleSubmit,
      updateImage,
      categories,
      getCategoryName,
      brands,
    };
  },
};
</script>

<template>
  <div class="container">
    <h3 style="margin-bottom: 20px">Редактирование товара</h3>
    <ProductForm
      :product="product"
      :handleSubmit="handleSubmit"
      :updateImage="updateImage"
      :categories="categories"
      :brands="brands"
      :getCategoryName="getCategoryName"
    />
  </div>
</template>

<style scoped src="../assets/libs/bootstrap.min.css"></style>

<style scoped>
.admin .input-group {
  margin-bottom: 10px;
}
</style>
