<template>
  <b-container fluid="true">
    <b-row>
      <b-col>
        <b-form>
          <div class="row align-items-end">
            <!--            блок отдает-->
            <div class="col-auto border-bottom pr-0">
              <CalculatorPart
                id="12345"
                label="Сумма"
                title="Вы отдаете"
                :amount="countIn"
                :options="options"
                labelCurrency=""
                title-commission=""
                :selected="selectedIn"
              />
            </div>
            <div class="col-auto border-bottom pb-3 pl-0">
              <CalculatorSelect
                :options="options"
                :selected="selectedIn"
                @onSelectCurrency="onSelectCurrencyIn"
              />
            </div>
            <div class="col-auto pb-4">
              <CalculatorSwap/>
            </div>


            <!--            блок получает-->
            <div class="col-auto border-bottom pr-0">
              <CalculatorPart
                id="8768678"
                label="Сумма"
                title="Вы получаете"
                :amount="countOut"
                :options="options"
                labelCurrency=""
                :title-commission="'с учетом комиссии ПС (0.5%)'"
              />
            </div>
            <div class="col-auto border-bottom pb-3 pl-0">
              <CalculatorSelect
                :options="options"
                :selected="selectedOut"
                @onSelectCurrency="onSelectCurrencyOut"
              />
            </div>

            <!--            блок кнопки-->
            <div class="col-auto">
              <CalculatorButtonExchange
                :isDisabled="isDisabled"
              />
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
import CalculatorButtonExchange from "./CalculatorButtonExchange";
export default {
  name: 'Calculator',
  components: {CalculatorButtonExchange, CalculatorSwap, CalculatorSelect, CalculatorPart},
  computed: {
    options(){
      return this.$store.state.currency
    },
    countOut(){
      return this.$store.state.amountOut
    },
    countIn(){
      return this.$store.state.amountIn
    },
    isDisabled(){
      return false
    },
    selectedIn(){
      return this.$store.state.selectedInCurrency
    },
    selectedOut(){
      return this.$store.state.selectedOutCurrency
    },
  },
  methods:{
    onSelectCurrencyIn(selected){
      this.$store.commit('setSelectedInCurrency', selected)
    },
    onSelectCurrencyOut(selected){
      this.$store.commit('setSelectedOutCurrency', selected)
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
