<script setup>
import { useFormsStore } from "@/stores/forms";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { vMaska } from "maska";

const router = useRouter();
const formsStore = useFormsStore();

const message = ref({
  name: "",
  phone: "",
});

async function sendMessage() {
  await formsStore.sendCallbackForm(message.value);
  message.value.name = "";
  message.value.phone = "";
  router.push("/thanks");
}
</script>

<template>
  <section class="callback">
    <img
      src="../assets/img/callback/oil-top-right.png"
      alt=""
      class="callback-top-right"
    />
    <div class="container">
      <h2 class="section__title callback__title">
        Получите консультацию по&nbsp;телефону
        <span>уже через несколько минут</span>
      </h2>
      <form @submit.prevent="sendMessage" class="callback__form">
        <img
          src="../assets/img/callback/barrels.png"
          alt=""
          class="callback__barrels"
        />
        <img
          src="../assets/img/callback/oil-top-left.png"
          alt=""
          class="callback-top-left"
        />
        <img
          src="../assets/img/callback/oil-btm-right.png"
          alt=""
          class="callback-btm-right"
        />
        <img
          src="../assets/img/callback/oil-btm-left.png"
          alt=""
          class="callback-btm-left"
        />
        <h4 class="callback__form-title">
          <img
            src="../assets/img/callback/clock.png"
            alt=""
            class="callback__title-clock"
          />
          <p>
            <span>В течение 5-ти минут с вами свяжется</span>
            наш&nbsp;специалист, чтобы обсудить все волнующие вас вопросы.
          </p>
        </h4>
        <div class="callback__inputs">
          <input
            type="text"
            class="inp-primary callback__form-inp"
            placeholder="Ваше имя"
            v-model="message.name"
            required
          />
          <input
            type="text"
            class="inp-primary callback__form-inp"
            placeholder="Телефон"
            v-maska
            data-maska="+7 (###) ###-##-##"
            v-model="message.phone"
            required
          />
        </div>
        <div class="callback__form-btm">
          <div class="callback__check">
            <label class="checkbox">
              <input class="checkbox__check" type="checkbox" checked required />
              <div class="checkbox__slider">
                <div class="checkbox__slider-circle"></div>
              </div>
            </label>
            <div class="callback__check-text">
              Я принимаю
              <span
                >условия<br />
                передачи информации</span
              >
            </div>
          </div>
          <button class="callback__btn btn-primary" type="submit">
            Получить консультацию
          </button>
        </div>
        <img
          src="../assets/img/callback/barrels-mob.png"
          alt=""
          class="callback__barrels-mob mob"
        />
      </form>
    </div>
  </section>
</template>
