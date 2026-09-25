// 5. Standing Instruction (Auto Payment)
// Write autoPay(accountId, loanId, amount) that:

// . Runs automatically every month.

// . Deducts EMI from account.

// . Reject if insufficient funds → "AutoPay failed".

// . Else resolve "AutoPay success for loan <loanId>".

const accounts = [
  { accountId: "A001", holderName: "Adarsh Kumar", balance: 25000 },
  { accountId: "A002", holderName: "Rahul Sharma", balance: 12000 },
  { accountId: "A003", holderName: "Priya Verma", balance: 18000 },
  { accountId: "A004", holderName: "Sneha Singh", balance: 8000 },
];

const loans = [
  {
    loanId: "L001",
    borrowerName: "Adarsh Kumar",
    EMI: 5000,
    outstanding: 45000,
  },
  {
    loanId: "L002",
    borrowerName: "Rahul Sharma",
    EMI: 4000,
    outstanding: 20000,
  },
  {
    loanId: "L003",
    borrowerName: "Priya Verma",
    EMI: 6000,
    outstanding: 30000,
  },
  {
    loanId: "L004",
    borrowerName: "Sneha Singh",
    EMI: 3500,
    outstanding: 15000,
  },
];

function autoPay(accountId, loanId, amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const account = accounts.find((c) => c.accountId == accountId);
      const loan = loans.find((e) => e.loanId == loanId);
      if (!account || !loan) {
        reject("Account or Loan Not Found!");
      }
      if (account.balance < loan.EMI) {
        reject("Autopay failed");
      } else {
        account.balance -= loan.EMI;
        loan.outstanding -= loan.EMI;
        resolve(`AutoPay success for loan ${loan.loanId}`);
      }
    }, 1000);
  });
}
