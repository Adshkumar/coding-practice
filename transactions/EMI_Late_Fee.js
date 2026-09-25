// Write payEMIwithLateFee(loanId, amount, daysLate) that:

// If daysLate > 0 → add lateFee = daysLate * 100.

// Deduct (emiAmount + lateFee) from balance.

// Resolve "EMI paid with late fee of ₹<lateFee>".

const accounts = [
    { accountId: "A001", holderName: "Adarsh Kumar", balance: 25000 },
    { accountId: "A002", holderName: "Rahul Sharma", balance: 12000 },
    { accountId: "A003", holderName: "Priya Verma", balance: 18000 },
    { accountId: "A004", holderName: "Sneha Singh", balance: 8000 }
];

const loans = [
    { loanId: "L001", accountId: "A001", emiAmount: 5000 },
    { loanId: "L002", accountId: "A002", emiAmount: 3000 },
    { loanId: "L003", accountId: "A003", emiAmount: 4000 },
    { loanId: "L004", accountId: "A004", emiAmount: 2000 }
];

function payEMIwithLateFee(loanId, amount, daysLate){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const account = accounts.find((l)=> l.accountId == accountId);
            if(!account){
                reject("Account Not Found");
            };
            const loan = loans.find((lo)=> lo.loanId == loanId);
            if(!loanId){
                reject("Loan Not Found");
            };
        })
    })
}