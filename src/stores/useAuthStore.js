import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

import { useRouter } from "vue-router";


export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const token = ref(localStorage.getItem("auth_token") || null);
  const isLoggedIn = ref(!!token.value);

  const loginUser = async (credentials) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email: credentials.emailUser,
          password: credentials.passwordUser,
        }
      );

      if (response.data.token) {
        localStorage.setItem("auth_token", response.data.token);
        token.value = response.data.token;
        isLoggedIn.value = true;
        router.push("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async (register) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/register", {
          username: register.username,
          email: register.email,
          password: register.password,
        }
      );

      if (response.data) {
        console.log("Usuario cadastrado com sucesso");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("auth_token");
    token.value = null;
    isLoggedIn.value = false;
    router.push('/auth')
  };

  const checkAuthUser = () => {
    return !!token.value;
  };

  return {
    token,
    isLoggedIn,
    loginUser,
    registerUser,
    logoutUser,
    checkAuthUser,
  };
});
