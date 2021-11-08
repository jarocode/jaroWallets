import apiConfigs from "../../configs/apiConfigs";

const baseUrl = apiConfigs["BASE_URL"];
const key = apiConfigs["SECRET"];

export const createWallet = async (emailData) => {
  try {
    const response = await fetch(`${baseUrl}/wallets`, {
      method: "POST",
      headers: {
        Authorization: key,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });
    const res = await response.json();
    return res;
  } catch (error) {
    throw error;
  }
};

export const fundWallet = async (fundData) => {
  try {
    const response = await fetch(`${baseUrl}/wallets/funds/manual`, {
      method: "POST",
      headers: {
        Authorization: key,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fundData),
    });
    const res = await response.json();
    return res;
  } catch (error) {
    throw error;
  }
};
