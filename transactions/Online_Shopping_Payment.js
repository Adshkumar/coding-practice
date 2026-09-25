// Online Shopping Payment
// Write three functions:

// . placeOrder(itemId) → checks stock and reserves item.

// . processPayment(orderId, amount) → simulates payment success/failure.

// . generateInvoice(orderId) → resolves with "Invoice generated for Order X".
// Chain them to complete the order transaction.


const items = [
  { id: 1, name: "Laptop", price: 50000, stock: 5 },
  { id: 2, name: "Mobile", price: 20000, stock: 10 },
  { id: 3, name: "Headphones", price: 2000, stock: 0 }
];

function placeOrder(itemId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const item = items.find((itm) => itm.id === itemId);
            if(!item){
                reject("Item not found");
            }else if(item.stock > 0){
                    item.stock -=1;
                resolve(`Order placed successfully for Item ${item.name} (Order ID: ${item.id})`);
            }else {
                reject("Out of stock");
            }
        }, 1000);
    });
}

function processPayment(orderId,amount){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const item = items.find((itm) => itm.id === orderId);
            if(!item){
                reject("Invalid order ID");
            }
            else if(amount == item.price){
                resolve(`Payment of ₹${amount} successful for Order ID: ${orderId}`);
            }
            else{
                reject("Payment failed: Incorrect amount");
            }
        },2000);
    });
}

function generateInvoice(orderId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(!orderId){
                reject("Order ID required for invoice");
            }
            else{
                resolve(`Invoice generated for Order ${orderId}`);
            }
        }, 2000);
    });
}


placeOrder(1)
  .then(orderMsg => {
    console.log(orderMsg);
    return processPayment(1, 50000);
  })
  .then(paymentMsg => {
    console.log(paymentMsg);
    return generateInvoice(1);
  })
  .then(invoiceMsg => console.log(invoiceMsg))
  .catch(err => console.log("Error:", err));
