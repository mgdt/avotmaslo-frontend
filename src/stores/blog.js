import axios from "axios";
import config from "@/config";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBlogStore = defineStore("blog", () => {
  const articles = ref([]);

  async function fetchArticles() {
    const response = await axios.get(`${config.API_URL}/blog`);
    articles.value = response.data;
  }

  async function fetchArticle(id) {
    const response = await axios.get(`${config.API_URL}/blog/${id}`);
    return response.data;
  }

  async function fetchArticleBySlug(slug) {
    const response = await axios.get(`${config.API_URL}/blog/slug/${slug}`);
    return response.data;
  }

  async function createArticle(article) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post(
        `${config.API_URL}/blog`,
        JSON.stringify(article),
        { headers }
      );
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  async function deleteArticle(id) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.delete(`${config.API_URL}/blog/${id}`, {
        headers,
      });
      const filteredArticles = articles.value.filter(
        (article) => article._id != id
      );
      articles.value = filteredArticles;
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  async function updateArticle(id, article) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.put(
        `${config.API_URL}/blog/${id}`,
        JSON.stringify(article),
        { headers }
      );
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  function getImageUrl(article) {
    if (article.imageUrl) {
      return config.API_URL + article.imageUrl;
    }
    return require("@/assets/img/placeholder.jpg");
  }

  return {
    articles,
    fetchArticles,
    fetchArticle,
    fetchArticleBySlug,
    createArticle,
    deleteArticle,
    updateArticle,
    getImageUrl,
  };
});
