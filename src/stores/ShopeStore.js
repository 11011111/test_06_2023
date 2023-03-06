import {defineStore} from "pinia";
import {ref} from "vue";

export const useShopStore = defineStore('shopStore', () => {
     const Hello = ref('Hello')


     return {
          Hello
     }
})
