// 5. Cashback on Recurring Payment

// Function: recurringPaymentWithCashback(accountId, amount, cashbackPercent, months)

// . Deduct amount every month for months.

// . Each month, credit cashback = amount * cashbackPercent / 100.

// . Reject if balance < amount for any month.

// . Resolve: "Recurring payment complete. Total cashback: ₹<totalCashback>".

const accounts = [
  { accountId: "A001", holderName: "Adarsh Kumar", balance: 25000 },
  { accountId: "A002", holderName: "Rahul Sharma", balance: 12000 },
  { accountId: "A003", holderName: "Priya Verma", balance: 18000 },
  { accountId: "A004", holderName: "Sneha Singh", balance: 8000 }
];


function recurringPaymentWithCashback(accountId, amount, cashbackPercent, months){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const account = accounts.find((a) => a.accountId == accountId);
            if(!account){
                reject("Account Not Found");
                return;
            } 
            let totalCashback = 0;
            for(let month = 1; month <= months; month++){
                if (account.balance < amount) {
                    reject(`Recurring payment failed in month ${month}`);
                    return;
                }
                account.balance -= amount;
                const cashback = amount * cashbackPercent / 100;
                account.balance += cashback;
                totalCashback += cashback;
            }
            resolve(`Recurring payment complete. Total cashback: ₹${totalCashback}`);
        }, 1000);
    });
}

recurringPaymentWithCashback("A001", 2000, 5, 3)
    .then((message) => console.log(message))
    .catch((error) => console.error(error));