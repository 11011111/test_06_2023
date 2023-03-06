<template>
  <div class="row">{{ nameProduct }}</div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  name: String,
});

const nameProduct = computed(() => {
  return props.name;
});
</script>
