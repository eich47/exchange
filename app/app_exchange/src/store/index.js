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
      {id: 1, text: 'RUB', value: Currency.RUB, img: require('@/assets/rub.jpg')},
      {id: 2, text: 'USD', value: Currency.USD, img: require('@/assets/usd.jpg')},
      {id: 3, text: 'BTC', value: Currency.BTC, img: require('@/assets/bnc.png')},
    ], //доступные валютные пары
    selectedInCurrency: Currency.RUB, //какую валюту хочет отдать пользователь
    selectedOutCurrency: Currency.BTC, //какую валюту хочет получить пользователь
    isExchangeSuccess: null, //обмен произведен успешно
    isExchangeFailure: null, //обмен не был произведен
    
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
  },
  actions: {
    exchange(context){
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
        })
    },
  },
  modules: {
  },
})
