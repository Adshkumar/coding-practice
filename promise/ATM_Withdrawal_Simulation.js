// 🏧 Task 7: ATM Withdrawal Simulation
// Objective:
// Simulate cash withdrawal from an ATM.

// Instructions:
// . Function: withdraw(amount, balance)

// . Delay: 2 sec

// . If amount <= balance:

// . ✅ Resolve: "Withdrawal of ₹${amount} successful. Remaining: ₹${balance - amount}"

// . Else:

// . ❌ Reject: "Insufficient balance."


function withdraw(amount, balance) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount <= balance) {
                resolve(`Withdrawal of ₹${amount} successful. Remaining: ₹${balance - amount}`);
            }
            else {
                reject(`Insufficient balance`);
            }
        }, 2000);
    });
}