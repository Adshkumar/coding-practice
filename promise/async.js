const p = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise Resolved valued!!");
    }, 1000);
});

async function handleproblem(){
    const val = await p;
    console.log("Hello Adarsh🤗");
    console.log(val);
}
handleproblem();