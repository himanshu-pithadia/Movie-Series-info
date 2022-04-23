const base_url = "https://api.themoviedb.org/3/";
const api_key = "6d3fc2892f4427be0ec0d54983ffaa75";
const id = window.location.href.split('?id=')[1];
const details = base_url+'tv/'+id+'?api_key='+api_key+'&language=en-US';
const cast = base_url+'tv/'+id+'/credits?api_key='+api_key+'&language=en-US';
getDetails(details);
getCast(cast);


function getDetails(url)
{
    fetch(url)
  . then((response) => {
  return response. json();
  })
  . then((myJson) => {
  console.log(myJson);
  let template = Handlebars.compile(document.getElementById('detail_content').innerHTML);
  let filled = template(myJson);
  document.getElementById('detail').innerHTML = filled;
  
  });
}

function getCast(url)
{
    fetch(url)
    . then((response) => {
    return response. json();
    })
    . then((myJson) => {
    console.log(myJson);
    let template = Handlebars.compile(document.getElementById('cast_template').innerHTML);
    let filled = template(myJson);
    document.getElementById('cast-content').innerHTML = filled;

    let crewtemplate = Handlebars.compile(document.getElementById('crew_template').innerHTML);
    let filled2 = crewtemplate(myJson);
    document.getElementById('crew-content').innerHTML = filled2;
    });

}

