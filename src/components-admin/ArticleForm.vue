<script>
import ImageUploaderArticle from "@/components-admin/ImageUploaderArticle.vue";
import { QuillEditor } from "@vueup/vue-quill";
import ImageUploader from "quill-image-uploader";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import axios from "axios";
import config from "@/config";

export default {
  components: {
    ImageUploaderArticle,
    QuillEditor,
  },
  props: ["article", "handleSubmit", "updateImage"],
  setup() {
    const modules = {
      name: "imageUploader",
      module: ImageUploader,
      options: {
        upload: (file) => {
          return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("file", file);
            const token = localStorage.getItem("token")
              ? localStorage.getItem("token")
              : "";
            const headers = {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            };

            axios
              .post(`${config.API_URL}/upload`, formData, { headers })
              .then((res) => {
                console.log(res);
                resolve(`${config.API_URL}/uploads/${res.data.filename}`);
              })
              .catch((err) => {
                reject("Upload failed");
                console.error("Error:", err);
              });
          });
        },
      },
    };
    return {
      modules,
    };
  },
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Заголовок</span>
      </div>
      <input
        type="text"
        class="form-control"
        required
        v-model="article.title"
      />
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">ID</span>
      </div>
      <input
        type="text"
        class="form-control"
        required
        placeholder="Без пробелов на англ. языке"
        v-model="article.slug"
      />
    </div>

    <label style="margin-top: 5px; margin-bottom: 10px">Текст статьи:</label>
    <QuillEditor
      v-model:content="article.content"
      contentType="html"
      style="margin-bottom: 20px"
      toolbar="full"
      :modules="modules"
    />

    <label>Картинка для списка:</label>
    <ImageUploaderArticle
      :imageUrlProp="article.imageUrl"
      @updateImage="updateImage"
      :imageMaxWidth="300"
      :wrapSize="300"
    />

    <button class="btn btn-secondary" type="submit">Сохранить</button>
  </form>
</template>

<style scoped src="../assets/libs/bootstrap.min.css"></style>

<style scoped>
.admin .input-group {
  margin-bottom: 10px;
}
</style>
