<template>
    <div class="h-screen flex flex-col gap-4 items-center justify-center p-20">
      <p>Cadastre-se</p>
  
      <form
        @submit.prevent="authStore.registerUser(register)"
        class="flex flex-col gap-2"
      >
      <label for="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          class="border p-1"
          v-model="register.username"
        />

        <label for="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          class="border p-2"
          v-model="register.email"
        />
  
        <label for="password">Senha:</label>
        <input
          type="password"
          name="password"
          id="password"
          class="border p-1" 
          v-model="register.password"
        />
  
        <button type="submit" class="border p-1">Cadastrar</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useAuthStore } from "@/stores/useAuthStore";
  
  const authStore = useAuthStore();
  
  const register = ref({
    username: "",
    email: "",
    password: "",
  })
  </script>
  