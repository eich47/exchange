import Vue from 'vue'
import Vuex from 'vuex'
import Currency from '../util/currency'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    amountIn: 0, //сколько отдаем
    amountOut: 0, //сколько получаем
    isProcessing: false, //идет процесс обмена
    currency: [
      {id: 1, text: 'RUB', value: Currency.RUB, img: require('@/assets/rub.jpg')},
      {id: 2, text: 'USD', value: Currency.USD, img: require('@/assets/usd.jpg')},
      {id: 3, text: 'BTC', value: Currency.BTC, img: require('@/assets/bnc.png')},
    ], //доступные валютные пары
    selectedInCurrency: Currency.RUB, //какую валюту хочет отдать пользователь
    selectedOutCurrency: Currency.BTC, //какую валюту хочет получить пользователь
    
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
  },
  actions: {
  },
  modules: {
  },
})
