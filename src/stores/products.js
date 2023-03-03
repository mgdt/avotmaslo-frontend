import { ref, watch, computed } from "vue";
import config from "@/config.js";
import axios from "axios";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", () => {
  const products = ref([]);
  const sort = ref("_id");
  const sortDir = ref("-1");
  const filtersBody = ref({});
  const filterCategory = ref("");

  async function fetchMinMaxValues() {
    const response = await axios.get(`${config.API_URL}/products/minMaxValues`);
    return response.data;
  }

  async function fetchProducts() {
    let response;

    if (filterCategory.value) {
      filtersBody.value.category = filterCategory.value;
    }

    if (Object.keys(filtersBody.value).length > 0) {
      const params = new URLSearchParams(filtersBody.value);
      response = await axios.get(
        `${config.API_URL}/products?sort=${sort.value}&sortDir=${
          sortDir.value
        }&${params.toString()}`
      );
    } else {
      response = await axios.get(
        `${config.API_URL}/products?sort=${sort.value}&sortDir=${sortDir.value}`
      );
    }
    products.value = response.data;
  }

  async function fetchProductsByIds(query) {
    const response = await axios.get(`${config.API_URL}/products?${query}`);
    return response.data;
  }

  async function fetchProduct(id) {
    const response = await axios.get(`${config.API_URL}/products/${id}`);
    return response.data;
  }

  async function fetchBestProducts() {
    const response = await axios.get(`${config.API_URL}/products?isBest=true`);
    return response.data;
  }

  async function fetchFilterFields() {
    const response = await axios.get(`${config.API_URL}/products/filterFields`);
    return response.data;
  }

  async function fetchDeliveryText() {
    const response = await axios.get(`${config.API_URL}/products/deliveryText`);
    return response.data;
  }

  async function deleteProduct(id) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.delete(`${config.API_URL}/products/${id}`, {
        headers,
      });
      const filteredProducts = products.value.filter(
        (product) => product._id != id
      );
      products.value = filteredProducts;
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  async function createProduct(product) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post(
        `${config.API_URL}/products`,
        JSON.stringify(product),
        { headers }
      );
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  async function updateProduct(id, product) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.put(
        `${config.API_URL}/products/${id}`,
        JSON.stringify(product),
        { headers }
      );
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  async function updateDeliveryText(text) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.put(
        `${config.API_URL}/products/deliveryText`,
        JSON.stringify({ text }),
        { headers }
      );
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  function getImageUrl(product) {
    if (product.imageUrl) {
      return config.API_URL + product.imageUrl;
    }
    return require("@/assets/img/placeholder.jpg");
  }

  return {
    products,
    filterCategory,
    sort,
    sortDir,
    filtersBody,
    fetchProducts,
    getImageUrl,
    deleteProduct,
    createProduct,
    fetchProduct,
    updateProduct,
    updateDeliveryText,
    fetchMinMaxValues,
    fetchFilterFields,
    fetchDeliveryText,
    fetchProductsByIds,
    fetchBestProducts,
  };
});
