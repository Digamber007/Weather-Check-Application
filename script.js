const apiKey = "3045dd712ffe6e702e3245525ac7fa38";  
 const main = document.getElementById('main');  
 const form = document.getElementById('form');  
 const search = document.getElementById('search');  
 const url = (city)=> `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;  
 async function getWeatherByLocation(city){  
      const resp = await fetch(url(city), {  
        origin: "cros" });  
      const respData = await resp.json();  
       addWeatherToPage(respData);  
    }  
    function addWeatherToPage(data){  
      const temp = Ktoc(data.main.temp); 
      
      const weather = document.createElement('div')  
      weather.classList.add('weather');  
      weather.innerHTML = `  
      <h2><img src="https://openweathermap.org/img/wn/${ data.weather[0].icon }@2x.png" style="margin: 20px;"/> ${ temp }°C  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" style="margin: 20px;"/></h2>  
      <small> ${ data.weather[0].main }</small>  
      `;  
     //  cleanup   
      main.innerHTML= "";  
       main.appendChild(weather);  
    };  
    function Ktoc(K){  
      return Math.floor(K - 273.15);  
    }  
    form.addEventListener('submit',(e) =>{  
     e.preventDefault();  
     const city = search.value;  
     if(city){  
       getWeatherByLocation(city)  
     }  
    });