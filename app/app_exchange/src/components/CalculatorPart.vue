<template>
  <div class="amount-part">


    <b-form-group
      :label="label"
      :id="id"
      label-align="left"
      class="amount-group-input"
    >
      <b-form-input
        :id="id"
        :value="amount"
        type="text"
        :trim="true"
        class="border-0"
        :class="{'bg-white': disabled}"
        @input="$emit('input', $event)"
        :formatter="formatter"
        :disabled="disabled"

      ></b-form-input>
    </b-form-group>

  </div>
</template>

<script>
export default {
  name: 'CalculatorPart',
  props: {
    amount: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    labelCurrency: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      data: 0,
      selected: 1,
    }
  },
  computed: {},
  methods: {
    formatter(value){
      return value.replace(/[^0-9.,]+/g, "")
    },
  },
}
</script>

<style>
  .amount-group-input > legend{
    padding-left: 1rem;
    color: #6c757d;
  }
  .amount-group-input > div{
    position: relative;
  }
  .amount-group-input > div::after{
    content: "";
    position: absolute;
    right: 1px;
    top: 0;
    height: 100%;
    border-left: 1px solid #dee2e6;
  }
  .form-group{
    margin-bottom: 0;
  }
</style>
