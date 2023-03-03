<script>
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      document.body.classList.add("white");
    });
  },
};
</script>

<template>
  <div class="admin">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <RouterLink class="navbar-brand" to="/admin">Админ-панель</RouterLink>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/admin">Товары</RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Заказы</a>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/admin/blog">Блог</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/admin/categories"
              >Категории</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/admin/brands">Бренды</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/admin/delivery"
              >Доставка и оплата</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/admin/serts"
              >Сертификаты</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/admin/faq">FAQ</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped src="../assets/libs/bootstrap.min.css"></style>

<style>
.admin .navbar {
  margin-bottom: 30px;
}
.admin {
  padding-bottom: 50px;
}
</style>
