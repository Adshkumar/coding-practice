// setTimeout(()=>{
//     console.log("Production has started!");
//     setTimeout(()=>{
//         console.log("The fruit has been chopped!");
//     }, 3000);
// }, 1000);


// let order = (time , work) =>{
//     return new Promise((resolve , reject) =>{
//         if(shop_open){
//             setTimeout(()=>{
//                 resolve(work());
//             },4000)
            
//         }
//         else{
//             reject(console.log("Our Shop is closed"));
//         }
//     })
// }

// function kitchen() {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       resolve("Promise is fulfilled");
//     } else {
//       reject("Error caught here");
//     }
//   });
// }

// kitchen()
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err))
//   .finally(() => console.log("Operation completed"));

function placeOrder(foodItems){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(foodItems ==="Pizza" || foodItems === "burger"){
                resolve(`Your ${foodItems} is on the way!`);
            }
            else{
                reject(`Sorry, we don't serve ${foodItems}.`);
            }
        },1000);
    });
}
placeOrder("Pizza")
.then((message) =>{
    console.log("SUCCESS:",message);
})
.catch((message) =>{
    console.log("ERROR:",error);
})
.finally((message) =>{
    console.log("Thank you for visiting our restaurant.");
});