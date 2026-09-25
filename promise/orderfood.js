function orderFood(item){
    const itemAvailable = ["Pizza", "Burger", "Pasta"];
    return new Promise((resolve, reject) => {
         setTimeout(()=>{
        if(itemAvailable.includes(item)){
            resolve(`Your order for ${item} is confirmed and being prepared!`);
        }else{
            reject(`Sorry, we don’t serve '${item}'.`);
        }
    }, 2000);
    });
   
}
    orderFood("Pizza")
 .then((msg)=>{
    console.log("SUCCESS:",msg);
})

.catch((err)=>{
    console.log("ERROR:",err);
})
.finally(()=>{
    console.log("Thank You for ordering the food form here!!!!");
})