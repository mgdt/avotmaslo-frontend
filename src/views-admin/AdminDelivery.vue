<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { useProductsStore } from "@/stores/products";
import { ref, onMounted } from "vue";

export default {
  components: {
    QuillEditor,
  },
  setup() {
    const text = ref("");
    const { fetchDeliveryText, updateDeliveryText } = useProductsStore();

    onMounted(async () => {
      text.value = await fetchDeliveryText();
    });

    async function handleUpdate() {
      await updateDeliveryText(text.value);
      alert("Успешно");
    }

    return {
      text,
      handleUpdate,
    };
  },
};
</script>

<template>
  <div class="container">
    <h3 style="margin-bottom: 20px">
      Редактирование текста Доставка и оплата в товарах
    </h3>
    <QuillEditor
      v-model:content="text"
      contentType="html"
      style="margin-bottom: 20px"
    />
    <button @click="handleUpdate" class="btn btn-secondary" type="submit">
      Сохранить
    </button>
  </div>
</template>

<style scoped src="../assets/libs/bootstrap.min.css"></style>
