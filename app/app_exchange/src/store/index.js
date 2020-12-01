import Vue from 'vue'
import Vuex from 'vuex'
import Currency from '../util/currency'
import Exchange from "../util/exchange";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    amountIn: 0, //сколько отдаем
    amountOut: 0, //сколько получаем
    isProcessing: false, //идет процесс обмена
    currency: [
      {id: 1, text: 'RUB', value: Currency.RUB, img: require('@/assets/rub.png')},
      {id: 2, text: 'USD', value: Currency.USD, img: require('@/assets/usd.png')},
      {id: 3, text: 'BTC', value: Currency.BTC, img: require('@/assets/bnc.png')},
    ], //доступные валютные пары
    selectedInCurrency: Currency.RUB, //какую валюту хочет отдать пользователь
    selectedOutCurrency: Currency.BTC, //какую валюту хочет получить пользователь
    isExchangeSuccess: null, //обмен произведен успешно
    isExchangeFailure: null, //обмен не был произведен
    isUserInputError: null, //пользователь ввел неверные данные или не выбрал валюту для обмена
    
  },
  mutations: {
    setAmountIn(state, payload){
      state.amountIn = payload
    },
    setAmountOut(state, payload){
      state.amountOut = payload
    },
    setIsProcessing(state, payload){
      state.isProcessing = payload
    },
    setSelectedInCurrency(state, payload){
      state.selectedInCurrency = payload
    },
    setSelectedOutCurrency(state, payload){
      state.selectedOutCurrency = payload
    },
    setExchangeSuccess(state, payload){
       state.isExchangeSuccess = payload
    },
    setExchangeFailure(state, payload){
      state.isExchangeFailure = payload
    },
    setIsUserInputError(state, payload){
      state.isUserInputError = payload
    },
  },
  actions: {
    exchange(context){
      //скроем ошибки
      context.commit('setIsUserInputError', false)
      
      if(context.state.selectedInCurrency === context.state.selectedOutCurrency ){
        console.log(`валюты для обмена совпадают`)
        context.commit('setIsUserInputError', true)
        return
      }
      if(context.state.amountIn <= 0){
        console.log(`сумма для обмена меньше либо равна нулю`)
        context.commit('setIsUserInputError', true)
        return
      }
      context.commit('setIsProcessing', true)
      const result = new Exchange(context.state).run()
      result.then(amountOut => {
        context.commit('setAmountOut', amountOut)
        context.commit('setExchangeSuccess', true)
      })
        .catch(err =>{
          console.log(err);
          context.commit('setExchangeFailure', true)
        })
        .finally(() => {
          context.commit('setIsProcessing', false)
          //скроем информационные сообщения
          setTimeout(()=>{
            context.commit('setExchangeSuccess', null)
            context.commit('setExchangeFailure', null)
          },2000)
        })
    },
    swapCurrency({state, commit}) {
      // c = a;
      // a = b;
      // b = c;
      const tmp = state.selectedInCurrency
      commit('setSelectedInCurrency', state.selectedOutCurrency)
      commit('setSelectedOutCurrency', tmp)
    },
  },
  modules: {
  },
})
