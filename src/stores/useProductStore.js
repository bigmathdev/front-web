import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

import { useAuthStore } from "./useAuthStore";
const authStore = useAuthStore();

export const useProductStore = defineStore("product", () => {
  const products = ref();

  const getProducts = async () => {
    try {
      const response = await axios("http://localhost:3000/api/products", {
        headers: {
          Authorization: `Bearer ${authStore.token}`,
        },
      });

      if (response.data) {
        products.value = response.data;
      }
    } catch (error) {
      console.log("Erro para listar produtos", error);
    }
  };

  const addNewProduct = async (productData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/products",
        { name: productData },
        {
          headers: {
            Authorization: `Bearer ${authStore.token}`,
          },
        }
      );

      if (response.data) {
        console.log("Novo produto adicionado com sucesso", response.data);
        getProducts()
      }
    } catch (error) {
      console.error("Error ao adicionar novo produto", error);
    }
  };

  const editProduct = async (productId, productData) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/products/${productId}`,
        { name: productData },
        {
          headers: {
            Authorization: `Bearer ${authStore.token}`,
          },
        }
      );

      if (response.data) {
        console.log("Produto atualizado com sucesso", response.data);
        getProducts()
      }
    } catch (error) {
      console.error("Erro ao editar produto", error);
    }
  };

  const removeProduct = async (productId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/products/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${authStore.token}`,
          },
        }
      );

      if (response.data) {
        console.log('Produto deletado com sucesso.')
        getProducts()
      }
    } catch (error) {
      console.error("Erro ao deletar produto", error);
    }
  };

  return {
    products,
    getProducts,
    addNewProduct,
    editProduct,
    removeProduct,
  };
});
