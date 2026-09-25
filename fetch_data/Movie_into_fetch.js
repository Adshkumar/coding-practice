// ✅ Task 3: 🍿 Movie Info Fetch
// 🧠 Objective:
// Get movie rating and genre by name.

// // Function: getMovieInfo(name)

// const movies = {
//   "Inception": { genre: "Sci-Fi", rating: "8.8" },
//   "Sholay": { genre: "Action", rating: "9.0" },
//   "3 Idiots": { genre: "Comedy-Drama", rating: "8.4" }
// };
// 🧩 Resolve with "🎬 Genre: ..., ⭐ Rating: ..."
// ❌ Reject with "Movie not found"

const movies = {
  Inception: { genre: "Sci-Fi", rating: "8.8" },
  Sholay: { genre: "Action", rating: "9.0" },
  "3 Idiots": { genre: "Comedy-Drama", rating: "8.4" },
};
function getMovieInfo(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!movies.hasOwnProperty(name)) {
        reject("Movie not found");
      } else {
        const { genre, rating } = movies[name];
        resolve(`🎬 Genre: ${genre}, ⭐ Rating: ${rating}`);
      }
    }, 2000);
  });
}
getMovieInfo("Inception")
.then((info)=>{
    console.log("SUCCESS:",info);
})
.catch((err)=>{
    console.log("ERROR:",err);
})