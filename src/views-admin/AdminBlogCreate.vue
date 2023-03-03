<script>
import useAdminArticle from "@/composables/useAdminArticle";
import { useBlogStore } from "@/stores/blog";
import { useRouter } from "vue-router";
import ArticleForm from "@/components-admin/ArticleForm.vue";

export default {
  components: {
    ArticleForm,
  },
  setup() {
    const router = useRouter();
    const { article } = useAdminArticle();
    const blogStore = useBlogStore();

    async function handleSubmit() {
      await blogStore.createArticle(article.value);
      router.push({
        name: "adminBlog",
      });
    }

    function updateImage(value) {
      article.value.imageUrl = value;
    }

    return {
      article,
      handleSubmit,
      updateImage,
    };
  },
};
</script>

<template>
  <div class="container">
    <h3 style="margin-bottom: 20px">Добавление статьи</h3>
    <ArticleForm
      :handleSubmit="handleSubmit"
      :updateImage="updateImage"
      :article="article"
    />
  </div>
</template>

<style scoped src="../assets/libs/bootstrap.min.css"></style>

<style scoped>
.admin .input-group {
  margin-bottom: 10px;
}
</style>
