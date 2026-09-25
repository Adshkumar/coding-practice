// 🧑‍💼 Task 19: Job Application System
// Objective:
// Check candidate profile and schedule interview

// Instructions:
// . applyJob(candidate)

// . Check if candidate.experience >= 2

// . If yes: resolve and schedule interview

// . Else: reject with "Minimum 2 years experience required"


// function applyJob(candidate){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(candidate.experience >=2){
//                 resolve(`Schedule booked for interview`);
//             }
//             else{
//                 reject("Minimum 2 years experience required");
//             }
//         })
//     })
// }


function fetchUsers() {
    fetch("http://localhost/dtest_sites/get_users.php")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch");
            }
            return response.json();
        })
        .then(users => {
            users.forEach(user => {
                console.log(`Email: ${user.email}, Password: ${user.password}, Remember: ${user.remember}`);
            });
        })
        .catch(error => {
            console.error("Error:", error.message);
        });
}

fetchUsers();


