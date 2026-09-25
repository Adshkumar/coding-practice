// ✅ Task 1: 📚 Book Information Fetch
// 🧠 Objective:
// Get book details by title.

// // Function: getBookDetails(title)
// // Simulated DB:
// const books = {
//   "Atomic Habits": { author: "James Clear", year: 2018 },
//   "Deep Work": { author: "Cal Newport", year: 2016 },
//   "Ikigai": { author: "Héctor García", year: 2017 }
// };
// 🧩 If book exists → resolve with details.
// ❌ Else → reject with "Book not found"



const books = {
  "Atomic Habits": { author: "James Clear", year: 2018 },
  "Deep Work": { author: "Cal Newport", year: 2016 },
  "Ikigai": { author: "Héctor García", year: 2017 }
};

function getBookDetails(title){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(!title || !books[title]){
                reject("Books not found😥");
            }
            else{
                resolve(books[title]);
            }
        }, 2000);
    });
}

