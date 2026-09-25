// 1 placeOrder(itemName)

// Simulate order placement delay with setTimeout

// Resolve with order ID if item is available

// Reject if item is out of stock or doesn't exist

// 2 processPayment(orderId)

// Simulate payment processing with delay

// 80% chance of success

// Resolve if successful, reject if failed

// 3 shipOrder(orderId)

// Simulate shipping delay

// Resolve with "📦 Order #ID has been shipped"

// 4 deliverOrder(orderId)

// Simulate final delivery delay

// Resolve with "✅ Order #ID has been delivered"


const inventory = {
  "Laptop": { stock: 2 },
  "Phone": { stock: 0 },
  "Tablet": { stock: 3 },
};

let currentOrderId = 100;

function placeOrder(itemName) {
  return new Promise((resolve, reject) => {
    console.log(`🛒 Placing order for ${itemName}...`);
    setTimeout(() => {
      if (inventory[itemName] && inventory[itemName].stock > 0) {
        inventory[itemName].stock--;
        currentOrderId++;
        resolve(currentOrderId);
      } else {
        reject("❌ Item out of stock or not found");
      }
    }, 1500);
  });
}

function processPayment(orderId) {
  return new Promise((resolve, reject) => {
    console.log(`💳 Processing payment for Order #${orderId}...`);
    setTimeout(() => {
      const success = Math.random() < 0.8; 
      if (success) {
        resolve();
      } else {
        reject("❌ Payment failed! Order cancelled.");
      }
    }, 1000);
  });
}

function shipOrder(orderId) {
  return new Promise((resolve) => {
    console.log(`📦 Shipping Order #${orderId}...`);
    setTimeout(() => {
      resolve(`🚚 Order #${orderId} has been shipped`);
    }, 1200);
  });
}

function deliverOrder(orderId) {
  return new Promise((resolve) => {
    console.log(`📬 Delivering Order #${orderId}...`);
    setTimeout(() => {
      resolve(`✅ Order #${orderId} has been delivered`);
    }, 1500);
  });
}

async function completeOrder(itemName) {
  try {
    const orderId = await placeOrder(itemName);
    console.log(`✔️ Order placed! Order ID: ${orderId}`);
    await processPayment(orderId);
    console.log("✅ Payment successful!");
    const shipped = await shipOrder(orderId);
    console.log(shipped);
    const delivered = await deliverOrder(orderId);
    console.log(delivered);
  } catch (error) {
    console.log(error);
  }
}

completeOrder("Laptop");
