// Objective:

// Convert currency if exchange service is available.

// Instructions:
// . exchangeCurrency(amount, serviceAvailable)
// . If serviceAvailable is true
// . resolve "Currency Exchanged Successfully"
// . Else
// . reject "Exchange Service Unavailable"



const currencyExchangeRequests = [
  {
    amount: 5000,
    serviceAvailable: true
  },
  {
    amount: 12000,
    serviceAvailable: false
  },
  {
    amount: 7500,
    serviceAvailable: true
  },
  {
    amount: 20000,
    serviceAvailable: false
  },
  {
    amount: 1500,
    serviceAvailable: true
  }
];

function exchangeCurrency(amount, serviceAvailable) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (serviceAvailable) {
                resolve("Currency Exchanged Successfully");
            } else {
                reject("Exchange Service Unavailable");
            }
        }, 2000);
    });
}