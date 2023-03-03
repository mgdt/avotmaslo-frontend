import { ref } from "vue";

export default function useAdminProduct() {
  const product = ref({
    imageUrl: "",
    name: "",
    price: "",
    volume: "",
    volumeUnits: "л.",
    viscosity: "",
    type: "",
    engineType: "",
    vehicleType: "",
    category: undefined,
    brand: undefined,
    description: "",
    country: "",
    stock: 0,
    articul: "",
    series: "",
    classification: "",
    isBest: false,
  });

  return {
    product,
  };
}
