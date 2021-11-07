import LandingPage from "./pages/LandingPage";
import EmailLogin from "./pages/EmailLogin";
import MyWallet from "./pages/MyWallet";
import FundWallet from "./pages/FundWallet";

export const landingpage = "/";
export const emailLogin = "/login";
export const myWallet = "/myWallet";
export const transactions = "/transaction";
export const fundWallet = "/fundwallet";

export default [
  { path: landingpage, component: LandingPage },
  { path: emailLogin, component: EmailLogin },
  { path: myWallet, component: MyWallet },
  { path: fundWallet, component: FundWallet },
];
