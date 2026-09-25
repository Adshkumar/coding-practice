// 1. Credit Card Bill Payment
// Write a function payCreditCard(accountId, billAmount) that:

// . Rejects if balance < billAmount.

// . Deducts balance and resolves "Credit Card bill paid: ₹<billAmount>".

// . Else reject "Payment failed: Low balance".


const CreditCard = [
  {
    "cardNo": "4111111111111111",
    "holderName": "Adarsh Kumar",
    "balance": 100000,
    "dueAmount": 15000
  },
  {
    "cardNo": "5500000000000004",
    "holderName": "Rahul Sharma",
    "balance": 80000,
    "dueAmount": 22000
  },
  {
    "cardNo": "340000000000009",
    "holderName": "Priya Verma",
    "balance": 120000,
    "dueAmount": 5000
  },
  {
    "cardNo": "6011000000000004",
    "holderName": "Sneha Singh",
    "balance": 60000,
    "dueAmount": 30000
  }
]

function payCreditCard(cardNo, billAmount){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const card = CreditCard.find((c) => c.cardNo === cardNo);
            if(!card){
                reject(`Card not found`);
            }
            if(card.balance < billAmount){
                reject(`Payment failed: Low balance`);
            }
            else{
                card.balance -= billAmount;
                resolve(`Credit Card bill paid: ₹${billAmount}`);
            }
        }, 2000);
    });
}

