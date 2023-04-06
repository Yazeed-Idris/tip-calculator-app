<script setup>
import {ref} from "vue";

const tipPercentages = [5, 10, 15, 25, 50];

const selectedTipPercentage = ref(0);

const selectTipPercentage = (tipPercentage) => {
  selectedTipPercentage.value = tipPercentage;
}


</script>

<template>
  <div class="transition-all duration-300">
    <label class="text-Dark-Grayish-Cyan">Select Tip %</label>
    <div class="grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-3">
      <button @click="selectTipPercentage(tipPercentages[0])"
              :class="[{'bg-Strong-Cyan': selectedTipPercentage === tipPercentages[0],}, selectedTipPercentage === tipPercentages[0] ? 'text-Very-Dark-Cyan' : 'text-White']"
              class="active:bg-Button-Active active:text-Very-Dark-Cyan bg-Very-Dark-Cyan rounded-md px-16 text-2xl text-Grayish-Cyan w-fit">
        5%
      </button>
      <button @click="selectTipPercentage(tipPercentages[1])"
              :class="[{'bg-Strong-Cyan': selectedTipPercentage === tipPercentages[1],}, selectedTipPercentage === tipPercentages[1] ? 'text-Very-Dark-Cyan' : 'text-White']"
              class="active:bg-Button-Active active:text-Very-Dark-Cyan bg-Very-Dark-Cyan rounded-md px-14 text-2xl text-Grayish-Cyan w-fit">
        10%
      </button>
      <button @click="selectTipPercentage(tipPercentages[2])"
              :class="[{'bg-Strong-Cyan': selectedTipPercentage === tipPercentages[2],}, selectedTipPercentage === tipPercentages[2] ? 'text-Very-Dark-Cyan' : 'text-White']"
              class="active:bg-Button-Active active:text-Very-Dark-Cyan bg-Very-Dark-Cyan rounded-md px-14 text-2xl text-Grayish-Cyan w-fit">
        15%
      </button>
      <button @click="selectTipPercentage(tipPercentages[3])"
              :class="[{'bg-Strong-Cyan': selectedTipPercentage === tipPercentages[3],}, selectedTipPercentage === tipPercentages[3] ? 'text-Very-Dark-Cyan' : 'text-White']"
              class="active:bg-Button-Active active:text-Very-Dark-Cyan bg-Very-Dark-Cyan rounded-md px-14 text-2xl text-Grayish-Cyan w-fit">
        25%
      </button>
      <button @click="selectTipPercentage(tipPercentages[4])"
              :class="[{'bg-Strong-Cyan': selectedTipPercentage === tipPercentages[4],}, selectedTipPercentage === tipPercentages[4] ? 'text-Very-Dark-Cyan' : 'text-White']"
              class="active:bg-Button-Active active:text-Very-Dark-Cyan bg-Very-Dark-Cyan rounded-md px-14 text-2xl text-Grayish-Cyan w-fit">
        50%
      </button>
      <input
          class="rounded-md placeholder-Dark-Grayish-Cyan bg-Very-Light-Grayish-Cyan outline-Strong-Cyan text-right px-3 py-2 text-Very-Dark-Cyan caret-Strong-Cyan w-[9.8rem]"
          type="text" placeholder="Custom">
    </div>
  </div>
</template>
