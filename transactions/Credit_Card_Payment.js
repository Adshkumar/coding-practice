// Credit Card Payment
// Write a function payCreditCard(cardNo, amount) that:

// . Uses random chance to simulate payment gateway timeout/failure.

// . If success → resolve "Payment of ₹amount to Card XXXX done".

// . If failure → reject "Payment failed. Please retry.".


const creditCards = [
    {
      "cardNo": "4111111111111111",
      "holderName": "Adarsh Kumar",
      "limit": 100000,
      "dueAmount": 15000
    },
    {
      "cardNo": "5500000000000004",
      "holderName": "Rahul Sharma",
      "limit": 80000,
      "dueAmount": 22000
    },
    {
      "cardNo": "340000000000009",
      "holderName": "Priya Verma",
      "limit": 120000,
      "dueAmount": 5000
    },
    {
      "cardNo": "6011000000000004",
      "holderName": "Sneha Singh",
      "limit": 60000,
      "dueAmount": 30000
    }
  ];

function payCreditCard(cardNo, amount){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const card = creditCards.find((c) => c.cardNo === cardNo);
            const last4 = card.cardNo.slice(-4);
            const random = Math.random() > 0.7;
            if(!random){
                reject("Card failure");
            } else if
        })
    })
}

