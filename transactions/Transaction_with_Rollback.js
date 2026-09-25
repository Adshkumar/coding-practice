// 1. Transaction with Rollback (Atomic)
// Write performTransaction(fromId, toId, amount) that:

// . Deducts money from sender.

// . If deduction succeeds but adding to receiver fails → rollback sender’s balance.

// . Resolve "Transaction completed" or reject "Transaction failed, rolled back".


const users = [
  { id: 1, name: "Alice", balance: 1000 },
  { id: 2, name: "Bob", balance: 500 },
  { id: 3, name: "Charlie", balance: 200 }
];



function performTransaction(fromId, toId, amount){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const sender = users.find(u => u.id === fromId);
            const receiver = users.find(u => u.id === toId);
             if (!sender || !receiver) {
        return reject("Invalid sender or receiver");
      }
            if(sender.balance<amount){
                reject(`insufficient balance`);
            }
            sender.balance -=amount;
            const paymentChance = Math.random();
            if(paymentChance < 0.7){
                receiver.balance +=amount;
                resolve(`Transactions completed`);
            }
            else{
                sender.balance +=amount;
                reject("Transaction failed, rolled back");
            }
        }, 1000);
    });
}