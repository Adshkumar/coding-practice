// Write splitPayment(accountId, merchants, amounts) that:

// Deducts multiple amounts for different merchants in one go.

// Reject if total > balance.

// Else resolve "Payments successful to all merchants".

const accounts = [
    { accountId: "A001", holderName: "Adarsh Kumar", balance: 25000 },
    { accountId: "A002", holderName: "Rahul Sharma", balance: 12000 },
    { accountId: "A003", holderName: "Priya Verma", balance: 18000 },
    { accountId: "A004", holderName: "Sneha Singh", balance: 8000 }
];

function splitPayment(accountId, merchants, amounts){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const account = accounts.find((a) => a.accountId == accountId);
            if(!account){
                reject("Account Not Found");
                return;
            }
            const totalAmount = amounts.reduce((sum, amt) => sum + amt, 0);
            if(account.balance < totalAmount){
                reject("Insufficient Balance");
                return;
            }
            for(let i=0; i < merchants.length; i++){
                account.balance -= amounts[i];
            }
            resolve("Payments successful to all merchants");
        }, 1000);
    });
}