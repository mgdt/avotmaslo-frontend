import axios from "axios";
import config from "./config";

export function formatNumber(number) {
  return new Intl.NumberFormat("ru-RU").format(number);
}

export function loadFilterField(key, list) {
  key.forEach((item) => {
    list.value.push({
      name: item,
      checked: false,
    });
  });
}

export function addCheckedToFilters(key, list, filters) {
  const checkedItems = [];
  list.value.map((item) => {
    if (item.checked) checkedItems.push(item.name);
  });
  if (checkedItems.length > 0) filters[key] = checkedItems;
}

export async function checkAuth() {
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";
  return await axios.get(`${config.API_URL}/users/currentUser`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

// addCheckedToFilters('viscosity', viscosityList, filters)
