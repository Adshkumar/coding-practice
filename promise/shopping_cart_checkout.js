// 🛒 Task 5: Shopping Cart Checkout
// Objective:
// Simulate item checkout with total calculation.

// Instructions:
// . Function: checkoutCart(items)

// . items is an array like ["Shirt", "Shoes"]

// . Prices:

// . "Shirt": ₹800

// . "Shoes": ₹1500

// . "Watch": ₹2000

// . Delay: 2 sec

// . If all items are valid:

// . ✅ Resolve: "Checkout successful. Total: ₹[amount]"

// . If any invalid item:

// . ❌ Reject: "Item '[item]' is not available."

function checkoutCart(items) {
  const prices = {
    Shirt: 800,
    Shoes: 1500,
    Watch: 2000
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let total = 0;

      for (let item of items) {
        if (!(item in prices)) {
          reject(`item '${item}' is not available.`);
          return;
        }
        total += prices[item];
      }

      resolve(`Checkout successful. Total: ₹${total}`);
    }, 2000); 
  });
}

checkoutCart(["Shirt", "Shoes"])
  .then(msg => console.log(msg))
  .catch(err => console.error(err));


checkoutCart(["Shirt", "Bag"])
  .then(msg => console.log(msg))
  .catch(err => console.error(err));