import apiConfigs from "../../configs/apiConfigs";

const baseUrl = apiConfigs["BASE_URL"];
const key = apiConfigs["SECRET"];

export const getWallet = async () => {
  const response = await fetch(`${baseUrl}/wallets`, {
    method: "GET",
    headers: {
      Authorization: key,
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();
  return res;
};
