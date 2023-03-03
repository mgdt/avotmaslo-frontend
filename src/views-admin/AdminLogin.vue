<script>
import { ref } from "vue";
import axios from "axios";
import config from "@/config";
import { useRouter } from "vue-router";

export default {
  setup() {
    const login = ref("");
    const password = ref("");
    const router = useRouter();

    async function handleSubmit() {
      try {
        const headers = { "Content-Type": "application/json" };

        const response = await axios.post(
          `${config.API_URL}/users/login`,
          JSON.stringify({ login: login.value, password: password.value }),
          { headers }
        );
        localStorage.setItem("token", response.data.token);
        router.push("/admin");
      } catch (error) {
        console.log(error);
        alert("Неверный логин или пароль");
      }
    }

    return {
      handleSubmit,
      login,
      password,
    };
  },
};
</script>

<template>
  <div class="container">
    <h3>Вход в админ-панель</h3>
    <form @submit.prevent="handleSubmit">
      <label>Логин</label>
      <input v-model="login" class="form-control" type="text" />
      <label>Пароль</label>
      <input v-model="password" class="form-control" type="password" />
      <button type="submit" class="btn btn-secondary">Войти</button>
    </form>
  </div>
</template>

<style scoped src="../assets/libs/bootstrap.min.css"></style>

<style scoped>
h3 {
  margin-top: 30px;
  margin-bottom: 30px;
}
input {
  margin-bottom: 20px;
}
</style>
