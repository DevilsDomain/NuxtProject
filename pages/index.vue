<script setup>

const { x, y } = useMouseTracker()
const counter = useState('counter', ()=> 0)

function Increment() {
  counter.value++
}
</script>

<template>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <AlertBox type="success">alertbox text</AlertBox>
    <p>Mouse position is at: {{ x }}, {{ y }}</p>
    <div>{{ counter }}</div>
    <button @click="Increment">Increment</button>

  </template>

<style scoped>

</style>