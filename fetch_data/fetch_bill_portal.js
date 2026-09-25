// 🧾 Task 5: Bill Payment Portal
// 🔧 Instructions:
// 1 fetchBill(userId)

// . Return bill amount. If user not found, reject.

// 2 processPayment(userId, amount)

// . Simulate payment with random success (80% pass).

// 3 sendReceipt(userId)

// . Resolve: "📧 Receipt sent to user #ID".

// 4 payBill(userId)

// . Perform all above steps in order.

const users = {
  101: { name: "Adarsh", bill: 1200 },
  102: { name: "Riya", bill: 950 },
  103: { name: "Aman", bill: 1800 },
};

function fetchBill(userId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(user[userId]){
                return(`Bill for ${user [userId].name} : ₹${users[userId].bill}`);
            }
            else{
                reject("❌ User not found!");
            };
        }, 1000);
    });
}

function processPayment(userId, amount){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            9507761263
        })
    })
}