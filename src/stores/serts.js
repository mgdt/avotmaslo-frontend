import { ref } from "vue";
import config from "@/config.js";
import axios from "axios";
import { defineStore } from "pinia";

export const useSertsStore = defineStore("serts", () => {
  const serts = ref([]);

  async function fetchSerts() {
    const response = await axios.get(`${config.API_URL}/serts`);
    serts.value = response.data;
  }

  async function getSerts() {
    const response = await axios.get(`${config.API_URL}/serts`);
    return response.data;
  }

  async function fetchSert(id) {
    const response = await axios.get(`${config.API_URL}/serts/${id}`);
    return response.data;
  }

  function updateSertImage(id, imageUrl) {
    const sert = serts.value.find((sert) => sert._id == id);
    sert.imageUrl = imageUrl;
    sert.updated = true;
  }

  async function deleteSert(id) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.delete(`${config.API_URL}/serts/${id}`, {
        headers,
      });
      const filteredSerts = serts.value.filter((sert) => sert._id != id);
      serts.value = filteredSerts;
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  async function createSert(sert) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post(
        `${config.API_URL}/serts`,
        JSON.stringify(sert),
        { headers }
      );
      serts.value.push(response.data);
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  async function updateSert(id, sert) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.put(
        `${config.API_URL}/serts/${id}`,
        JSON.stringify(sert),
        { headers }
      );
      sert.updated = false;
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  return {
    serts,
    fetchSerts,
    deleteSert,
    createSert,
    fetchSert,
    updateSert,
    updateSertImage,
    getSerts,
  };
});
