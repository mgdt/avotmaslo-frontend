<script>
import ImageUploader from "@/components-admin/ImageUploader.vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { onUpdated } from "vue";

export default {
  components: {
    ImageUploader,
    QuillEditor,
  },
  props: [
    "product",
    "handleSubmit",
    "updateImage",
    "categories",
    "brands",
    "getCategoryName",
  ],
  setup(props) {
    onUpdated(() => {
      console.log(props.product);
    });
  },
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Название</span>
      </div>
      <input type="text" class="form-control" required v-model="product.name" />
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Цена</span>
      </div>
      <input
        type="text"
        class="form-control"
        required
        v-model="product.price"
      />
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">В наличии</span>
      </div>
      <input
        type="text"
        class="form-control"
        required
        v-model="product.stock"
      />
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Вязкость</span>
      </div>
      <input type="text" class="form-control" v-model="product.viscosity" />
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Тип</span>
      </div>
      <input type="text" class="form-control" required v-model="product.type" />
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Тип двигателя</span>
      </div>
      <input type="text" class="form-control" v-model="product.engineType" />
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Категория т/c</span>
      </div>
      <input type="text" class="form-control" v-model="product.vehicleType" />
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Страна производства</span>
      </div>
      <input type="text" class="form-control" v-model="product.country" />
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Артикул</span>
      </div>
      <input type="text" class="form-control" v-model="product.articul" />
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Серия</span>
      </div>
      <input type="text" class="form-control" v-model="product.series" />
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Классификация API</span>
      </div>
      <input
        type="text"
        class="form-control"
        v-model="product.classification"
      />
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Объем</span>
      </div>
      <input
        type="text"
        class="form-control"
        required
        v-model="product.volume"
      />
      <select class="custom-select" v-model="product.volumeUnits">
        <option value="л.">В литрах</option>
        <option value="кг.">В килограммах</option>
      </select>
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Категория</span>
      </div>
      <select class="custom-select" v-model="product.category">
        <option selected disabled :value="undefined">Выберите</option>
        <option
          v-for="category in categories"
          :key="category._id"
          :value="category"
        >
          {{ getCategoryName(category) }}
        </option>
      </select>
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Бренд</span>
      </div>
      <select class="custom-select" v-model="product.brand">
        <option selected disabled :value="undefined">Выберите</option>
        <option v-for="brand in brands" :key="brand._id" :value="brand">
          {{ brand.name }}
        </option>
      </select>
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id=""
          >Разместить в лучших предложениях</span
        >
      </div>
      <select class="custom-select" v-model="product.isBest">
        <option :value="true">Да</option>
        <option :value="false">Нет</option>
      </select>
    </div>

    <label style="margin-top: 5px; margin-bottom: 10px">Описание:</label>
    <QuillEditor
      v-model:content="product.description"
      contentType="html"
      style="margin-bottom: 20px"
    />

    <ImageUploader
      :imageUrlProp="product.imageUrl"
      @updateImage="updateImage"
    />

    <button class="btn btn-secondary" type="submit">Сохранить</button>
  </form>
</template>

<style scoped src="../assets/libs/bootstrap.min.css"></style>

<style scoped>
.admin .input-group {
  margin-bottom: 10px;
}
</style>
