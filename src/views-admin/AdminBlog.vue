<script>
import { useBlogStore } from "@/stores/blog";
import { onMounted } from "vue";

export default {
  setup() {
    const blogStore = useBlogStore();

    onMounted(async () => {
      await blogStore.fetchArticles();
    });

    function handleDelete(id) {
      if (confirm("Удалить статью?")) {
        blogStore.deleteArticle(id);
      }
    }

    return {
      blogStore,
      handleDelete,
    };
  },
};
</script>

<template>
  <div class="container">
    <h3>Блог</h3>
    <RouterLink
      to="/admin/blog/create"
      class="btn btn-secondary"
      style="margin-top: 20px; margin-bottom: 40px"
    >
      Создать статью
    </RouterLink>
    <table class="table">
      <tbody>
        <tr v-for="article in blogStore.articles" :key="article._id">
          <td>{{ article.title }}</td>
          <td>
            <RouterLink
              class="btn btn-secondary"
              :to="`/admin/blog/edit/${article._id}`"
              >Редактировать</RouterLink
            >
          </td>
          <td>
            <button @click="handleDelete(article._id)" class="btn btn-danger">
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped src="../assets/libs/bootstrap.min.css"></style>
