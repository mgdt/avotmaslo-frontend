<script>
import { computed } from "vue";
import { formatNumber } from "@/helpers";
import { useCartStore } from "@/stores/cart";
import { useProductsStore } from "@/stores/products";

export default {
  props: ["product", "count"],
  setup(props) {
    const { increment, decrement, deleteCartItem } = useCartStore();
    const { getImageUrl } = useProductsStore();

    const totalCost = computed(() => {
      return props.product.price * props.count;
    });

    return {
      totalCost,
      formatNumber,
      increment,
      decrement,
      deleteCartItem,
      getImageUrl,
    };
  },
};
</script>

<template>
  <div class="cart__item">
    <div class="cart__item-left">
      <div class="cart__item-img">
        <img :src="getImageUrl(product)" alt="" />
        <svg
          width="91"
          height="13"
          viewBox="0 0 91 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="45.3473"
            cy="6.7986"
            rx="45.0417"
            ry="6.20139"
            fill="#090909"
          />
        </svg>
      </div>
      <div class="cart__item-info">
        <h3 class="cart__item-title">
          {{ product.name }}
        </h3>
        <div class="cart__item-total-mob mob">
          {{ formatNumber(totalCost) }} ₽
        </div>
        <p class="cart__item-text" v-html="product.description"></p>
        <div class="cart__item-price">
          Цена за 1 шт. — {{ formatNumber(product.price) }} ₽
        </div>
      </div>
    </div>
    <div class="cart__item-price-mob mob">
      Цена за 1 шт. — {{ formatNumber(product.price) }} ₽
    </div>
    <div class="cart__item-counter">
      <div class="cart__item-minus" @click="decrement(product._id)">
        <img src="../assets/img/cart/minus.svg" alt="" />
      </div>
      <div class="cart__item-count">{{ count }}</div>
      <div class="cart__item-plus" @click="increment(product._id)">
        <img src="../assets/img/cart/plus.svg" alt="" />
      </div>
    </div>
    <div class="cart__item-total">{{ formatNumber(totalCost) }} ₽</div>
    <!-- <svg
      class="cart__item-fav"
      width="25"
      height="23"
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 21.5L11.91 22.09C11.9874 22.1676 12.0794 22.2292 12.1806 22.2712C12.2819 22.3132 12.3904 22.3348 12.5 22.3348C12.6096 22.3348 12.7181 22.3132 12.8194 22.2712C12.9206 22.2292 13.0126 22.1676 13.09 22.09L12.5 21.5ZM2.56 11.56L1.97 12.1483L2.56 11.56ZM10.8933 3.22666L10.3033 3.81499L10.8933 3.22666ZM12.5 4.83332L11.91 5.42332C11.9874 5.50093 12.0794 5.5625 12.1806 5.60451C12.2819 5.64652 12.3904 5.66815 12.5 5.66815C12.6096 5.66815 12.7181 5.64652 12.8194 5.60451C12.9206 5.5625 13.0126 5.50093 13.09 5.42332L12.5 4.83332ZM14.1067 3.22666L13.5183 2.63666L14.1067 3.22666ZM13.09 20.91L3.14833 10.97L1.97 12.1483L11.91 22.09L13.09 20.91ZM21.8517 10.97L11.91 20.91L13.09 22.09L23.03 12.1483L21.8517 10.97ZM10.3033 3.81499L11.91 5.42332L13.09 4.24332L11.4817 2.63666L10.3033 3.81499ZM13.09 5.42332L14.6967 3.81499L13.5183 2.63666L11.91 4.24332L13.09 5.42332ZM18.2733 0.666656C16.49 0.666656 14.78 1.37499 13.5183 2.63666L14.6967 3.81499C15.6454 2.86666 16.9319 2.33375 18.2733 2.33332V0.666656ZM23.3333 7.39332C23.3333 8.73499 22.8 10.0217 21.85 10.97L23.03 12.1483C24.2911 10.8872 24.9997 9.17681 25 7.39332H23.3333ZM25 7.39332C25 5.6093 24.2913 3.89835 23.0298 2.63685C21.7683 1.37536 20.0574 0.666656 18.2733 0.666656V2.33332C19.6153 2.33332 20.9024 2.86643 21.8513 3.81536C22.8002 4.7643 23.3333 6.05133 23.3333 7.39332H25ZM6.72667 2.33332C8.06833 2.33332 9.355 2.86666 10.3033 3.81666L11.4817 2.63666C10.2205 1.37559 8.51015 0.666995 6.72667 0.666656V2.33332ZM1.66667 7.39332C1.66667 6.05133 2.19977 4.7643 3.14871 3.81536C4.09764 2.86643 5.38467 2.33332 6.72667 2.33332V0.666656C4.94264 0.666656 3.23169 1.37536 1.97019 2.63685C0.7087 3.89835 0 5.6093 0 7.39332H1.66667ZM3.15 10.97C2.67998 10.5004 2.30707 9.9429 2.05255 9.32921C1.79804 8.71552 1.66692 8.0577 1.66667 7.39332H0C0 9.17666 0.708333 10.8867 1.97 12.1483L3.14833 10.97H3.15Z"
        fill="white"
      />
    </svg> -->
    <img
      @click="deleteCartItem(product._id)"
      class="cart__item-delete"
      src="../assets/img/cart/basket.svg"
      alt=""
    />
  </div>
