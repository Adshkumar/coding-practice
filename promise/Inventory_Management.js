// 📦 Task 9: Inventory Management
// Objective:
// Check item availability in stock.

// Instructions:
// . Function: checkStock(item)

// . Stock list:

// {
//   "Laptop": 3,
//   "Phone": 0,
//   "Tablet": 5
// }
// . Delay: 1 sec

// . If item exists and quantity > 0:

// . ✅ Resolve: "${item} is in stock."

// . Else:

// . ❌ Reject: "${item} is out of stock."

function checkStock(item) {
    const items = {
        "Laptop": 3,
        "Phone": 0,
        "Tablet": 5
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (items.hasOwnProperty(item) && items[item] > 0) {
                resolve(`${item} is in stock.`);
            } else {
                reject(`${item} is out of stock.`);
            }
        }, 1000);
    });
}
