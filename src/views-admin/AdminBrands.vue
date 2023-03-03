<script>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useBrandsStore } from "@/stores/brands.js";

export default {
  setup() {
    const { brands } = storeToRefs(useBrandsStore());
    const { createBrand, fetchBrands, deleteBrand, updateBrand } =
      useBrandsStore();
    const brand = ref({
      name: "",
    });

    async function handleDelete(id) {
      if (confirm("Удалить бренд?")) {
        await deleteBrand(id);
      }
    }

    async function handleCreate(brandVal) {
      await createBrand(brandVal);
      brand.value.name = "";
    }

    onMounted(async () => {
      await fetchBrands();
    });

    return {
      handleCreate,
      brand,
      brands,
      handleDelete,
      updateBrand,
    };
  },
};
</script>

<template>
  <div class="container">
    <h4 style="margin-bottom: 20px">Бренды</h4>
    <div class="brands">
      <form
        v-for="brand in brands"
        :key="brand._id"
        @submit.prevent="updateBrand(brand._id, brand)"
        class="brand"
      >
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">Название</span>
          </div>
          <input
            type="text"
            class="form-control"
            required
            @input="brand.updated = true"
            v-model="brand.name"
          />
          <button
            v-if="brand.updated"
            class="btn btn-secondary"
            style="margin-left: 10px"
            type="submit"
          >
            Сохранить
          </button>
          <button
            type="button"
            style="margin-left: 10px"
            class="btn btn-danger"
            @click="handleDelete(brand._id)"
          >
            Удалить
          </button>
        </div>
      </form>
      <form @submit.prevent="handleCreate(brand)" class="brand">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">Название</span>
          </div>
          <input
            type="text"
            class="form-control"
            required
            v-model="brand.name"
          />
          <button
            style="margin-left: 10px"
            class="btn btn-secondary"
            type="submit"
          >
            Добавить
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped src="../assets/libs/bootstrap.min.css"></style>

<style scoped>
.admin .input-group {
  margin-bottom: 10px;
}
</style>
