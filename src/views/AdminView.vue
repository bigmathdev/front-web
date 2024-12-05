<template>
  <div class="p-10 flex flex-col gap-6">
    <h1 class="text-center text-xl font-bold">Produtos</h1>
    <div class="flex flex-col justify-start">
      <ul>
        <li v-for="product in productStore.products" :key="product.id">
          <input
            type="checkbox"
            :name="product.name"
            :checked="productId === product.id"
            @change="selectProduct(product)"
            :value="product.id"
          />

          {{ product.name }}
        </li>
      </ul>
    </div>

    <form
      @submit.prevent="productStore.addNewProduct(productName)"
      class="flex flex-col gap-6"
    >
      <input type="text" placeholder="Nome do produto" v-model="productName" class="border p-1" />
      <button class="border p-4 flex items-center justify-center gap-2">
        <Icon icon="material-symbols-light:add-2" width="24" height="24" />
      </button>
    </form>

    <form @submit.prevent="productStore.editProduct(productId, productEdit)" class="flex flex-col gap-6">
      <input type="text" placeholder="Editar o produto" v-model="productEdit" class="border p-1" />
      <button class="border p-4 flex items-center justify-center gap-2">
        <Icon icon="material-symbols-light:edit-square-outline-rounded" width="24" height="24" />
      </button>
    </form>

    <button @click="productStore.removeProduct(productId)" class="border flex items-center justify-center p-4">
      <Icon icon="material-symbols-light:delete-outline" width="24" height="24" />
      Deletar produto
    </button>

    <button @click="authStore.logoutUser()">Sair</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useProductStore } from "@/stores/useProductStore";
import { useAuthStore} from "@/stores/useAuthStore";
import { Icon } from "@iconify/vue";

const authStore = useAuthStore()

const productStore = useProductStore();
const productId = ref();
const productName = ref();
const productEdit = ref();

const selectProduct = (product) => {
  if (productId.value === product.id) {
    productId.value = null;
    productName.value = "";
  } else {
    productId.value = product.id;
    productEdit.value = product.name;
  }
};

onMounted(() => {
  productStore.getProducts();
});
</script>
