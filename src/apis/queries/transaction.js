import apiConfigs from "../../configs/apiConfigs";

const baseUrl = apiConfigs["BASE_URL"];
const key = apiConfigs["SECRET"];

export const getTransactions = async (key, walletId) => {
  const response = await fetch(`${baseUrl}/${walletId}`, {
    method: "GET",
    headers: {
      Authorization: key,
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();
  return res;
};
