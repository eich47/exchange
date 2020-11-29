<template>
  <div class="amount-part">
    <div class="d-flex align-items-end mb-5 pl-3">
      <h3 class="h5 font-weight-bold mb-0 mr-2">
        {{ title }}
      </h3>
      <small class="text-muted ">{{ titleCommission }}</small>
    </div>

    <b-form-group
      :label="label"
      :id="id"
      label-align="left"
      class="amount-group-input"
    >
      <b-form-input
        :id="id"
        v-model="amount"
        type="text"
        trim
        class="border-0"
      ></b-form-input>
    </b-form-group>

  </div>
</template>

<script>
export default {
  name: 'CalculatorPart',
  props: {
    title: {
      type: String,
      required: true,
    },
    titleCommission: {
      type: String,
      required: false,
    },
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
  },
  data() {
    return {
      data: 0,
      selected: 1,
    }
  },
  computed: {},
  methods: {
    onSubmit() {},
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
    right: 0;
    top: 0;
    height: 100%;
    border-left: 1px solid #dee2e6;
  }
</style>
