<script setup>
import {ref, defineEmits, watch, defineProps} from "vue";
const props = defineProps(['tipPercentage']);
const emit = defineEmits(['tipPercentageChanged']);

const tipPercentages = [5, 10, 15, 25, 50];

const selectedTipPercentage = ref(0);

function changeTipPercentage(tipPercentage) {
  selectedTipPercentage.value = tipPercentage;
  emit('tipPercentageChanged', tipPercentage);
}

watch(() => props.tipPercentage, (newValue) => {
  selectedTipPercentage.value = newValue;
});

watch(selectedTipPercentage, (newValue, oldValue) => {
  if (newValue < 0 || isNaN(newValue)) {
    selectedTipPercentage.value = oldValue;
    return;
  }
  selectedTipPercentage.value = newValue;
  emit('tipPercentageChanged', newValue);
});

</script>

<template>
  <div class="transition-all duration-300">
    <label class="text-Dark-Grayish-Cyan">Select Tip %</label>
    <div class="grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-3 mt-4">
      <button @click="changeTipPercentage(tipPercentages[0])"
              :class="[selectedTipPercentage === tipPercentages[0] ? 'text-Very-Dark-Cyan bg-Strong-Cyan' : 'text-White bg-Very-Dark-Cyan']"
              class="active:bg-Button-Active active:text-Very-Dark-Cyan rounded-md px-16 text-2xl text-Grayish-Cyan w-fit">
        5%
      </button>
      <button @click="changeTipPercentage(tipPercentages[1])"
              :class="[selectedTipPercentage === tipPercentages[1] ? 'text-Very-Dark-Cyan bg-Strong-Cyan' : 'text-White bg-Very-Dark-Cyan']"
              class="active:bg-Button-Active active:text-Very-Dark-Cyan rounded-md px-14 text-2xl text-Grayish-Cyan w-fit">
        10%
      </button>
      <button @click="changeTipPercentage(tipPercentages[2])"
              :class="[selectedTipPercentage === tipPercentages[2] ? 'text-Very-Dark-Cyan bg-Strong-Cyan' : 'text-White bg-Very-Dark-Cyan']"
              class="active:bg-Button-Active active:text-Very-Dark-Cyan rounded-md px-14 text-2xl text-Grayish-Cyan w-fit">
        15%
      </button>
      <button @click="changeTipPercentage(tipPercentages[3])"
              :class="[selectedTipPercentage === tipPercentages[3] ? 'text-Very-Dark-Cyan bg-Strong-Cyan' : 'text-White bg-Very-Dark-Cyan']"
              class="active:bg-Button-Active active:text-Very-Dark-Cyan rounded-md px-14 text-2xl text-Grayish-Cyan w-fit">
        25%
      </button>
      <button @click="changeTipPercentage(tipPercentages[4])"
              :class="[selectedTipPercentage === tipPercentages[4] ? 'text-Very-Dark-Cyan bg-Strong-Cyan' : 'text-White bg-Very-Dark-Cyan']"
              class="active:bg-Button-Active active:text-Very-Dark-Cyan rounded-md px-14 text-2xl text-Grayish-Cyan w-fit">
        50%
      </button>
      <input
          pattern="\d*"
          v-model="selectedTipPercentage"
          class="rounded-md placeholder-Dark-Grayish-Cyan bg-Very-Light-Grayish-Cyan outline-Strong-Cyan text-right px-3 py-2 text-Very-Dark-Cyan caret-Strong-Cyan w-[9.8rem]"
          type="text" placeholder="Custom">
    </div>
  </div>
</template>
