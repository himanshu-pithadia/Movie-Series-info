var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

//-----------------------fetch popular movie data----------------------------------
const base_url = "https://api.themoviedb.org/3/";
const api_key = "";
const trending = base_url+'trending/all/day?api_key='+api_key;
const trendingtvshow = base_url+'trending/tv/day?api_key='+api_key;
const trendingmovie = base_url+'trending/movie/day?api_key='+api_key;
const trendingperson = base_url+'trending/person/day?api_key='+api_key;
const upcomingMovie = base_url+'discover/movie?api_key='+api_key+'&language=en-US&region=IN&sort_by=release_date.asc&release_date.gte=2022-03-08&page=1';

getTrending(trending);
getTrendingTV(trendingtvshow);
getTrendingMovies(trendingmovie);
getTrendingPerson(trendingperson);


function getTrending(url){

  fetch(url)
  . then((response) => {
  return response. json();
  })
  . then((myJson) => {
  console. log(myJson.results[0].title);
  let template = Handlebars.compile(document.getElementById('trending_content').innerHTML);
  console.log(template);
  let filled = template(myJson)
  document.getElementById('trending').innerHTML = filled
  
  });

}

function getTrendingTV(url){

  fetch(url)
  . then((response) => {
  return response. json();
  })
  . then((myJson) => {
  console. log(myJson.results[0].name);
  let template = Handlebars.compile(document.getElementById('trending_content').innerHTML);
  console.log(template);
  let filled = template(myJson)
  document.getElementById('trendingtv').innerHTML = filled
  
  });

}

function getTrendingMovies(url){

  fetch(url)
  . then((response) => {
  return response. json();
  })
  . then((myJson) => {
  console. log(myJson.results[0].name);
  let template = Handlebars.compile(document.getElementById('trending_content').innerHTML);
  console.log(template);
  let filled = template(myJson)
  document.getElementById('trendingmovie').innerHTML = filled
  
  });

}

function getTrendingPerson(url){

  fetch(url)
  . then((response) => {
  return response. json();
  })
  . then((myJson) => {
  console. log(myJson.results[0].name);
  let template = Handlebars.compile(document.getElementById('trending_content').innerHTML);
  console.log(template);
  let filled = template(myJson);
  document.getElementById('trendingperson').innerHTML = filled;
  
  });

}

