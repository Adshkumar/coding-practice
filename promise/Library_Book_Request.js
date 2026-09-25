// 📚 Task 4: Library Book Request
// Objective:
// Request a book from a digital library

// Instructions:
// . Function: requestBook(bookName)

// .  Available books: ["1984", "The Alchemist", "The Hobbit"]

// .  Delay: 1 sec

// .  If available:

// .  ✅ Resolve: "Book '${bookName}' is ready for download."

// .  Else:

// .  ❌ Reject: "Book '${bookName}' is not in our catalog."


function requestBook(bookName){
    const Availablebooks = ["1984", "The Alchemist", "The Hobbit"];
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(Availablebooks.includes(bookName)){
                resolve(`Book ${bookName} is ready for download`);
            }
            else{
                reject(`Book ${bookName} is not in our catalog`);
            }
        }, 1000);
    });
}

requestBook("The Alchemist")
.then((message)=>{
    console.log("SUCCESS:",message);
})
.catch((error)=>{
    console.log("ERROR:",error);
})