let api_key = "live_Z0VOKnBB0sBWGBKmxkixsypi7rwrKm5Fulrp8pVcgZSKfuZvOZ1sGOvVBMKFh2Pz";
let web_url = "https://api.thecatapi.com/v1/breeds?limit=1000";
let allcontent = document.getElementById("all_content")
let row = document.querySelector(".row")
let createobj = {};
let dupicate;
let catname;
let select = document.getElementById('select');
let cats_info = document.getElementById('cats_info');

`Fetching the Cats data using Async/await`
let create_async = async (url, key)=>{
    try{
        let fetch_cat_breed = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {"x-api-key" : key},
        })
        let json_cat_breed = await fetch_cat_breed.json();

        for(i of json_cat_breed){ 
          `Fetching few Cats data for homepage`
          row.innerHTML += `<div class="col">
          <div class="card h-100">
            <img src="${i.image.url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${i.name}</h5>
              <div><span>Origin &nbsp</span>${i.origin}</div>
              <div><span>Temperament &nbsp</span>${i.temperament}</div>
              <div><span>Life Span &nbsp</span>${i.life_span}</div>
            </div>
          </div>`;

          `Creating and storing each Cat data in object`
          
          createobj[`${i.name}`] = `<div class="col row-cols-xxl-1">
          <div class="card h-100">
            <img src="${i.image.url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${i.name}</h5>
              <div><span>Origin &nbsp</span>${i.origin}</div>
              <div><span>Temperament &nbsp</span>${i.temperament}</div>
              <div><span>Life Span &nbsp</span>${i.life_span}</div>
              <div><span>Description &nbsp</span>${i.description}</div>
            </div>
          </div>`
        
          select .innerHTML+= `\n<option>${i.name}</option>\n`
        }
    }
    catch(err){
        //No Operation
    }
}
create_async(web_url, api_key);

let dup;
select.addEventListener('click',(selected)=>{
  if(dup != selected.target.value && selected.target.value != 'Search by Breed name'){
    cats_info.innerHTML = '';
    `Whenever a particular Cat is selected pulling the specific Cat's data and applying in home screen`
    cats_info.innerHTML = createobj[selected.target.value];
  }
  dup = selected.target.value;
})

let home = function(){
  location.reload();
}
