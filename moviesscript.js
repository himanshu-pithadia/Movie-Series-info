const base_url = "https://api.themoviedb.org/3/";
const api_key = "";
var page = 2;
var maxpage;
const upcomingMovie = base_url+'discover/movie?api_key='+api_key+'&language=en-US&region=IN&sort_by=release_date.asc&release_date.gte=2022-03-08&page='+page;

getUpcomingMovies(upcomingMovie);

function getUpcomingMovies(url){

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
  let nexturl = base_url+'discover/movie?api_key='+api_key+'&language=en-US&region=IN&sort_by=release_date.asc&release_date.gte=2022-03-08&page='+page;
  getUpcomingMovies(nexturl);
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
  let prevurl = base_url+'discover/movie?api_key='+api_key+'&language=en-US&region=IN&sort_by=release_date.asc&release_date.gte=2022-03-08&page='+page;
  getUpcomingMovies(prevurl);
});


