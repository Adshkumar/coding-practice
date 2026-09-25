function loginUser(username, password){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(username === "admin" && password === "1234"){
                resolve("Login Successful!!");
            }else{
                reject("Invalid credentials");
            }
        }, 1500);
    });
}

function bookTicket(movieName){
    const availableMovies = ["Avengers", "Inception", "Interstellar"];
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(availableMovies.includes(movieName)){
                resolve(`Your ticket for ${movieName} is booked!`);
            }else{
                reject(`Sorry, the movie '${movieName}' is not available.`);
            }
        },2000);
    });
}

loginUser("admin","1234")
.then((loginMessage)=>{
    console.log("LOGIN:",loginMessage);
    return bookTicket("Avengers");
})

.then((bookingMessage)=>{
    console.log("BOOKING:",bookingMessage);
})

.catch((error)=>{
    console.log("ERROR:",error);
})

.finally(()=>{
    console.log("Thank You for using our system!!");
})