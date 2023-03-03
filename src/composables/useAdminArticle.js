import { ref } from "vue";

export default function useAdminProduct() {
  const article = ref({
    imageUrl: "",
    title: "",
    content: "",
    slug: "",
  });

  return {
    article,
  };
}
