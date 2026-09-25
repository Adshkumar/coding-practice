function getresult(marks){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(marks>=40){
                 resolve(`Passed with ${marks} marks`);
            } else{
                reject(`Failed with ${marks} marks`);
            }
        }, 1500);
    })
}