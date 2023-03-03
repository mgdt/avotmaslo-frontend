<script>
export default {
  props: ["name", "list"],
};
</script>

<template>
  <div class="products__filter products__filter-price">
    <div class="products__filter-label">{{ name }}</div>
    <div class="products__checks">
      <label class="products__check" v-for="(item, index) in list" :key="index">
        <input type="checkbox" v-model="item.checked" />
        <div class="products__check-fake"></div>
        <span>{{ item.name }}</span>
      </label>
    </div>
  </div>
</template>
