// Write getTransactionHistory(userId) that:

// . Fetches all transactions for a given user.

// . Returns an array of objects (transactions).

// . If no transactions exist, reject with "No history found".

const transactions = {
  101: [
    { id: 201, amount: 500, type: "Credit", date: "2025-09-01" },
    { id: 202, amount: 200, type: "Debit", date: "2025-09-03" },
    { id: 203, amount: 1500, type: "Credit", date: "2025-09-10" },
  ],
  102: [
    { id: 204, amount: 300, type: "Debit", date: "2025-09-02" },
    { id: 205, amount: 1000, type: "Credit", date: "2025-09-05" },
  ],
  103: [],
};

function getTransactionHistory(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let users = transactions[userId];
      if (users === undefined) {
        reject("History Not Found");
      } else if (users.length == 0) {
        reject("History Not Found");
      } else {
        resolve(users);
      }
    });
  });
}

getTransactionHistory(102)
  .then((rept) => console.log(rept))
  .catch((err) => console.error(err));
