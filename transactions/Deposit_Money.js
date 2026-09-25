// Deposit Money
// Write a function deposit(accountId, amount) that increases balance and resolves with "Deposit successful: new balance ₹...".

const accounts = [
  {
    accountId: "ACC001",
    name: "Adarsh Kumar",
    balance: 12000
  },
  {
    accountId: "ACC002",
    name: "Rohit Sharma",
    balance: 8000
  },
  {
    accountId: "ACC003",
    name: "Priya Singh",
    balance: 15000
  }
];


function deposit(accountId, amount){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let account = accounts.find(acc => acc.accountId === accountId);
            if(account){
                account.balance += amount;
                resolve(`Deposit successful: new balance ₹${account.balance}`);
            }else{
                reject("Account not found");
            }
        }, 1000);
    });
}