// 3. Loan Prepayment
// Write prepayLoan(loanId, amount) that:

// . Reject if amount < EMI.

// . If amount >= total outstanding → resolve "Loan fully paid".

// . Else deduct partial amount and resolve "Partial prepayment successful".


const loanbill = [
  {
    "loanId": "L001",
    "borrowerName": "Adarsh Kumar",
    "totalOutstanding": 50000,
    "EMI": 5000
  },
  {
    "loanId": "L002",
    "borrowerName": "Rahul Sharma",
    "totalOutstanding": 30000,
    "EMI": 3000
  },
  {
    "loanId": "L003",
    "borrowerName": "Priya Verma",
    "totalOutstanding": 75000,
    "EMI": 7000
  },
  {
    "loanId": "L004",
    "borrowerName": "Sneha Singh",
    "totalOutstanding": 60000,
    "EMI": 6000
  }
]


function prepayLoan(loanId, amount){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
          const bill = loanbill.find((c)=> c.loanId == loanId);
            if(!bill){
                reject(`Loan Not Found`);
            }
           else if(amount < EMI){
              reject(`Payment failed: Low balance`);
            }
            else if(amount >= bill.totalOutstanding){
              resolve("Loan fully paid");
            }
            else{
              bill.totalOutstanding -=amount;
                resolve("Partial prepayment successful");
            }
        }, 2000);
    });
}