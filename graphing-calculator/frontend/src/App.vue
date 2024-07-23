<template>
  <div id="app">
    <h1>Graphing Calculator</h1>
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