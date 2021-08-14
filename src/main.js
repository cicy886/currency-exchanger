import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service.js';

$(document).ready(function() {
  $('#currencyExchange').click(function(){
    let currencyName = $('#anotherCurrency').val();
    let amount = $('#amount').val();
  });
});
