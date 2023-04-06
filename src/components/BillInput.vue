<script setup>
import {ref, defineEmits, watch, defineProps} from "vue";
const props = defineProps(['bill']);
const emit = defineEmits(['billChanged']);
const billValue = ref(0);

watch(() => props.bill, (newValue) => {
  billValue.value = newValue;
});

watch(billValue, (newValue, oldValue) => {
  if (newValue < 0 || isNaN(newValue)) {
    billValue.value = oldValue;
    return;
  }

  if (newValue === '') {
    billValue.value = 0;
    emit('billChanged', 0);
    return;
  }
  billValue.value = newValue;
  emit('billChanged', newValue);
});


</script>

<template>
  <div>
    <label class="text-Dark-Grayish-Cyan" for="billInput">
     Bill
    </label>
    <div class="relative mt-2">
      <img class="object-contain absolute top-1/2 -translate-y-1/2 left-3" src="/icon-dollar.svg" alt="dollar icon">
    <input pattern="\d*" v-model="billValue" class="rounded bg-Very-Light-Grayish-Cyan outline-Strong-Cyan text-right px-3 py-2 text-Very-Dark-Cyan caret-Strong-Cyan w-full" type="text" id="billInput" name="billInput">
    </div>
  </div>
</template>
