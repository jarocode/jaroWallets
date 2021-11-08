import Axios from "axios";
import store from "../store/store";
import { emailLogin } from "../userRoutes";
import { signOut } from "../store/actions/auth";
import { message } from "antd";

const base_Url = "https://api-staging.getwallets.co/v1/";
const axiosConfig = () => {
  // set axios base url
  //   Axios.defaults.baseURL = window["configs"].baseURL;
  Axios.defaults.baseURL = base_Url;
  // Request interceptor for API calls
  Axios.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = window["configs"].secret_key;
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  // Adding a response interceptor
  Axios.interceptors.response.use(
    (response) => {
      if (response?.data?.status === "Token is Expired") {
        message.error("Your session has expired");
        setTimeout(() => {
          store.dispatch(signOut(""));
          window.location.replace(emailLogin);
        }, 1000);
      } else {
        return response;
      }
    },
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
};

export default axiosConfig;
