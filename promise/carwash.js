// Objective:
// Simulate a car wash and payment step

// Instructions:
//1. startWash(carType) — Valid: "Sedan", "SUV"

// Resolve in 2 sec: "Washing ${carType}..."

//2. pay(amount) — If amount >= 200 → resolve "Payment successful!", else reject "Insufficient funds."

// Chain both in .then() style


function startWash(carType){
    const validType = ["Sedan", "SUV"];
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(validType.includes(carType)){
                resolve(`Washing your ${carType}...`);
            }else{
                reject(`Sorry, we don't wash '${carType}' type vehicles.`);
            };
        },2000);
    });
}