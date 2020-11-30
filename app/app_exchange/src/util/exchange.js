export default class Exchange {
  
  constructor({selectedInCurrency,
                selectedOutCurrency,
                amountIn,
  }){
    this.fromCurrency = selectedInCurrency
    this.toCurrency = selectedOutCurrency
    this.amount = amountIn
  }
  
  run(){
    const rate = this.getExchangeRate()
    rate.then(result => {
      const amountOut = this.amount * result
      return amountOut
    })
      .catch(error => {
        return error
      })
  }
  
  /**
   * как бы делает запрос на api
   */
  getExchangeRate(){
    new Promise(((resolve, reject) => {
      setTimeout(()=>{
        const res = this.requestToApi(this.fromCurrency, this.toCurrency)
        if (res !== undefined){
          resolve(res)
        } else {
          reject(new Error(`не удалось определить курс для пары '${this.fromCurrency}${this.toCurrency}'`))
        }
        
      }, 2000)
    }))
  }
  
  requestToApi(fromCurrency, toCurrency){
    const rate = new Map()
    rate.set('12', 2)
    rate.set('13', 5)
    rate.set('21', 5)
    rate.set('23', 7)
    rate.set('31', 10)
    rate.set('32', 11)
    
    const key = `${fromCurrency}${toCurrency}`
    const res = rate.get(key)
    
    return res;
    
    
  
  
  
  }
}