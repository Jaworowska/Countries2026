fetch('countries.json')
.then(data => data.json() )   
.then(json => {

  console.log(json)
  
  // sort an array of countries by comparing area
  let sorted = json.sort((a,b) =>  a.area - b.area  ); 

  
   sorted.forEach( bunny => { 

     // dynamically construct a url for a flag
     // based on the ISO code. 
     // https://github.com/mledoze/countries
     // 
     let flagImage = `https://raw.githubusercontent.com/mledoze/countries/master/data/${bunny.cca3.toLowerCase()}.svg`
     
    // make a div to hold each planet
    let div = document.createElement('div') 
    div.classList.add('bunny')  
    
    div.innerHTML = 
      `
      <div>
      <h4>${bunny.name.common}</h4>
      <p>${bunny.area} km²</p> 
      <p><b>Lat/Lng</b> ${bunny.latlng[0]}°,${bunny.latlng[1]}°</p>
      <p><h2>${bunny.capital}</h2></p>
      <p><b>Languages:</b>
  ${Object.values(bunny.languages).join(', ')}</p>
  </div>
  <img class="flag" src="${flagImage}"> ` 
     
     document.querySelector('#countries') .appendChild(div)
  })
 
})

