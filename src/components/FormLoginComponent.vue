<template>
  <div class="h-screen flex flex-col gap-4 items-center justify-center p-20">
    <p>Faça o Login:</p>

    <form
      @submit.prevent="authStore.loginUser(credentialsUser)"
      class="flex flex-col gap-2"
    >
      <label for="email">E-mail:</label>
      <input
      placeholder="Digite seu e-mail"
        type="email"
        name="email"
        id="email"
        class="border p-1"
        v-model="credentialsUser.emailUser"
      />

      <label for="password">Senha:</label>
      <input
        placeholder="Digite a senha"
        type="password"
        name="password"
        id="password"
        class="border p-1"
        v-model="credentialsUser.passwordUser"
      />

      <button type="submit" class="border p-1">Entrar</button>
    </form>

    <RouterLink to="register">Ou cadastre-se</RouterLink>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/useAuthStore";

const authStore = useAuthStore();

const credentialsUser = ref({
  emailUser: "",
  passwordUser: "",
});
</script>
