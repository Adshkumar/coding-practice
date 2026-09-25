// 🔧 Task 1: 📦 Product Price Checker

// const products = {
//   "Laptop": { price: 75000, stock: 15 },
//   "Phone": { price: 30000, stock: 40 },
//   "Tablet": { price: 25000, stock: 10 }
// };
// Function: checkProduct(name)
// . If product exists, resolve with:
// "🛍️ Product: NAME, 💰 Price: ₹X, 📦 Stock: Y"

// . Else reject with: "Product not found"

const products = {
  Laptop: { price: 75000, stock: 15 },
  Phone: { price: 30000, stock: 40 },
  Tablet: { price: 25000, stock: 10 },
};

function checkProduct(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!products.hasOwnProperty(name)) {
        reject("Product not found.😥");
      } else {
        const { price, stock } = products[name];
        resolve(`🛍️ Product: ${name}, 💰 Price: ₹${price}, 📦 Stock: ${stock}`);
      }
    }, 1000);
  });
}
