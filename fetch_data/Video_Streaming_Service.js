// 🔁 Task 1: Video Streaming Service
// Objective: Simulate checking user subscription and streaming a video.

// 🔧 Instructions:
// 1 checkSubscription(userId)

// . If userId is in the subscribedUsers array, resolve.

// . Else, reject with "❌ Subscription inactive".

// 2 loadVideo(videoId)

// . Simulate 1.5s loading.

// . Resolve with "🎬 Video #videoId loaded".

// 3 playVideo(videoId)

// . Resolve with "▶️ Now playing video #videoId".

// 4 watchVideo(userId, videoId)

// . Async function chaining all steps.

// . Stop if any step fails.

const subscribedUsers = [101, 102, 103];

let SubscriptionId = 101;

function checkSubscription(userId) {
  return new Promise((resolve, reject) => {
    console.log(`Checking Subcribed for ${userId}...`);
    setTimeout(() => {
      if (subscribedUsers.includes(userId)) {
        resolve(`✅ Subscription active for user ${userId}`);
      } else {
        reject(`❌ Subscription inactive`);
      }
    }, 1000);
  });
}

function loadVideo(videoId){
    console.log(`📦 Loading video ${videoId}...`);
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(` 🎬 Video ${videoId} loaded...`);
        }, 1500);
    });
}

function playVideo(videoId){
    console.log(`Playing Video ${videoId}...`);
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`▶️ Now playing video ${videoId}`);
        }, 1000);
    });
}

async function watchVideo(userId, videoId){
    try{
        const SubscriptionId = await checkSubscription(userId);
        console.log(`✔️ Subscription Done! User ID: ${userId}`);
        await loadVideo(videoId);
        console.log("🎥 Video Loaded");
        const result = await playVideo(videoId);
        console.log(result); 
        console.log("🎞️ Streaming started successfully.");
    }catch(error){
        console.log(error);
    }

}

watchVideo(102, 2);