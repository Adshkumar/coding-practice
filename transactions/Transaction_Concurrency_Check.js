// 2. Transaction Concurrency Check
// Write safeWithdraw(accountId, amount) that:

// . Rejects if another withdrawal is already in progress (simulate lock).

// . Else processes and releases the lock.

const users = [
  { id: 1, name: "Alice", balance: 1000, locked: false },
  { id: 2, name: "Bob", balance: 500, locked: false },
  { id: 3, name: "Charlie", balance: 200, locked: false }
];

function safeWithdraw(accountId, amount){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const account = users.find((a => a.id === accountId));
            if(!account){
                reject("Account Not Found!");
            }else if(account.locked === true){
                reject("Another withdrawal in progress");
            }
            else if(balance<amount){
                account.locked === false;
                reject("Insufficient balance");
            }
            if(account.balance < amount){
                return reject("Insufficient balance");
            }
            account.balance -= amount;
            const chance = Math.random();
            if(chance < 0.7){
                resolve("Withdrawal successful");
            }
            else{
                account.balance +=amount;
                reject("Withdrawal failed, rolled back");
            }
            account.locked = false;
        })
    })
}