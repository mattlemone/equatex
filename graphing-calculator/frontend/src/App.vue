<template>
  <div id="app">
    <h1 class ="title">Graphx</h1>
    <GraphCalculator />
  </div>
</template>

<script>
import GraphCalculator from './components/GraphCalculator.vue'

export default {
  name: 'App',
  components: {
    GraphCalculator
  }
}
</script>

<style>
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>