<script setup>
import {computed, defineProps, defineEmits} from "vue";

const props = defineProps(['bill', 'tipPercentage', 'peopleNumber']);
const emit = defineEmits(['reset']);
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});


const tipAmountPerPerson = computed(() => {
  if (props.peopleNumber === 0) return 0;
  return (props.bill * (props.tipPercentage / 100)) / props.peopleNumber || 0
});

const totalPerPerson = computed(() => {
  if (props.peopleNumber === 0) return 0;
  return (props.bill / props.peopleNumber) + tipAmountPerPerson.value || 0;
});

function handleReset() {
  emit('reset');
}

</script>

<template>
  <div class="rounded-2xl bg-Very-Dark-Cyan p-6">
    <div class="flex flex-col justify-between h-full">
      <div>
        <div class="flex justify-between items-center mt-4">
          <div>
            <h1 class="text-White lg:text-2xl">Tip Amount</h1>
            <p class="text-Grayish-Cyan text-sm lg:text-base">/ person</p>
          </div>
          <p class="text-Strong-Cyan text-3xl lg:text-4xl">{{formatter.format(tipAmountPerPerson)}}</p>
        </div>
        <div class="flex justify-between items-center mt-6">
          <div>
            <h1 class="text-White lg:text-2xl">Total</h1>
            <p class="text-Grayish-Cyan text-sm lg:text-base">/ person</p>
          </div>
          <p class="text-Strong-Cyan text-3xl lg:text-4xl">{{formatter.format(totalPerPerson)}}</p>
        </div>
      </div>
      <button @click="handleReset" class='disabled:opacity-10 active:bg-Button-Active rounded py-2 mt-6 bg-Strong-Cyan text-Very-Dark-Cyan text-xl w-full' :disabled="!(props.peopleNumber > 0)">RESET</button>
    </div>

  </div>
</template>
