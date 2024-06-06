<template>
  <div class="h-screen w-screen relative">
    <div
      class="w-fit h-fit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex text-4xl gap-4 justify-between items-center">
      <button class="i-my-icons:plus text-4xl " @click="plus" ></button>
      <div class="border-2 border-solid px-4 py-2">{{ count }}</div>
      <button class="i-my-icons:div text-4xl" @click="div" ></button>
    </div>

  </div>


</template>
<script setup lang="ts">
import { UseCounterStore } from '@/stores/count';
import { storeToRefs } from 'pinia';
const countStore = UseCounterStore();
const { count } = storeToRefs(countStore);
const { plus, div } = countStore;
defineOptions({
  name: "LayoutPage"
});
</script>

<style scoped>
button{
    @apply cursor-pointer;
}
</style>
