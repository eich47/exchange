<template>
  <div>
    <div class="image-swap text-center"
         @click="onClick"
    >
      <img :src="require('@/assets/arrows.jpg')" alt="поменять местами">
    </div>
  </div>
</template>

<script>
  export default {
    name: "CalculatorSwap",
    methods: {
      onClick() {
        this.$store.dispatch('swapCurrency')
      },
    },
  }
</script>

<style scoped>
  .image-swap{
    cursor: pointer;
  }
</style>