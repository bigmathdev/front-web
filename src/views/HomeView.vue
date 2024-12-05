<template>
  <div class="h-screen flex justify-center items-center">
    <h1>Bem vindo!</h1>
  </div>
</template>

<script setup>
import {onMounted} from 'vue'

import { useRouter } from "vue-router";
const router = useRouter();


onMounted(() => {
  setTimeout(() => {
    router.push('/auth')
  }, 1000);
})
</script>
