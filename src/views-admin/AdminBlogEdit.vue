<script>
import useAdminArticle from "@/composables/useAdminArticle";
import { useBlogStore } from "@/stores/blog";
import { useRoute, useRouter } from "vue-router";
import ArticleForm from "@/components-admin/ArticleForm.vue";
import { onMounted } from "vue";

export default {
  components: {
    ArticleForm,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const { article } = useAdminArticle();
    const blogStore = useBlogStore();

    async function handleSubmit() {
      await blogStore.updateArticle(route.params.id, article.value);
      router.push({
        name: "adminBlog",
      });
    }

    function updateImage(value) {
      article.value.imageUrl = value;
    }

    onMounted(async () => {
      article.value = await blogStore.fetchArticle(route.params.id);
    });

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
    <h3 style="margin-bottom: 20px">Редактирование статьи</h3>
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
