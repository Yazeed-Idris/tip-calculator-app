<script setup>
import BillInput from './components/BillInput.vue'
import TipSelector from './components/TipSelector.vue'
import PeopleNumberInput from './components/PeopleNumberInput.vue'
import Results from './components/Results.vue'
</script>

<template>
    <img class="mb-12 lg:mb-20 mx-auto" src="/logo.svg" alt="SPLITTER logo">
  <div class=' shadow-lg rounded-3xl bg-White p-6 lg:p-8'>
    <div class="lg:grid grid-cols-2">
      <div class="lg:mr-10">
      <BillInput />
      <TipSelector class="mt-6 lg:mt-8" />
      <PeopleNumberInput class="mt-6 lg:mt-8" />

      </div>
      <Results class="mt-6 lg:mt-0" />
    </div>

  </div>
</template>

<style scoped>

</style>
