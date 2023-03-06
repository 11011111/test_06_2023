<template>
  <div class="container">
    <div class="row justify-between">
      <div class="row col-5">
        <div class="row border1 q-pa-lg q-mb-lg">
          <div class="row full-width">
            <div
              class="border2 q-ma-xs q-pa-xs cursor-pointer"
              v-for="(product, idx) in addedClothLeftBlock"
              :key="idx"
              @click="delProductLeftBlock(product)"
            >
              <ProductCard :name="product.name" />
            </div>
          </div>
          <div class="row">
            <p class="text-h5">selected {{ addedClothLeftBlock.size }} / 6</p>
          </div>
        </div>
        <div class="row justify-start border1 q-pa-lg q-mb-lg">
          <div
            class="border2 q-ma-xs q-pa-xs cursor-pointer"
            v-for="(product, idx) in clothLeftBlock"
            :key="idx"
            @click="addProductLeftBlock(product)"
          >
            <ProductCard :name="product.name" />
          </div>
        </div>
      </div>

      <div class="row col-5 justify-end">
        <div class="row justify-between border1 q-pa-lg q-mb-lg">
          <p class="text-h5" v-if="!addedClothRightBlock">Select item</p>
          <div class="border2 q-ma-xs q-pa-xs" v-if="addedClothRightBlock">
            <ProductCard :name="addedClothRightBlock.name" />
          </div>
        </div>
        <div class="row justify-start border1 q-pa-lg q-mb-lg">
          <div
            class="border2 q-ma-xs q-pa-xs cursor-pointer"
            v-for="(product, idx) in clothRightBlock"
            :key="idx"
            @click="addProductRightBlock(product)"
          >
            <ProductCard :name="product.name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from "./components/ProductCard.vue";
import { useShopStore } from "./stores/ShopeStore.js";
import { storeToRefs } from "pinia";

const {
  clothLeftBlock,
  clothRightBlock,
  addedClothLeftBlock,
  addedClothRightBlock,
} = storeToRefs(useShopStore());
const { addProductLeftBlock, delProductLeftBlock, addProductRightBlock } =
  useShopStore();
</script>
