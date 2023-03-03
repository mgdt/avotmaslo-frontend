import { ref } from "vue";
import config from "@/config.js";
import axios from "axios";
import { defineStore } from "pinia";

export const useBrandsStore = defineStore("brands", () => {
  const brands = ref([]);

  async function fetchBrands() {
    const response = await axios.get(`${config.API_URL}/brands`);
    brands.value = response.data;
  }

  async function getBrands() {
    const response = await axios.get(`${config.API_URL}/brands`);
    return response.data;
  }

  async function fetchBrand(id) {
    const response = await axios.get(`${config.API_URL}/brands/${id}`);
    return response.data;
  }

  async function deleteBrand(id) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.delete(`${config.API_URL}/brands/${id}`, {
        headers,
      });
      const filteredBrands = brands.value.filter((brand) => brand._id != id);
      brands.value = filteredBrands;
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  async function createBrand(brand) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post(
        `${config.API_URL}/brands`,
        JSON.stringify(brand),
        { headers }
      );
      brands.value.push(response.data);
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  async function updateBrand(id, brand) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.put(
        `${config.API_URL}/brands/${id}`,
        JSON.stringify(brand),
        { headers }
      );
      brand.updated = false;
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  return {
    brands,
    fetchBrands,
    deleteBrand,
    createBrand,
    fetchBrand,
    updateBrand,
    getBrands,
  };
});
