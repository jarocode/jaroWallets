import React from "react";

import MainLayout from "../../../layouts/mainLayout";
import Jumbotron from "./Jumbotron";

const Index = () => {
  const getWallet = async () => {
    const response = await fetch("https://api.getwallets.co/v1/wallets", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer sk_live_6187b3aee04317411f790f096187b3aee04317411f790f0a",
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    return res;
  };

  React.useEffect(() => {
    getWallet().then((res) => console.log(res));
  }, []);
  return (
    <MainLayout navGap="68rem">
      <Jumbotron />
    </MainLayout>
  );
};

export default Index;
