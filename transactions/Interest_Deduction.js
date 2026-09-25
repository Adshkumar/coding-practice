// 6. Interest Deduction
// Write deductInterest(accountId, rate) that:

// . Calculates interest = (balance * rate) / 100.

// . Deducts interest from balance.

// . Resolves "Interest deducted: ₹<interest>".


const accounts = [
  { accountId: "A001", holderName: "Adarsh Kumar", balance: 25000 },
  { accountId: "A002", holderName: "Rahul Sharma", balance: 12000 },
  { accountId: "A003", holderName: "Priya Verma", balance: 18000 },
  { accountId: "A004", holderName: "Sneha Singh", balance: 8000 },
];


function deductInterest(accountId, rate){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const account = accounts.find((c)=> c.accountId == accountId);
            if(!account){
                reject("Account Not Found");
            } else{
            const interest  = (account.balance * rate ) / 100;
            account.balance -= interest;
            resolve(`Interest deducted: ₹${interest}`);
            };
        }, 1000);
    });
}

