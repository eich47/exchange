<template>
  <div>
    <button class="btn"
            type="submit"
            disabled="isDisabled"
    >Обменять</button>
  </div>
</template>

<script>
  export default {
    name: "CalculatorButtonExchange",
    props:{
      isDisabled: {
        type: Boolean,
        required: true,
      },
    },
  }
</script>

<style scoped>
 .bg-color{
     background: linear-gradient(140.59deg, #562EC2 29.59%, #A07EFE 73.59%);
     opacity: 0.8;
     border-radius: 9px;
 }
</style>