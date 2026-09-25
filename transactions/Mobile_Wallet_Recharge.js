// Write a function rechargeWallet(accountId, amount) that:

// . Uses Math.random() to simulate 80% success.

// . If success → resolves "Recharge of ₹amount successful for number XXXXX".

// . If failure → rejects "Recharge failed. Try again.".

const accounts = [
  { id: 1, balance: 5000 },
  { id: 2, balance: 12000 },
  { id: 3, balance: 0 },
];

function rechargeWallet(accountId, amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const account = accounts.find((acc) => acc.id === accountId);

      if (!account) {
        reject("Account not Found");
      } else if (amount.balance >= amount) {
        amount.balance -= amount;
        resolve(`Withdrawn ₹${amount}, Remaining balance ₹${account.balance}`);
      } else {
        reject("Transaction declined. Insufficient balance");
      }
    }, 2000);
  });
}


rechargeWallet(1, 2000)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));

rechargeWallet(3, 500)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));