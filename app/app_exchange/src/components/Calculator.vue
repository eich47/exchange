<template>
  <b-container fluid="true">
    <b-row>
      <b-col>
        <b-form>
          <div class="row align-items-end">
            <div class="col-auto border-bottom pr-0">
              <CalculatorPart
                id="12345"
                label="Сумма"
                title="Вы отдаете"
                :amount="count"
                :options="options"
                labelCurrency=""
                title-commission="131231212"
              />
            </div>
            <div class="col-auto border-bottom pb-3 pl-0">
              <CalculatorSelect/>
            </div>
            <div class="col-auto pb-4">
              <CalculatorSwap/>
            </div>

          </div>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CalculatorPart from './CalculatorPart'
import CalculatorSelect from "./CalculatorSelect";
import CalculatorSwap from "./CalculatorSwap";
export default {
  name: 'Calculator',
  components: {CalculatorSwap, CalculatorSelect, CalculatorPart},
  computed: {
    options(){
      return [
        {value: 1, html: '<span class="icon-currency"><img src="/static/rub.jpg">RUB</span>' },
        {value: 2, text: 'USD'},
        {value: 3, text: 'EUR'},
      ]
    },
    count(){
      return 123.12
    },
  },
}
</script>

<style scoped >
  .icon-currency{
    /*background: url("/rub.jpg") no-repeat;*/
    /*color: red;*/
  }
</style>
