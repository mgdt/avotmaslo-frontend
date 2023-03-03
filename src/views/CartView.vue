<script>
import Header from "../components/Header.vue";
import Callback from "../components/Callback.vue";
import Footer from "../components/Footer.vue";
import CartItem from "@/components/CartItem.vue";
import { useCartStore } from "@/stores/cart";
import { useProductsStore } from "@/stores/products";
import { formatNumber } from "@/helpers";
import { ref, computed, onUpdated, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";

export default {
  components: {
    Header,
    Callback,
    Footer,
    CartItem,
  },
  setup() {
    const { cart } = storeToRefs(useCartStore());
    const { loadCart, deleteCartItem } = useCartStore();
    const { fetchProductsByIds } = useProductsStore();

    const cartArr = computed(() => {
      const cartArr = [];

      for (let key in cart.value) {
        cartArr.push({
          product: cart.value[key].product,
          count: cart.value[key].count,
        });
      }

      return cartArr;
    });

    const cartIds = computed(() => {
      if (Object.keys(cart.value).length > 0) {
        const ids = { _id: Object.keys(cart.value) };
        const params = new URLSearchParams(ids);
        return params.toString();
      }
    });

    const totalCost = computed(() => {
      let sum = 0;
      cartArr.value.forEach((item) => {
        sum += item.count * item.product.price;
      });
      return sum;
    });

    async function fetchProducts() {
      if (cartIds.value) {
        const products = await fetchProductsByIds(cartIds.value);
        for (let key in cart.value) {
          const product = products.find((item) => item._id == key);
          cart.value[key].product = product;
        }
        for (let key in cart.value) {
          if (cart.value[key].product) {
            if (cart.value[key].product.stock == 0) {
              deleteCartItem(key);
            }
          } else {
            deleteCartItem(key);
          }
        }
      }
    }

    onMounted(async () => {
      loadCart();
      await fetchProducts();
    });

    return {
      cartArr,
      totalCost,
      formatNumber,
    };
  },
};
</script>

<template>
  <div class="page-cart">
    <Header />
    <section class="breadcrumbs">
      <div class="container">
        <RouterLink to="/" class="breadcrumbs__link">Главная</RouterLink>
        <img
          src="../assets/img/breadcrumbs-arrow.svg"
          alt=""
          class="breadcrumbs__arrow"
        />
        <span class="breadcrumbs__current">Корзина</span>
      </div>
    </section>

    <section class="cart">
      <div class="container">
        <h1 class="cart__title section__title">Корзина</h1>
        <div class="cart__items">
          <CartItem
            :count="cartItem.count"
            :product="cartItem.product"
            v-for="cartItem in cartArr"
            :key="cartItem.product._id"
          />
        </div>
        <div class="cart__btm">
          <div class="cart__total">
            <span>Итого:</span> {{ formatNumber(totalCost) }} ₽
          </div>
          <button class="cart__fast" @click="handleNotify">
            Быстрый заказ
          </button>
          <button class="cart__submit btn-primary">Оформить заказ</button>
        </div>
      </div>
    </section>

    <Callback />

    <Footer />
  </div>
</template>

<style scoped src="@/assets/css/cart.css"></style>
