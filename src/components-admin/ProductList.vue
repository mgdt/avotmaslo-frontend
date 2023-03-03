<script>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/stores/products";

export default {
  setup() {
    const { fetchProducts, getImageUrl, deleteProduct } = useProductsStore();
    const { products } = storeToRefs(useProductsStore());

    function handleDelete(id) {
      if (confirm("Удалить товар?")) {
        deleteProduct(id);
      }
    }
    const getProductCategory = (product) => {
      if (product.category) {
        return product.category.name
          .replaceAll("<b>", "")
          .replaceAll("</b>", "")
          .replaceAll("\n", "<br>");
      }
      return "Нет информации";
    };

    function getFieldName(field) {
      if (field && field.name) {
        return field.name;
      }
      return "Нет информации";
    }

    onMounted(async () => {
      await fetchProducts();
    });

    return {
      products,
      getImageUrl,
      handleDelete,
      getProductCategory,
      getFieldName,
    };
  },
};
</script>

<template>
  <div class="admin-products">
    <h3>Список товаров</h3>
    <div class="admin-product" v-for="product in products" :key="product._id">
      <img :src="getImageUrl(product)" class="admin-product__image" />
      <div class="admin-product__info">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Название</th>
              <th scope="col">Цена</th>
              <th scope="col">Объем</th>
              <th scope="col">Категория</th>
              <th scope="col">Бренд</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ product.name }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.volume }} {{ product.volumeUnits }}</td>
              <td v-html="getProductCategory(product)"></td>
              <td>{{ getFieldName(product.brand) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="admin-product__btns">
        <RouterLink
          :to="'/admin/product/edit/' + product._id"
          class="btn btn-secondary"
          >Редактировать</RouterLink
        >
        <button @click="handleDelete(product._id)" class="btn btn-danger">
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
th {
  border-top: none !important;
}
.admin-products__head-image {
  width: 50px;
}
.admin-products {
  margin-top: 40px;
}
.admin-product {
  padding: 15px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;
  display: flex;
  gap: 20px;
}
.admin-product__info {
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 20px;
}
.admin-product__info div {
  text-align: center;
}
.admin-product__image {
  width: 50px;
  object-fit: cover;
}
.admin-product__btns {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
}
.admin-products__head {
  display: flex;
  border-bottom: 1px solid gray;
}
</style>

<style scoped src="../assets/libs/bootstrap.min.css"></style>
