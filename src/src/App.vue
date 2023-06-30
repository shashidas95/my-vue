<template>
  <h1>{{ course.name }}</h1>
  <h1>course by: {{ course.mentor }}</h1>
  <h1>platform  {{ course.platform }}</h1>
  <button @click="count++">+</button>
  <h1>{{ count }}</h1>
  <button @click="count--">-</button>
</template>

<script setup>
import { ref, reactive } from 'vue'
let count = ref(0)
count.value = 10
let course = reactive({
  name: 'vue js masterclass',
  mentor: 'shashi',
  platform: 'online',
})
course.name = 'vue js 3 masterclass'
</script>
