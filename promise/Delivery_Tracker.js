// Task 2: Package Delivery Tracker
// Objective:
// Simulate delivery status based on tracking number.

// Instructions:
// . Function: trackPackage(trackingId)

// . Valid IDs: ["PKG001", "PKG002", "PKG003"]

// . Delay: 1.5 seconds

// . If valid:

// . ✅ Resolve: "Package ${trackingId} is out for delivery."

// . Else:

// . ❌ Reject: "Invalid tracking ID: ${trackingId}"


function trackPackage(trackingId){
    const ValidIDs = ["PKG001", "PKG002", "PKG003"];
    return new Promise((resolve, reject) => {
        setTimeout (()=>{
            if (ValidIDs.includes(trackingId)){
                resolve(`Package ${trackingId} is out for delivery.`);
            }
            else{
                reject(`Invalid tracking ID: ${trackingId}`);
            }
        }, 1500);
    });
}

trackPackage("PKG001")
    .then((message )=>{
        console.log("SUCCESS:",message);
    })
    .catch((error)=>{
        console.log("ERROR:",error);
    })