</template>

<style scoped>
.cart__item-img {
  margin-right: 58px;
  position: relative;
}
.cart__item-img img {
  width: 92px;
  position: relative;
  z-index: 2;
}
.cart__item-img svg {
  position: absolute;
  bottom: 0;
  left: 0;
  filter: blur(5px);
}

.cart__item {
  background: radial-gradient(
    57.89% 57.89% at 50% 42.11%,
    rgba(30, 26, 1, 0) 0%,
    #161616 100%
  );
  border: 1px solid #f7ca60;
  border-radius: 25px;
  padding-left: 60px;
  padding-right: 30px;
  padding-top: 30px;
  padding-bottom: 40px;
  display: flex;
  position: relative;
}

.cart__item-title {
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  margin-bottom: 26px;
}

.cart__item-text {
  font-size: 14px;
  line-height: 140%;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  opacity: 0.5;
  margin-bottom: 25px;
}

.cart__item-price {
  font-size: 14px;
  line-height: 17px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
}

.cart__item-info {
  width: 495px;
}

.cart__item-counter {
  display: flex;
  align-self: center;
  margin-left: 60px;
  align-items: center;
  background: #0f0f0f;
  border-radius: 64px;
  height: 40px;
}

.cart__item-count {
  width: 30px;
  font-size: 20px;
  line-height: 23px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  text-align: center;
}

.cart__item-minus,
.cart__item-plus {
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 100%;
  user-select: none;
}

.cart__item-total {
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  align-self: center;
  margin-left: 50px;
}

.cart__item-fav {
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 85px;
}

.cart__item-delete {
  cursor: pointer;
  margin-top: -2px;
  position: absolute;
  right: 30px;
  top: 30px;
}
.cart__item-left {
  display: flex;
  align-items: flex-start;
}
@media only screen and (max-width: 600px) {
  .cart__item {
    flex-wrap: wrap;
  }
  .cart__item-text {
    display: none;
  }
  .cart__item {
    padding-top: 30px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 90px;
    position: relative;
    align-items: start;
  }
  .cart__item-counter {
    position: absolute;
    right: 25px;
    bottom: 25px;
  }
  .cart__item-img {
    margin-right: 38px;
  }
  .cart__item-img img {
    width: 66px;
  }
  .cart__item-img svg {
    width: 66px;
  }
  .cart__item-price {
    display: none;
  }
  .cart__item-total {
    display: none;
  }
  .cart__item-delete {
    position: absolute;
    bottom: 34px;
    left: 65px;
    right: unset;
    top: unset;
  }
  .cart__item-delete {
    position: absolute;
    top: unset;
    right: unset;
    left: 25px;
    bottom: 35px;
  }
  .cart__item-title {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 0;
  }
  .cart__item-total-mob {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    font-feature-settings: "pnum" on, "lnum" on;
    margin-top: 10px;
    color: #f7ca60;
  }
  .cart__item-info {
    width: auto;
  }
  .cart__item-price-mob {
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
    font-feature-settings: "pnum" on, "lnum" on;
    margin-top: 30px;
  }
}
</style>
