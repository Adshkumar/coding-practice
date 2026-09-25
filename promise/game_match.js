// 🎮 Task 3: Game Matchmaking Queue
// Objective:
// Simulate joining a game match queue.

// Instructions:
// . Function: joinMatch(playerRank)

// .  Allowed ranks: "Bronze", "Silver", "Gold"

// .  Delay: 2 sec

// . If valid:

// .  ✅ Resolve: "Player matched in ${playerRank} tier game."

// .  Else:

// .  ❌ Reject: "Rank '${playerRank}' is not eligible."



function joinMatch(playerRank){
    const Allowedranks =  ["Bronze", "Silver", "Gold"];
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(Allowedranks.includes(playerRank)){
                resolve(`player matched in ${playerRank} tier game`);
            }
            else{
                reject(`Rank ${playerRank} is not eligible`);
            }
        }, 2000);
    });
}

joinMatch("Silver")
.then((message)=>{
    console.log("SUCCESS:",message);
})
.catch((error)=>{
    console.log("ERROR:",error);
})