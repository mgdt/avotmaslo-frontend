import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cart = ref({});

  function loadCart(component = "MainLayout") {
    if (!localStorage.getItem("cart")) {
      cart.value = {};
      return;
    }
    cart.value = JSON.parse(localStorage.getItem("cart"));
  }

  const cartCount = computed(() => {
    return Object.keys(cart.value).length;
  });

  function addToCart(product, count) {
    if (cart.value[product._id]) {
      cart.value[product._id].count += count;
    } else {
      cart.value[product._id] = {
        product,
        count,
      };
    }
    localStorage.setItem("cart", JSON.stringify(cart.value));
  }

  function increment(id) {
    cart.value[id].count += 1;
    localStorage.setItem("cart", JSON.stringify(cart.value));
  }

  function decrement(id) {
    if (cart.value[id].count > 1) {
      cart.value[id].count--;
      localStorage.setItem("cart", JSON.stringify(cart.value));
    }
  }

  function deleteCartItem(id) {
    delete cart.value[id];
    localStorage.setItem("cart", JSON.stringify(cart.value));
  }

  return {
    cart,
    loadCart,
    addToCart,
    increment,
    decrement,
    deleteCartItem,
    cartCount,
  };
});
