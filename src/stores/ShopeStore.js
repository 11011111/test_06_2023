import { defineStore } from "pinia";
import { ref } from "vue";

export const useShopStore = defineStore("shopStore", () => {
  const clothLeftBlock = ref([
    {
      id: 1,
      name: "Shoes 1",
    },
    {
      id: 2,
      name: "Shoes 2",
    },
    {
      id: 3,
      name: "Shoes 3",
    },
    {
      id: 4,
      name: "Shoes 4",
    },
    {
      id: 5,
      name: "T-shirt 1",
    },
    {
      id: 6,
      name: "T-shirt 2",
    },
    {
      id: 7,
      name: "T-shirt 3",
    },
    {
      id: 8,
      name: "T-shirt 4",
    },
  ]);

  const clothRightBlock = ref([
    {
      id: 11,
      name: "Jacket 1",
    },
    {
      id: 12,
      name: "Jacket 2",
    },
    {
      id: 13,
      name: "Jacket 3",
    },
    {
      id: 14,
      name: "Jacket 4",
    },
    {
      id: 15,
      name: "Hoodie 1",
    },
    {
      id: 16,
      name: "Hoodie 2",
    },
    {
      id: 17,
      name: "Hoodie 3",
    },
    {
      id: 18,
      name: "Hoodie 4",
    },
  ]);

  const addedClothLeftBlock = ref(new Set());
  const addedClothRightBlock = ref(null);

  //Добавление товара (левый блок)
  function addProductLeftBlock(product) {
    if (addedClothLeftBlock.value.size < 6)
      addedClothLeftBlock.value.add(product);
  }

  //Удаление товара (левый блок)
  function delProductLeftBlock(product) {
    addedClothLeftBlock.value.delete(product);
  }

  //Добавление товара (правый блок)
  function addProductRightBlock(product) {
    addedClothRightBlock.value = product;
  }

  return {
    clothLeftBlock,
    clothRightBlock,
    addedClothLeftBlock,
    addedClothRightBlock,
    addProductLeftBlock,
    delProductLeftBlock,
    addProductRightBlock,
  };
});
