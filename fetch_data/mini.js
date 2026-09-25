function showSection(id) {
  const sections = document.querySelectorAll("section");
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }
  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
  }
}

let selectedRating = 0;
const stars = document.querySelectorAll("#ratingStars span");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    selectedRating = parseInt(star.getAttribute("data-value"));
    highlightStars(selectedRating);
  });
});

function highlightStars(rating) {
  stars.forEach((star) => {
    const value = parseInt(star.getAttribute("data-value"));
    star.classList.toggle("selected", value <= rating);
  });
}

function submitFeedback(event) {
  event.preventDefault();

  const text = document.getElementById("feedbackText").value.trim();
  if (text === "" || selectedRating === 0) {
    alert("Please provide feedback and a rating.");
    return;
  }

  const feedbackItem = document.createElement("div");
  feedbackItem.className = "feedback-item";
  feedbackItem.innerHTML = `
    <strong>Rating: ${"★".repeat(selectedRating)}${"☆".repeat(5 - selectedRating)}</strong><br>
    ${text}
  `;

  document.getElementById("feedbackList").appendChild(feedbackItem);

  document.getElementById("feedbackForm").reset();
  selectedRating = 0;
  highlightStars(0);
}
