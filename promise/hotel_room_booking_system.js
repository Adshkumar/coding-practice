// 🏨 Task 1: Hotel Room Booking System
// Objective:
// Book a hotel room based on room type and budget.

// Instructions:
// .  Function: bookRoom(roomType, budget)

// .  Valid room types: "Deluxe", "Standard"

// .  Pricing:

// . "Deluxe": ₹5000

// . "Standard": ₹3000

// . Use setTimeout with a 2-second delay

// . If room type is valid and budget is sufficient:

// . ✅ Resolve: "Your ${roomType} room is booked for ₹${price}!"

// . If not:

// . ❌ Reject with appropriate message:

// . Invalid room type

// . Insufficient budget


function bookRoom(roomType, budget) {
    const ValidRoom = ["Deluxe", "Standard"];
    const prices = {
        "Deluxe": 5000,
        "Standard": 3000
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!ValidRoom.includes(roomType)) {
                reject("❌ Invalid room type");
                return;
            }

            const price = prices[roomType];

            if (budget >= price) {
                resolve(`✅ Your ${roomType} room is booked for ₹${price}!`);
            } else {
                reject("❌ Insufficient budget");
            }
        }, 2000);
    });
}

bookRoom("Deluxe", 6000)
    .then((message) => {
        console.log("SUCCESS:", message);
    })
    .catch((error) => {
        console.log("ERROR:", error);
    });
