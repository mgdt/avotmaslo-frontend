<script setup>
import ImageUploader from "@/components-admin/ImageUploader.vue";
import { useSertsStore } from "@/stores/serts";
import { ref, onMounted } from "vue";

const sertStore = useSertsStore();

const newSert = ref({
  imageUrl: "",
});

function updateImage(value, extraInfo) {
  if (extraInfo.id == "new") {
    newSert.value.imageUrl = value;
    return;
  }
  sertStore.updateSertImage(extraInfo.id, value);
}

async function handleUpdate(id, sert) {
  await sertStore.updateSert(id, sert);
  alert("Успешно");
}

async function handleDelete(id) {
  if (confirm("Удалить категорию?")) {
    await sertStore.deleteSert(id);
  }
}

async function handleAdd(sert) {
  await sertStore.createSert(sert);
  newSert.value.imageUrl = "";
}

onMounted(async () => {
  await sertStore.fetchSerts();
});
</script>

<template>
  <div class="container">
    <h3>Сертификаты</h3>
    <div class="serts">
      <div class="sert__item" v-for="sert in sertStore.serts">
        <ImageUploader
          :imageUrlProp="sert.imageUrl"
          :imageMaxWidth="300"
          :wrapSize="300"
          :extraInfo="{ id: sert._id }"
          @updateImage="updateImage"
        />
        <button
          v-if="sert.updated"
          style="margin-right: 10px"
          class="btn"
          @click="handleUpdate(sert._id, sert)"
          :class="{
            'btn-secondary': sert.updated,
          }"
        >
          Сохранить
        </button>
        <button @click="handleDelete(sert._id)" class="btn btn-danger">
          Удалить
        </button>
      </div>
      <div class="sert__item">
        <ImageUploader
          :imageUrlProp="newSert.imageUrl"
          :imageMaxWidth="300"
          :wrapSize="300"
          :extraInfo="{ id: 'new' }"
          @updateImage="updateImage"
        />
        <button @click="handleAdd(newSert)" class="btn btn-secondary">
          Добавить
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped src="../assets/libs/bootstrap.min.css"></style>
<style scoped>
h3 {
  margin-bottom: 20px;
}
.sert__item .btn {
  margin-top: 10px;
}
.serts {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
