fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=c41ae5f89ffe40e985eaaeb5ca542a47").then((result) => {
  let myData = result.json()
  return myData
}).then((currency) => {
  let amount = document.querySelector(".amount")
  let egp = document.querySelector(".egp span")
  let sar = document.querySelector(".sar span")
  let qar = document.querySelector(".qar span")

  egp.innerHTML = Math.round(amount.innerHTML * currency.rates["EGP"])
  sar.innerHTML = Math.round(amount.innerHTML * currency.rates["SAR"])
  qar.innerHTML = Math.round(amount.innerHTML * currency.rates["QAR"])
})