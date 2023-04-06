<script setup>
import BillInput from './components/BillInput.vue'
import TipSelector from './components/TipSelector.vue'
import PeopleNumberInput from './components/PeopleNumberInput.vue'
import Results from './components/Results.vue'
import {ref} from "vue";

const billAmount = ref(0);
const tipPercentage = ref(0);
const peopleNumber = ref(0);

function handleBillChanged(newBillAmount) {
  billAmount.value = newBillAmount;
}

function handleTipPercentageChanged(newTipPercentage) {
  tipPercentage.value = newTipPercentage;
}

function handlePeopleNumberChanged(newPeopleNumber) {
  peopleNumber.value = newPeopleNumber;
}

function handleReset() {
  billAmount.value = 0;
  tipPercentage.value = 0;
  peopleNumber.value = 0;
}

</script>

<template>
    <img class="my-12 lg:mb-20 mx-auto" src="/logo.svg" alt="SPLITTER logo">
  <div class=' shadow-lg rounded-3xl bg-White p-6 lg:p-8'>
    <div class="lg:grid grid-cols-2">
      <div class="lg:mr-10">
      <BillInput @billChanged="handleBillChanged($event)" :bill="billAmount" />
      <TipSelector @tipPercentageChanged="handleTipPercentageChanged($event)" :tip-percentage="tipPercentage" class="mt-6 lg:mt-8" />
      <PeopleNumberInput @peopleNumberChanged="handlePeopleNumberChanged($event)" :people-number="peopleNumber" class="mt-6 lg:mt-8" />

      </div>
      <Results @reset="handleReset" :bill="billAmount" :tip-percentage="tipPercentage" :people-number="peopleNumber" class="mt-6 lg:mt-0" />
    </div>

  </div>
</template>

<style scoped>

</style>
