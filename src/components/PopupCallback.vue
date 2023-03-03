<script setup>
import { useUiStore } from "../stores/ui";
import { useFormsStore } from "@/stores/forms";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { vMaska } from "maska";

const router = useRouter();
const uiStore = useUiStore();

const formsStore = useFormsStore();

const message = ref({
  name: "",
  phone: "",
});

async function sendMessage() {
  await formsStore.sendCallbackForm(message.value);
  message.value.name = "";
  message.value.phone = "";
  uiStore.closePopup();
  router.push("/thanks");
}
</script>

<template>
  <div class="popup-callback" :class="{ active: uiStore.popupCallbackShown }">
    <form @submit.prevent="sendMessage" class="popup-callback__window">
      <img
        class="popup-callback__close"
        src="../assets/img/popup-close.svg"
        alt=""
        @click="uiStore.togglePopupCallback(false)"
      />
      <div class="popup__callback-title">
        <span>В течение 5-ти минут с вами свяжется</span><br />
        наш специалист, чтобы обсудить все<br />
        волнующие вас вопросы
      </div>
      <div class="popup__callback-inputs">
        <input
          class="popup__callback-input inp-primary"
          placeholder="Ваше имя"
          required
          v-model="message.name"
        />
        <input
          class="popup__callback-input inp-primary"
          placeholder="Телефон"
          v-model="message.phone"
          v-maska
          data-maska="+7 (###) ###-##-##"
        />
      </div>
      <div class="popup__callback-btm">
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
          <button class="callback__btn btn-primary">Заказать звонок</button>
        </div>
      </div>
    </form>
  </div>
</template>
