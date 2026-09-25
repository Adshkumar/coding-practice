// Bank Balance Check
// Write a function checkBalance(accountId) that:

// .Simulates fetching balance from a database (using setTimeout).

// .Resolves with "Balance for account X is ₹amount".

// .Rejects if account doesn’t exist.


const accounts = [
  { id: 1, balance: 5000 },
  { id: 2, balance: 12000 },
  { id: 3, balance: 0 }
];

console.log('super')
function checkBalance(accountId){
    return new Promise((resolve, reject) => {
        console.log('first')
        setTimeout(()=>{
            const balance = accounts.find(i => i.id === accountId)?.balance ?? 'Account Not Found'
            resolve(balance)
            console.log(balance)
        },3000);
    });
}

checkBalance(1) 
console.log('last')

// super
// first
// balance
// last