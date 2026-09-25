// 4. Overdraft Facility
// Write withdrawWithOverdraft(accountId, amount) that:

// . Allows withdrawal up to balance + overdraftLimit (e.g., ₹5000).

// . If exceeds → reject "Overdraft limit exceeded".

// . Else resolve "Withdrawal successful with overdraft".

const overdraft = [
  {
    accountId: "A001",
    holderName: "Adarsh Kumar",
    balance: 20000,
    overdraftLimit: 5000,
  },
  {
    accountId: "A002",
    holderName: "Rahul Sharma",
    balance: 15000,
    overdraftLimit: 5000,
  },
  {
    accountId: "A003",
    holderName: "Priya Verma",
    balance: 30000,
    overdraftLimit: 5000,
  },
  {
    accountId: "A004",
    holderName: "Sneha Singh",
    balance: 10000,
    overdraftLimit: 5000,
  },
];

function withdrawWithOverdraft(accountId, amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const draft = overdraft.find((c) => c.accountId == accountId);
      if (!draft) {
        reject(`Account Not Found`);
        return;
      }
      maxwithdraw = draft.balance + draft.overdraftLimit;
      if (amount > maxwithdraw) {
        reject(`Overdraft limit exceeded`);
      } else {
        draft.balance -= amount;
        if (draft.balance < 0) {
          resolve("Withdrawal successful with overdraft");
        } else {
          resolve("Withdrawal successful");
        }
      }
    }, 1000);
  });
}


withdrawWithOverdraft("A001", 18000)
  .then(console.log) // "Withdrawal successful"
  .catch(console.error);

withdrawWithOverdraft("A001", 22000)
  .then(console.log) // "Withdrawal successful with overdraft"
  .catch(console.error);

withdrawWithOverdraft("A001", 26000)
  .then(console.log) 
  .catch(console.error); // "Overdraft limit exceeded"

withdrawWithOverdraft("A009", 1000)
  .then(console.log) 
  .catch(console.error); // "Account Not Found"
