// 📱 Task 4: Mobile Recharge System
// 🔧 Instructions:
// 1 validateNumber(phoneNumber)

// . Valid if it’s 10 digits; else reject with "❌ Invalid number".

// 2 checkBalance(userId)

// . If balance >= ₹100, resolve; else reject with "❌ Insufficient balance".

// 3 recharge(phoneNumber)

// . Simulate recharge with delay, resolve: "✅ Recharge successful for ${phoneNumber}".

// 4 processRecharge(userId, phoneNumber)

// . Run steps using async/await.


const users = {
  1: { name: "Alice", balance: 150 },
  2: { name: "Bob", balance: 80 }
};

function validateNumber(phoneNumber){
    console.log(`Number validation check...${phoneNumber}`);
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const isValid = phoneNumber.length === 10 ? true : false;
            if(isValid){
                resolve(`✅ Valid number: ${phoneNumber}`);
            }
            else{
                reject(`❌ Invalid number`);
            }
        }, 500);
    })
}

function checkBalance(userId){
    console.log(`Balance Checking...${userId}`);
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const balance = users[userId].balance;
            if(balance >= 100){
                resolve(`✅ Sufficient balance: ₹${balance}`);
            }
            else{
                reject(`❌ Insufficient balance`);
            }
        }, 1000);
    });
}

function recharge(phoneNumber){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`✅ Recharge successful for ${phoneNumber}`);
        }, 500);
    });
}

async function processRecharge(userId, phoneNumber){
    try{
        if(!users[userId]) throw "❌ User not found";

        console.log("🔍 Validating number...");
        const valid = await validateNumber(phoneNumber);
        console.log(valid);

        console.log("💳 Checking balance...");
        const balancestatus =  await checkBalance(userId);
        console.log(balancestatus);
        
        users[userId].balance -= 100;
        console.log(`💰 Remaining balance: ₹${users[userId].balance}`);
    } catch (error){
        console.log("Error");
    }
}

processRecharge(1, "9876543210");