const base_url = "https://api.themoviedb.org/3/";
const api_key = "6d3fc2892f4427be0ec0d54983ffaa75";
var page = 1;
var maxpage;
const popularmovie = base_url+'movie/popular?api_key='+api_key+'&language=en-US&region=IN&page='+page;

getPopularMovies(popularmovie);

function getPopularMovies(url){

fetch(url)
  . then((response) => {
  return response. json();
  })
  . then((myJson) => {
  maxpage = myJson.total_pages;
  console.log(myJson.results);
  let template = Handlebars.compile(document.getElementById('popular_movie_content').innerHTML);
  let filled = template(myJson);
  document.getElementById('movielist').innerHTML = filled;
  
  });
}

document.getElementById('next').addEventListener("click",(e)=>{
  if (page<maxpage) {
    page = page+1;
  }

  if(page===1)
    {
      document.getElementById('prev').style.display = "none";
    }
  else
  {
    document.getElementById('prev').style.display = "inline";
  }

  if(page === maxpage)
  {
      document.getElementById('next').style.display = "none";
    }
    else
    {
      document.getElementById('next').style.display = "inline";
    }

  console.log("next"+page);
  let nexturl = base_url+'movie/popular?api_key='+api_key+'&language=en-US&region=IN&page='+page;
  getPopularMovies(nexturl);
});

document.getElementById('prev').addEventListener("click",(e)=>{
  if(page>1)
  {
    page = page-1;
  }

  if(page===1)
    {
      document.getElementById('prev').style.display = "none";
    }
  else
  {
    document.getElementById('prev').style.display = "inline";
  }

  if(page === maxpage)
  {
      document.getElementById('next').style.display = "none";
    }
    else
    {
      document.getElementById('next').style.display = "inline";
    }

  console.log("prev"+page);
  let prevurl = base_url+'movie/popular?api_key='+api_key+'&language=en-US&region=IN&page='+page;
  getPopularMovies(prevurl);
});


