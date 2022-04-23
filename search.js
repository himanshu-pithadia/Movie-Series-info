const base_url = "https://api.themoviedb.org/3/";
const api_key = "6d3fc2892f4427be0ec0d54983ffaa75";
const key = window.location.href.split('?search=')[1];
const searchurl = base_url+'search/multi?api_key='+api_key+'&language=en-US&query='+key+'&page=1&include_adult=false';

getSearch(searchurl);

function getSearch(url){

fetch(url)
  . then((response) => {
  return response. json();
  })
  . then((myJson) => {
  maxpage = myJson.total_pages;
  console.log(myJson);
  let template = Handlebars.compile(document.getElementById('movie_content').innerHTML);
  let filled = template(myJson);
  document.getElementById('movielist').innerHTML = filled;
  
  });
}