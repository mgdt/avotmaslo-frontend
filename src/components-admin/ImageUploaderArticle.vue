<script>
import { onMounted, onUpdated, ref } from "vue";
import axios from "axios";
import config from "@/config";

export default {
  props: ["imageUrlProp", "extraInfo", "imageMaxWidth", "wrapSize"],
  emits: ["updateImage"],
  setup(props, context) {
    const fileInput = ref(null);
    const imageUrl = ref("");

    async function handleFileInputChange() {
      if (fileInput.value.files[0]) {
        uploadFile();
      }
    }

    async function uploadFile() {
      const formData = new FormData();
      formData.append("file", fileInput.value.files[0]);
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.post(`${config.API_URL}/upload`, formData, {
        headers,
      });
      imageUrl.value = "/uploads/" + response.data.filename;
      context.emit(
        "updateImage",
        "/uploads/" + response.data.filename,
        props.extraInfo
      );
    }

    onMounted(() => {
      imageUrl.value = props.imageUrlProp;
    });

    onUpdated(() => {
      imageUrl.value = props.imageUrlProp;
    });

    return {
      handleFileInputChange,
      fileInput,
      imageUrl,
      config,
    };
  },
};
</script>

<template>
  <div class="input-group">
    <label
      class="image-wrap"
      :style="`width: ${wrapSize}px; height: ${wrapSize}px`"
    >
      <img
        v-if="imageUrl"
        :src="config.API_URL + imageUrl"
        :style="`max-width: ${imageMaxWidth}px; max-height: ${imageMaxWidth}px;`"
        class="image-wrap-img"
        alt=""
      />
      <div class="image-overlay">
        <span>Нажмите, чтобы загрузить или обновить изображение</span>
      </div>
      <span class="image-wrap-text" v-if="!imageUrl"
        >Нажмите, чтобы загрузить или обновить изображение</span
      >
      <input type="file" ref="fileInput" @change="handleFileInputChange" />
    </label>
  </div>
</template>

<style scoped>
input[type="file"] {
  display: none;
}
.image-wrap {
  width: 300px;
  height: 300px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  position: relative;
}
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-wrap-text {
  transition-duration: 0.2s;
}
.image-wrap:hover .image-wrap-text {
  visibility: hidden;
  opacity: 0;
}
.image-wrap:hover .image-overlay {
  opacity: 1;
  visibility: visible;
}
.image-wrap-img {
  max-width: 170px;
}
</style>
