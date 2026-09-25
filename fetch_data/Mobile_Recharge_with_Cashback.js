// 1. Mobile Recharge with Cashback

// . Write a function rechargeWithCashback(accountId, amount) that:

// . Deducts the recharge amount from the account balance.

// . Simulates 80% success using Math.random().

// . If successful, adds 5% cashback to the account balance.

// . Resolves "Recharge successful: ₹<amount>. Cashback ₹<cashback> added. Remaining balance ₹<balance>".

// . If failed, rejects "Recharge failed. Try again.".


  const accounts =  [
    { "accountId": "A001", "holderName": "Adarsh Kumar", "balance": 25000 },
    { "accountId": "A002", "holderName": "Rahul Sharma", "balance": 12000 },
    { "accountId": "A003", "holderName": "Priya Verma", "balance": 18000 },
    { "accountId": "A004", "holderName": "Sneha Singh", "balance": 8000 }
  ]

  function rechargeWithCashback(accountId, amount){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const account = arguments.find((acc)=> acc.accountId == accountId);
            if(!accountId){
                reject("Account Not Found");
                return;
            } 
            if(account.balance < amount){
                 reject("Insufficient balance");
                 return;
            }

            account.balance -= amount;
            const success = Math.random() < 0.8;

            if(success){
                const cashback = amount * 0.05;
                account.balance += cashback;
                resolve(`Recharge successful: ₹${amount}. Cashback ₹${cashback} added. Remaining balance ₹${account.balance}`);
            } else{
                 reject("Recharge failed. Try again.");
            }
        }, 1000);
    });
  }