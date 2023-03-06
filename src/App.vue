<template>
  <h1>{{Hello}}</h1>
</template>

<script setup>
import {storeToRefs} from "pinia";
import {useShopStore} from "./stores/ShopeStore.js";

const {Hello} = storeToRefs(useShopStore())
</script>
