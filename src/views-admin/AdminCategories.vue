<script>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useCategoriesStore } from "@/stores/categories.js";
import ImageUploader from "@/components-admin/ImageUploader.vue";

export default {
  components: {
    ImageUploader,
  },
  setup() {
    const { categories } = storeToRefs(useCategoriesStore());
    const {
      createCategory,
      fetchCategoreis,
      updateCategoryImage,
      updateCategory,
      deleteCategory,
    } = useCategoriesStore();

    const newCategory = ref({
      imageUrl: "",
      name: "",
      slug: "",
    });

    function updateImage(value, extraInfo) {
      if (extraInfo.id == "new") {
        newCategory.value.imageUrl = value;
        return;
      }
      updateCategoryImage(extraInfo.id, value);
    }

    async function handleCreate() {
      await createCategory(newCategory.value);
      newCategory.value.imageUrl = "";
      newCategory.value.name = "";
    }

    async function handleUpdate(id, category) {
      await updateCategory(id, category);
      alert("Успешно");
    }

    async function handleDelete(id) {
      if (confirm("Удалить категорию?")) {
        await deleteCategory(id);
      }
    }

    onMounted(async () => {
      await fetchCategoreis();
    });

    return {
      categories,
      updateImage,
      newCategory,
      handleCreate,
      handleUpdate,
      handleDelete,
    };
  },
};
</script>

<template>
  <div class="container">
    <h4 style="margin-bottom: 20px">Категории</h4>
    <div class="categories">
      <form
        @submit.prevent="handleUpdate(category._id, category)"
        class="category"
        v-for="category in categories"
        :key="category._id"
      >
        <ImageUploader
          :extraInfo="{ id: category._id }"
          :imageMaxWidth="500"
          :wrapSize="500"
          @updateImage="updateImage"
          :imageUrlProp="category.imageUrl"
        />
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">ID</span>
          </div>
          <input
            @input="category.updated = true"
            placeholder="Без пробелов на англ. языке"
            class="form-control"
            required
            v-model="category.slug"
          />
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">Название</span>
          </div>
          <textarea
            @input="category.updated = true"
            class="form-control"
            required
            v-model="category.name"
          ></textarea>
        </div>
        <button
          type="submit"
          v-if="category.updated"
          style="margin-right: 10px"
          class="btn"
          :class="{
            'btn-secondary': category.updated,
          }"
        >
          Сохранить
        </button>
        <button
          type="button"
          @click="handleDelete(category._id)"
          class="btn btn-danger"
        >
          Удалить
        </button>
      </form>
      <form class="category" @submit.prevent="handleCreate">
        <ImageUploader
          :imageUrlProp="newCategory.imageUrl"
          :imageMaxWidth="500"
          :wrapSize="500"
          :extraInfo="{ id: 'new' }"
          @updateImage="updateImage"
        />
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">ID</span>
          </div>
          <input
            placeholder="Без пробелов на англ. языке"
            class="form-control"
            required
            v-model="newCategory.slug"
          />
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">Название</span>
          </div>
          <textarea
            class="form-control"
            required
            v-model="newCategory.name"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-secondary">Добавить</button>
      </form>
    </div>
  </div>
</template>

<style scoped src="../assets/libs/bootstrap.min.css"></style>

<style scoped>
.admin .input-group {
  margin-bottom: 10px;
}
.category {
  width: 500px;
}
.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 50px;
}
</style>
