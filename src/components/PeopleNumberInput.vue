<script setup>
import {ref, defineEmits, watch, defineProps} from "vue";
const props = defineProps(['peopleNumber']);
const emit = defineEmits(['peopleNumberChanged']);
const peopleNumber = ref(0);

watch(() => props.peopleNumber, (newValue) => {
  peopleNumber.value = newValue;
});

watch(peopleNumber, (newValue, oldValue) => {

  if (newValue < 0 || isNaN(newValue)) {
    peopleNumber.value = oldValue;
    return;
  }

  if (newValue === '') {
    peopleNumber.value = 0;
    emit('peopleNumberChanged', 0);
    return;
  }
  peopleNumber.value = newValue;
  emit('peopleNumberChanged', newValue);
});


</script>

<template>
  <div>
    <label class="text-Dark-Grayish-Cyan" for="numberOfPeople">
     Number of People
    </label>
    <div class="relative mt-2">
      <img class="object-contain absolute top-1/2 -translate-y-1/2 left-3" src="/icon-person.svg" alt="person icon">
      <input pattern="\*d" v-model="peopleNumber" class="rounded bg-Very-Light-Grayish-Cyan outline-Strong-Cyan text-right px-3 py-2 text-Very-Dark-Cyan caret-Strong-Cyan w-full" type="text" id="numberOfPeople" name="numberOfPeople">
    </div>
  </div>
</template>
