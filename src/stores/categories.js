import { ref } from "vue";
import config from "@/config.js";
import axios from "axios";
import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", () => {
  const categories = ref([]);

  function updateCategoryImage(id, imageUrl) {
    const category = categories.value.find((category) => category._id == id);
    category.imageUrl = imageUrl;
    category.updated = true;
  }

  async function fetchCategoreis() {
    const response = await axios.get(`${config.API_URL}/categories`);
    categories.value = response.data;
  }

  async function fetchCategory(id) {
    const response = await axios.get(`${config.API_URL}/categories/${id}`);
    return response.data;
  }

  async function deleteCategory(id) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.delete(
        `${config.API_URL}/categories/${id}`,
        { headers }
      );
      const filteredCategoreis = categories.value.filter(
        (category) => category._id != id
      );
      categories.value = filteredCategoreis;
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  async function createCategory(category) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post(
        `${config.API_URL}/categories`,
        JSON.stringify(category),
        { headers }
      );
      categories.value.push(response.data);
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  async function updateCategory(id, category) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.put(
        `${config.API_URL}/categories/${id}`,
        JSON.stringify(category),
        { headers }
      );
      category.updated = false;
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  function getImageUrl(category) {
    if (category.imageUrl) {
      return config.API_URL + category.imageUrl;
    }
    return require("@/assets/img/placeholder.jpg");
  }

  return {
    categories,
    fetchCategoreis,
    getImageUrl,
    deleteCategory,
    createCategory,
    fetchCategory,
    updateCategory,
    updateCategoryImage,
  };
});
