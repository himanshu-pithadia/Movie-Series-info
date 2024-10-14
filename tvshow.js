const base_url = "https://api.themoviedb.org/3/";
const api_key = "";
var page = 1;
var maxpage;
const ontv = base_url+'tv/on_the_air?api_key='+api_key+'&language=en-US&page='+page;

getOnTV(ontv);

function getOnTV(url){

fetch(url)
  . then((response) => {
  return response. json();
  })
  . then((myJson) => {
  maxpage = myJson.total_pages;
  let template = Handlebars.compile(document.getElementById('ontv_content').innerHTML);
  let filled = template(myJson);
  document.getElementById('tvlist').innerHTML = filled;
  
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
  let nexturl = base_url+'tv/on_the_air?api_key='+api_key+'&language=en-US&page='+page;
  getOnTV(nexturl);
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
  let prevurl = base_url+'tv/on_the_air?api_key='+api_key+'&language=en-US&page='+page;
  getOnTV(prevurl);
});



