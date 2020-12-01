<template>
  <b-container :fluid="true">
    <b-row>
      <b-col>
        <span class="d-block min-height"
              :class="{'text-success': infoMessage.success, 'text-danger': !infoMessage.success}"
        >{{infoMessage.text}}</span>

        <b-form @submit.prevent="onSubmit">
          <div class="row align-items-end">
            <!--            блок отдает-->
            <div class="col-sm-12 col-md-5 col-lg-4 border-bottom pr-0 pl-0">

              <div class="d-flex align-items-end mb-5 pl-3">
                <h3 class="h6 font-weight-bold mb-0 mr-2">
                  Вы отдаете
                </h3>
              </div>

              <div class="row align-items-end no-gutters">
                <div class="col-6">
                  <CalculatorPart
                    id="12345"
                    label="Сумма"
                    title="Вы отдаете"
                    :amount="countIn"
                    :options="options"
                    labelCurrency=""
                    title-commission=""
                    :selected="selectedIn"
                    @input="onInputIn"
                  /></div>
                <div class="col-6 pb-3">
                  <CalculatorSelect
                    :options="options"
                    :selected="selectedIn"
                    @onSelectCurrency="onSelectCurrencyIn"
                  /></div>
              </div>

            </div>
            <!--блок swap-->
            <div class="col-sm-12 my-sm-3 my-md-0 col-md-2  pb-4 px-5 px-md-4" >
              <CalculatorSwap/>
            </div>


            <!--            блок получает-->
            <div class="col-sm-12 col-md-5 col-lg-4 border-bottom pr-0 pl-0">

              <div class="d-flex align-items-end mb-5 pl-3">
                <h3 class="h6  font-weight-bold mb-0 mr-2">
                  Вы получаете
                </h3>
                <small class="text-muted ">с учетом комиссии ПС (0.5%)</small>
              </div>

              <div class="row align-items-end no-gutters">
                <div class="col-6 pl-0">
                  <CalculatorPart
                    id="8768678"
                    label="Сумма"
                    title="Вы получаете"
                    :amount="countOut"
                    :options="options"
                    labelCurrency=""
                    :disabled="true"
                  /></div>
                <div class="col-6 pb-3"><CalculatorSelect
                  :options="options"
                  :selected="selectedOut"
                  @onSelectCurrency="onSelectCurrencyOut"
                /></div>
              </div>
            </div>
            

            <!--            блок кнопки-->
            <div class="col-sm-auto col-lg-2 mx-auto mx-lg-0 ml-lg-auto mt-3 mt-lg-0">
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
    infoMessage(){
      if(this.$store.state.isProcessing){
        return {
         text: `обработка обмена...(курс обмена вымышленный)`,
         success: true,
        }
      }
      if(this.$store.state.isExchangeSuccess){
        return {
          text:`обмен совершен успешно`,
          success: true,
        }
      }
      if(this.$store.state.isExchangeFailure){
        return {
          text: `произошла ошибка при попытке обмена`,
          success: false,
        }
      }
      if(this.$store.state.isUserInputError){
        return {
          text: `введите сумму и выберите валюту для обмена`,
          success: false,
        }
      }
      return ``
    },
  },
  methods:{
    onSelectCurrencyIn(selected){
      this.$store.commit('setSelectedInCurrency', selected)
    },
    onSelectCurrencyOut(selected){
      this.$store.commit('setSelectedOutCurrency', selected)
    },
    onInputIn(num){
      const numReplacedComma = num.replace(',', '.')
      const withoutSymbol = numReplacedComma.replace(/[^0-9.]/g, "")
      const checkNumber = Number(withoutSymbol)
      const res = isNaN(checkNumber) ? 0 : checkNumber
      this.$store.commit('setAmountIn', res)
    },
    onSubmit(){
      this.$store.dispatch('exchange')
    },
  },
}
</script>

<style scoped >
  .min-height{
    min-height: 1.5rem;
  }
</style>
