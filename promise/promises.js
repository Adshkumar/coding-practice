function bookseat(movieName , seatNumber){
    const availableMovies = ["Avengers", "Inception", "Interstellar"];
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(!availableMovies.includes(movieName)){
                reject("Movies not avalible");
            } else if(seatNumber < 1 || seatNumber > 100){
                reject("Invalid Seat Number!!");
            }else{
                resolve(`Your seat ${seatNumber} for ${movieName} is booked!`);
            }
        },2000);
    });
}

bookseat("Inception",45)
.then((msg)=> console.log("SUCCESS:",msg)) 
.catch((err)=> console.log("ERROR:",err)) 
.finally(()=>console.log("Thank You for using our booking system."));

bookseat("Interstellar",70)
.then((msg)=> console.log("SUCCESS:",msg)) 
.catch((err)=> console.log("ERROR:",err)) 
.finally(()=>console.log("Thank You for using our booking system."));


bookseat("Avenger",150)
.then((msg)=> console.log("SUCCESS:",msg)) 
.catch((err)=> console.log("ERROR:",err)) 
.finally(()=>console.log("Thank You for using our booking system."));