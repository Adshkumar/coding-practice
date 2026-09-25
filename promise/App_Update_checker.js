// 📲 Task 11: App Update Checker
// Objective:
// Check if a mobile app update is available.

// Instructions:
// . Function: checkUpdate(currentVersion)

// . Latest version = "2.5.1"

// . Delay: 1.5 sec

// . If currentVersion !== latestVersion:

// . ✅ Resolve: "Update available: ${latestVersion}"

// . Else:

// . ❌ Reject: "You are already on the latest version."


function checkUpdate(currentVersion){
    const latestVersion = "2.5.1";
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(currentVersion !== latestVersion){
                resolve(`Update available: ${latestVersion}`);
            }
            else{
                reject("You are already on the latest version.");;
            }
        }, 1500);
    });
}
function send(message){
    console.log("SEND",message);
}
checkUpdate("2.5.1")
.then((message)=>{
    console.log("SUCCESS:",message);
    return send("The update successfully🤗");
})
.catch((error)=>{
    console.log("ERROR:",error);
    return send("The app already updated😉");
});