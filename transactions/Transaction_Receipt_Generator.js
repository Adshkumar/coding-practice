// 4. Transaction Receipt Generator
// Write generateReceipt(transactionId) that:

// . Fetches transaction details.

// . Returns an object like:

// {
//   transactionId: 101,
//   type: "Transfer",
//   amount: 5000,
//   status: "Success",
//   timestamp: "2025-09-10T12:30Z"
// }
const transactions = {
  101: { id: 101, amount: 250, type: "Credit", date: "2025-09-12" },
  102: { id: 102, amount: 120, type: "Debit", date: "2025-09-11" },
};

function generateReceipt(transactionId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let txn = transactions[transactionId];
      if (!txn) {
        return { error: "Transaction not found" };
      } else {
        resolve({
          transactionId: transactionId,
          amount: txn.amount,
          type: txn.type,
          date: txn.date,
          status: "Success",
        });
      }
    }, 100);
  });
}

generateReceipt(101).then(receipt => console.log(receipt));
