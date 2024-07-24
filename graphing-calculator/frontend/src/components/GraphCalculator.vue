<template>
  <div class="graph-calculator">
    <div id="calculator" style="width: 900px; height: 600px;"></div>
  </div>
</template>

<script>
export default {
  name: 'GraphCalculator',
  data() {
    return {
      equation: '',
      calculator: null
    };
  },
  mounted() {
    // Dynamically load the Desmos script
    const script = document.createElement('script');
    script.src = 'https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';
    script.onload = () => {
      this.initializeCalculator();
    };
    document.head.appendChild(script);
  },
  methods: {
    initializeCalculator() {
      const elt = document.getElementById('calculator');
      this.calculator = Desmos.GraphingCalculator(elt);
    },
    plotGraph() {
      if (this.calculator) {
        this.calculator.setExpression({ id: 'graph', latex: this.equation });
      }
    }
  }
};
</script>

<style>
.graph-calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
}
button {
  margin-bottom: 20px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}
</style>
