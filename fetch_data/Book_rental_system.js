// 🧠 Now Your Task: 📚 Book Rental System
// Simulate renting a book from a library using async flow.

// 🗃️ Sample Books:

// const library = {
//   "Harry Potter": { available: true },
//   "Atomic Habits": { available: false },
//   "Deep Work": { available: true },
// };
// 🔧 Functions to create:
// 1 requestBook(bookName)

// . If book is available, resolve with request ID.

// . Else reject with "Book not available".

// 2 verifyUser(requestId)

// . Simulate verification with 90% success chance.

// . Resolve on success, reject otherwise.

// 3 issueBook(requestId)

// . Resolve with "📚 Book issued! Request #ID"

// 4 sendNotification(requestId)

// . Resolve with "📩 Notification sent for Request #ID"

// 🔄 Final function:
// async function rentBook(bookName)

// . Must call each step in order using await

// . Stop if any step fails


// use a sample book to run this program.
const library = {
  "Harry Potter": { available: true },
  "Atomic Habits": { available: false },
  "Deep Work": { available: true },
};

let RequestOrderId = 101;

function requestBook(bookName){
    return new Promise((resolve, reject) => {
        console.log(`Placing order for ${bookName}`);
        setTimeout(()=>{
            if(library[bookName] && library[bookName].available){
                library[bookName].available = false;
                resolve(RequestOrderId++);
            }
            else{
                reject("Book not available");
            }
        }, 1000);
    });
}

function verifyUser(requestId){
    return new Promise((resolve, reject) => {
        console.log(`Verifying user for request ${requestId}...`);
        setTimeout(()=>{
            const change = Math.random();
            if(Change < 0.9){
                resolve(`✅ User verified for request #${requestId}`);
            }
            else{
                reject("❌ User verification failed");
            }
        }, 1000);
    });
}

function issueBook(requestId){
    return new Promise((resolve, reject) => {
        console.log(`Book issued ${requestId} checking ... `)
        setTimeout(()=>{
            console.log(`📚 Book issued! Request #${requestId}`);
        }, 1000);
    });
}

function sendNotification(requestId){
    return new Promise((resolve, reject) => {
        console.log(`Sending Notification ${requestId}...`);
        setTimeout(()=>{
            console(`📩 Notification sent for Request #${requestId}`);
        }, 1000);
    });
}

async function rentBook(bookName){
    try{
        const orderId = await requestBook(bookName);
        console.log(`✔️ Order placed! Order ID: ${requestId}`);
        await verifyUser(requestId);
        console.log(`User Verified!`);
        const issueBook = await issueBook(requestId);
        console.log(shipped);
        const sendNotification = await sendNotification(requestId);
        console.log(delivered);
    } catch (error){
        console.log(error);
    }
}


rentBook("Harry Potter")  // Might be error somewhere