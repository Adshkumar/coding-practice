// 💌 Task 10: Email Sending Simulation
// Objective:
// Simulate sending an email

// Instructions:
// . Function: sendEmail(to)

// . Delay: 1 sec

// . If to contains "@" and ".":

// . ✅ Resolve: "Email successfully sent to ${to}."

// . Else:

// . ❌ Reject: "Invalid email address."


function sendEmail(to){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(to.includes("@") && to.includes(".")){
                resolve(`Email successfully sent to ${to}.`);
            }
            else{
                reject("Invalid email address.");
            }
        }, 1000);
    });
}