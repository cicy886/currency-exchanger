export default class CurrencyService {
  static getCurrency(currencyName, amount){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      console.log(request);
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/usd/${currencyName}/${amount}`;
      request.onload = function(){
        if (this.status === 200){
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}