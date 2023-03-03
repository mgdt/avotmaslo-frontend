import axios from "axios";
import config from "@/config";
import { defineStore } from "pinia";

export const useFormsStore = defineStore("forms", () => {
  async function sendCallbackForm(payload) {
    try {
      const headers = { "Content-Type": "application/json" };
      const response = await axios.post(
        `${config.API_URL}/mailer/callbackForm`,
        JSON.stringify(payload),
        { headers }
      );
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  async function sendQuestionForm(payload) {
    try {
      const headers = { "Content-Type": "application/json" };
      const response = await axios.post(
        `${config.API_URL}/mailer/questionForm`,
        JSON.stringify(payload),
        { headers }
      );
    } catch (error) {
      console.log(error);
      alert("Ошибка");
    }
  }

  return {
    sendCallbackForm,
    sendQuestionForm,
  };
});
