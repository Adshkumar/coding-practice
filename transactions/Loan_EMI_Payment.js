// Write a function payEMI(loanId, amount) that:

// . Deducts EMI from account balance if sufficient.

// . If payment done, resolve "EMI paid for loanId".

// . Else reject "Payment failed due to low balance".

const accounts = [
  {
    accountId: "ACC001",
    name: "Adarsh Kumar",
    balance: 12000,
    loanId: "L001",
    type: "Home Loan",
    emiAmount: 2000,
  },
  {
    accountId: "ACC001",
    name: "Adarsh Kumar",
    balance: 12000,
    loanId: "L002",
    type: "Car Loan",
    emiAmount: 3000,
  },
  {
    accountId: "ACC002",
    name: "Ravi Singh",
    balance: 2000,
    loanId: "L003",
    type: "Personal Loan",
    emiAmount: 4000,
  },
  {
    accountId: "ACC003",
    name: "Neha Sharma",
    balance: 25000,
    loanId: "L004",
    type: "Education Loan",
    emiAmount: 7000,
  },
  {
    accountId: "ACC004",
    name: "Amit Verma",
    balance: 8000,
    loanId: "L005",
    type: "Car Loan",
    emiAmount: 9000,
  },
  {
    accountId: "ACC005",
    name: "Priya Mehta",
    balance: 15000,
    loanId: "L006",
    type: "Home Loan",
    emiAmount: 6000,
  },
  {
    accountId: "ACC006",
    name: "Suresh Yadav",
    balance: 7000,
    loanId: "L007",
    type: "Personal Loan",
    emiAmount: 5000,
  },
];


function payEMI(loanId, amount){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const cashcheck = accounts.find((l) => l.loanId === loanId);
            if(cashcheck.emiAmount === amount){
                resolve(`Payment successful for ${loanId}, EMI paid: ${amount}`);
            }else if(loanId.balance <= amount){
                loan.balance -= amount;
                resolve(`EMI paid for ${loanId}🤗`);
            }else{
                reject(`Payment failed for ${loanId}, low balance`);
            }
        }, 1000);
    });
}

payEMI("L001", 2000)
.then(msg => console.log(msg))
.catch(err => console.log(err));

// payEMI("L007", 6000)
// .then(console.log)
// .catch(console.error);;