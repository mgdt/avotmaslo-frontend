import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", () => {
  const popupCallbackShown = ref(false);

  function togglePopupCallback(isShown) {
    popupCallbackShown.value = isShown;
  }

  function closePopup() {
    popupCallbackShown.value = false;
  }

  return { popupCallbackShown, togglePopupCallback, closePopup };
});
