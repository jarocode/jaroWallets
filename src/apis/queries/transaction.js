import apiConfigs from "../../configs/apiConfigs";

const baseUrl = apiConfigs["BASE_URL"];
const key = apiConfigs["SECRET"];

export const getTransactions = async () => {
  const response = await fetch(`${baseUrl}/wallets/6187b715e04317411f790f11`, {
    method: "GET",
    headers: {
      Authorization: key,
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();
  return res;
};
