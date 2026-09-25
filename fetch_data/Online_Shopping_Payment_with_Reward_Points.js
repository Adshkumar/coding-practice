// 2. Online Shopping Payment with Reward Points

// Problem Statement:

// . Write a function makePaymentWithReward(accountId, amount) that:

// . Deducts the purchase amount from the account balance.

// . Simulates a 90% success rate using Math.random().

// If successful:

// . Adds 2% of the purchase amount as reward points to a rewardPoints field in the account.

// . Resolves: "Payment successful: ₹<amount>. Reward points <points> added. Remaining balance ₹<balance>".

// . If failed, rejects: "Payment failed. Please try again.".

// . Rejects immediately if balance is insufficient.

const accounts = [
  { "accountId": "A001", "holderName": "Adarsh Kumar", "balance": 25000, "rewardPoints": 500 },
  { "accountId": "A002", "holderName": "Rahul Sharma", "balance": 12000, "rewardPoints": 200 },
  { "accountId": "A003", "holderName": "Priya Verma", "balance": 18000, "rewardPoints": 300 },
  { "accountId": "A004", "holderName": "Sneha Singh", "balance": 8000, "rewardPoints": 100 }
]

function makePaymentWithReward(accountId, amount){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const account = accounts.find((acc)=> acc.accountId == accountId);
            if(!account){
                reject("Account Not Found");
                return;
            } if(account.balance < amount){
                reject("Insufficient balance");
                return;
            }
            account.balance -= amount;
            const success = Math.random() < 0.9;
            if(success){
                const points = amount * 2 / 100;
                account.rewardPoints += points;
                resolve(`Payment successful: ₹${amount}. Reward points ${points} added. Remaining balance ₹${account.balance}`); 
            } else {
                reject("Payment failed. Please try again.");
            } 
        })
    })
}