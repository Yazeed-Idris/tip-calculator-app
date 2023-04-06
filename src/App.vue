<script setup>
import BillInput from './components/BillInput.vue'
import TipSelector from './components/TipSelector.vue'
import PeopleNumberInput from './components/PeopleNumberInput.vue'
import Results from './components/Results.vue'
</script>

<template>
    <img class="mb-12 mx-auto" src="/logo.svg" alt="SPLITTER logo">
  <div class='container shadow-lg rounded-3xl bg-White p-6'>
    <BillInput />
    <TipSelector />
  </div>
</template>

<style scoped>

</style>
