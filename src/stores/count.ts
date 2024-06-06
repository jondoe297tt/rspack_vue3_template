import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export const UseCounterStore = defineStore("count-store", function () {
  const count: Ref<number> = ref(0);

  function plus() {
    count.value += 1;
  }
  function div() {
    count.value -= 1;
  }

  return {
    count,
    plus,
    div,
  };
});
