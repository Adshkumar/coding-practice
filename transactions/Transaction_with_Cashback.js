// 7. Transaction with Cashback
// Write payWithCashback(accountId, amount, cashbackPercent) that:

// . Deducts amount from balance.

// . Adds cashback = amount * cashbackPercent / 100.

// . Resolves "Payment successful, Cashback credited: ₹<cashback>".

const accounts = [
  { accountId: "A001", holderName: "Adarsh Kumar", balance: 25000 },
  { accountId: "A002", holderName: "Rahul Sharma", balance: 12000 },
  { accountId: "A003", holderName: "Priya Verma", balance: 18000 },
  { accountId: "A004", holderName: "Sneha Singh", balance: 8000 },
];


function payWithCashback(accountId, amount, cashbackPercent){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const account = accounts.find((a)=> a.accountId == accountId);
            if(!account){
                reject("Account Not Found");
            } else{
                account.balance -= amount;
                const cashback = (amount * cashbackPercent) / 100;
                account.balance += cashback;
                resolve(`Payment successful, Cashback credited: ₹ ${cashback}`);
            }
        }, 1000);
    });
}