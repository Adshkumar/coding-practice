// document.addEventListener("DOMContentLoaded", ()=>{
//     const loginForm = document.getElementById("loginForm");
//     loginForm.addEventListener("submit", handleLogin);
// })

// function handleLogin(event){
//     event.preventDefault();

//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password").value.trim();
// }

// validatelogin(email, password)
// .then((message)=>{
//     alert(message);
// })

// .catch((Error)=>{
//     alert("Error " + Error);
// })
// const selectEmail = document.getElementById("email");
// const selectPassword = document.getElementById("password");

// function validatelogin(email, password){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(!email || !password){
//                 reject("Email and password are required.");
//             }
//             else{
//                 resolve("Login successful.");
//             }
//         }, 1000);
//     });
// }


document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const stars = document.querySelectorAll("#ratingStars span");
  const feedbackText = document.getElementById("feedbackText");
  const loginContainer = document.querySelector(".login-container");

  let selectedRating = 0;

  // Star selection logic
  stars.forEach((star) => {
    star.addEventListener("click", () => {
      selectedRating = parseInt(star.getAttribute("data-value"));
      updateStarColors(selectedRating);
    });

    star.addEventListener("mouseover", () => {
      const hoverValue = parseInt(star.getAttribute("data-value"));
      updateStarColors(hoverValue);
    });

    star.addEventListener("mouseout", () => {
      updateStarColors(selectedRating);
    });
  });

  function updateStarColors(value) {
    stars.forEach((star) => {
      const starValue = parseInt(star.getAttribute("data-value"));
      star.style.color = starValue <= value ? "gold" : "#ccc";
    });
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const feedback = feedbackText.value.trim();

    if (!feedback) {
      alert("Please enter your feedback.");
      return;
    }

    if (selectedRating === 0) {
      alert("Please select a rating.");
      return;
    }

    validatelogin(email, password)
      .then((message) => {
        alert(message);
        showFeedback(feedback, selectedRating);
        loginForm.reset();
        selectedRating = 0;
        updateStarColors(0);
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  });

  function validatelogin(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!email || !password) {
          reject("Email and password are required.");
        } else {
          resolve("Login successful.");
        }
      }, 1000);
    });
  }

  function showFeedback(feedback, rating) {
    const feedbackItem = document.createElement("div");
    feedbackItem.classList.add("feedback-item");
    feedbackItem.innerHTML = `
      <strong>Feedback:</strong> ${feedback}
      <div class="rating-display">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</div>
    `;
    loginContainer.appendChild(feedbackItem);
  }
});

