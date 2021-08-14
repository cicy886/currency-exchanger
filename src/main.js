import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service.js';

$(document).ready(function() {
  $('#currencyExchange').click(function(){
    let currencyName = $('#anotherCurrency').val();
    let amount = $('#amount').val();
    let promise = CurrencyService.getCurrency(currencyName,amount);
    promise.then(function(response){
      const body = JSON.parse(response);
      $('.showCurrency').text(`You want to exchange ${amount} USD to ${currencyName}, the converstion result is ${body.conversion_result}.`);
    }, function (error){
      $('showErrors').text(`There was an error processing your request : ${error}`);
    });
  });
});
