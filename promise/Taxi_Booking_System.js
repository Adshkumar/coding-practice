// 🚕 Task 6: Taxi Booking System
// Objective:
// Simulate a taxi booking based on location availability.

// Instructions:
// . Function: bookTaxi(location)

// . Available locations: ["Downtown", "Airport", "Mall"]

// . Delay: 1.5 sec

// . If location is available:

// . ✅ Resolve: "Taxi booked for ${location}!"

// . Else:

// . ❌ Reject: "No taxis available in ${location}."


function bookTaxi(location){
    const Availablelocations = ["Downtown", "Airport", "Mall"];
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(Availablelocations.includes(location)){
                resolve(`Taxi booked for ${location}!`);
            }
            else{
                reject(`No taxis available in ${location}.`);
            }
        },1500);
    });
}