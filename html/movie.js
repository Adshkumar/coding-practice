document.getElementById("search-btn").addEventListener("click", getMovies);
document.getElementById("movie-input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") Movies();
});
function getMovies(){
    const movieName  = document.getElementById("movie-input").value.trim();
    if(!movieName ){
        alert("Please enter Movies name.");
        return;
    }
    fetchMoviesdata(movieName);
}

const apiKey = "6510c77e8295763d92eabab09e9d3393";

function fetchMoviesdata(movieName){
    const apiurl = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

    fetch(apiurl)
    .then(Response =>{
        if(!Response.ok){
            return Response.json().then(err=>{
                throw new Error("Movies Not Found");
            });
        }
        return Response.json();
    })
    .then(data => displayMovie(data))
    .catch(error => showError(error.message));
}

function displayMovie(data){
        document.getElementById("movie-poster").src = data.Poster;
        document.getElementById("movie-title").innerText = data.Title;
        document.getElementById("movie-year").innerText = "Year: " + data.Year;
        document.getElementById("movie-genre").innerText = "Genre: " + data.Genre;
        document.getElementById("movie-rating").innerText = "IMDB: " + data.imdbRating;

}
function showError(msg) {
    alert("Error: " + msg);
}