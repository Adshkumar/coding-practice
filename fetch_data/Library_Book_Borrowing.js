// Write a function borrowBook(bookName) that:

// If book exists and copies > 0, decrease count and resolve "Book borrowed".

// Otherwise reject "Book not available".

function borrowBook(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const book = library.find(b => b.name === bookName);
            if(book && book.copies > 0){
                resolve(`Book borrowed`);
            }
            else{
                reject(`Book not available`);
            }
        },1000);
    });
}