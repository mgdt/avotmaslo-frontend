import axios from "axios";
import config from "@/config";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFaqStore = defineStore("faq", () => {
  const faqs = ref([]);

  async function fetchFaqs() {
    const response = await axios.get(`${config.API_URL}/faq`);
    faqs.value = response.data;
  }

  async function fetchFaq(id) {
    const response = await axios.get(`${config.API_URL}/faq/${id}`);
    return response.data;
  }

  async function createFaq(faq) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post(
        `${config.API_URL}/faq`,
        JSON.stringify(faq),
        { headers }
      );
      faqs.value.push(response.data);
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  async function deleteFaq(id) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.delete(`${config.API_URL}/faq/${id}`, {
        headers,
      });
      const filteredFaqs = faqs.value.filter((faq) => faq._id != id);
      faqs.value = filteredFaqs;
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  async function updateFaq(id, faq) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.put(
        `${config.API_URL}/faq/${id}`,
        JSON.stringify(faq),
        { headers }
      );
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  return {
    faqs,
    fetchFaqs,
    fetchFaq,
    createFaq,
    deleteFaq,
    updateFaq,
  };
});
