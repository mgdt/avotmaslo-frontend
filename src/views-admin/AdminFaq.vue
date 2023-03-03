<script setup>
import { useFaqStore } from "@/stores/faq.js";
import { ref, onMounted } from "vue";

const newFaq = ref({
  title: "",
  content: "",
});
const faqStore = useFaqStore();

async function handleAdd() {
  await faqStore.createFaq(newFaq.value);
  newFaq.value.title = "";
  newFaq.value.content = "";
}

function handleUpdate(id, faq) {
  faq.updated = false;
  faqStore.updateFaq(id, faq);
}

function handleDelete(id) {
  if (confirm("Удалить вопрос?")) {
    faqStore.deleteFaq(id);
  }
}

onMounted(async () => {
  await faqStore.fetchFaqs();
});
</script>

<template>
  <div class="container">
    <h3>Часто задаваемые вопросы</h3>
    <div class="faqs">
      <form
        @submit.prevent="handleUpdate(faq._id, faq)"
        class="faq"
        v-for="faq in faqStore.faqs"
        :key="faq._id"
      >
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">Вопрос</span>
          </div>
          <input
            class="form-control"
            @input="faq.updated = true"
            required
            v-model="faq.title"
          />
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">Ответ</span>
          </div>
          <textarea
            rows="3"
            class="form-control"
            required
            @input="faq.updated = true"
            v-model="faq.content"
          ></textarea>
        </div>
        <button
          style="margin-right: 10px"
          v-if="faq.updated"
          class="btn btn-secondary"
          type="submit"
        >
          Сохранить
        </button>
        <button
          @click="handleDelete(faq._id)"
          type="button"
          class="btn btn-danger"
        >
          Удалить
        </button>
        <hr />
      </form>
      <form @submit.prevent="handleAdd" class="faq">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">Вопрос</span>
          </div>
          <input class="form-control" required v-model="newFaq.title" />
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">Ответ</span>
          </div>
          <textarea
            rows="3"
            class="form-control"
            required
            v-model="newFaq.content"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-secondary">Добавить</button>
      </form>
    </div>
  </div>
</template>

<style scoped src="../assets/libs/bootstrap.min.css"></style>

<style scoped>
h3 {
  margin-bottom: 20px;
}
hr {
  margin-top: 30px;
  margin-bottom: 30px;
}
.admin .input-group {
  margin-bottom: 10px;
}
</style>
