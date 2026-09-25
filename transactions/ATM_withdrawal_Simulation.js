// Write a function withdrawCash(accountId, amount) that:

// . Checks if balance is sufficient.

// . If yes, deducts and resolves "Withdrawn ₹amount, Remaining balance ₹...".

// . If no, rejects "Transaction declined. Insufficient balance".


const accounts = [
  {
    "accountId": "ACC1001",
    "name": "Adarsh Kumar",
    "balance": 5000
  },
  {
    "accountId": "ACC1002",
    "name": "Rahul Sharma",
    "balance": 1200
  },
  {
    "accountId": "ACC1003",
    "name": "Priya Verma",
    "balance": 300
  },
  {
    "accountId": "ACC1004",
    "name": "Sneha Singh",
    "balance": 10000
  }
];

function withdrawCash(accountId, amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const account = accounts.find((acc) => acc.accountId === accountId);
      if (!account) {
        reject("Account Not Found");
        return;
      }

      if (account.balance >= amount) {
        account.balance -= amount;
        resolve(`Withdrawn ₹${amount}, Remaining balance ₹${account.balance}`);
      } else {
        reject("Transaction declined. Insufficient balance");
      }
    }, 1000);
  });
}

withdrawCash("ACC1001", 5000)
  .then(msg => console.log(msg))
  .catch(error => console.log(error));


