// Flight Booking System
// Write three functions using Promises:

// . bookFlight(flightId) → checks if seats available.

// . processPayment(flightId) → simulates payment success/failure.

// . sendTicket(flightId) → resolves with "Ticket sent via email".
// Then chain them together to simulate the full booking process.

const flightId = {
  indigo: "6E1023",
  airIndia: "AI309",
  vistara: "UK857",
  spiceJet: "SG415",
  goFirst: "G8189",
  emirates: "EK501",
  qatar: "QR571"
};

function bookflight(flightId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const seatsAvailable = Math.random() > 0.1;
              if (seatsAvailable) {
                 resolve(`✈️ Flight ${flightId} booked successfully.`);
            }else {
                  reject(`❌ No seats available on ${flightId}`);
      }
        }, 1000);
    });
}

function processPayment(flightId){
    return new Promise((resolve, reject) => {
        console.log(`Processing payment for flight: ${flightId}...`);
        setTimeout(()=>{
            const success = Math.random() > 0.2;
            if(success){
                resolve(`✅ Payment successful for flight ${flightId}`);
            }
            else{
                 reject(`❌ Payment failed for flight ${flightId}. Try again.`);
            }
        }, 2000);
    });
}

function sendTicket(flightId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`📧 Ticket for ${flightId} sent via email.`);
    }, 1500);
  });
}

bookflight("UK857")
  .then(res => {
    console.log(res);
    return processPayment("UK857");
  })
  .then(res => {
    console.log(res);
    return sendTicket("UK857");
  })
  .then(res => console.log(res))
  .catch(err => console.error(err));