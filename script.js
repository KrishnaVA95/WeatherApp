const api = {
    key: "b6903ebb0ed03ce871ffa0ad2eb09504",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
}

const city = document.querySelector('.city')
const date = document.querySelector('.date');
const container_img = document.querySelector('.container-img');
const container_temp = document.querySelector('.container-temp');
const temp_number = document.querySelector('.container-temp div');
const temp_unit = document.querySelector('.container-temp span');
const weather_t = document.querySelector('.descriptionWeather');
const search_input = document.querySelector('.form-control');
const search_button = document.querySelector('.btn');
const low_high = document.querySelector('.low-high');
const tempHumidity = document.querySelector('.humidity');
const tempWind = document.querySelector('.wind');


window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    }
    else {
        alert('navegador não suporta geolozalicação');
    }
    function setPosition(position) {
        console.log(position)
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        coordResults(lat, long);
    }
    function showError(error) {
        alert(`erro: ${error.message}`);
    }
})

function coordResults(lat, long) {
    fetch(`${api.base}weather?lat=${lat}&lon=${long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json();
        })
        .catch(error => {
            alert(error.message)
        })
        .then(response => {
            displayResults(response)
        });
}

search_button.addEventListener('click', function() {
    searchResults(search_input.value)
})

search_input.addEventListener('keypress', enter)
function enter(event) {
    key = event.keyCode
    if (key === 13) {
        searchResults(search_input.value)
    }
}

function searchResults(city) {
    fetch(`${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json();
            //  Função que retorna ela mesma em formato json.
        })
        .catch(error => {
            alert(error.message)
        })
        .then(response => {
            displayResults(response)
        });
}

function displayResults(weather) {
    console.log(weather)

    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    date.innerText = dateBuilder(now);

    let iconName = weather.weather[0].icon; //27:50
    container_img.innerHTML = `<img src="./icons/${iconName}.png">`;

    //Mudandar vídeo, pelo icone -----------------------------------------------------
    if(iconName == "01d"){
        document.querySelector('.video').src= './videos/01d.mp4';
        let ajusteCor = document.querySelectorAll('li')
        for(let i = 0; i < ajusteCor.length; i++){
            ajusteCor[i].style.color = 'black';
        }
    }else if(iconName == "01n"){
        document.querySelector('.video').src= './videos/01n.mp4';
        let ajusteCor = document.querySelectorAll('li')
        for(let i = 0; i < ajusteCor.length; i++){
            ajusteCor[i].style.color = 'white';
        }
    }else if(iconName == "02d"){
        document.querySelector('.video').src= './videos/02d.mp4';
        let ajusteCor = document.querySelectorAll('li')
        for(let i = 0; i < ajusteCor.length; i++){
            ajusteCor[i].style.color = 'black';
        }
    }else if(iconName == "02n"){
        document.querySelector('.video').src= './videos/02n.mp4';
        let ajusteCor = document.querySelectorAll('li')
        for(let i = 0; i < ajusteCor.length; i++){
            ajusteCor[i].style.color = 'white';
        }
    }else if(iconName == "03d"){
        document.querySelector('.video').src= './videos/02d.mp4';
        let ajusteCor = document.querySelectorAll('li')
        for(let i = 0; i < ajusteCor.length; i++){
            ajusteCor[i].style.color = 'black';
        }
    }else if(iconName == "03n"){
        document.querySelector('.video').src= './videos/02n.mp4';
        let ajusteCor = document.querySelectorAll('li')
        for(let i = 0; i < ajusteCor.length; i++){
            ajusteCor[i].style.color = 'white';
        }
    }else if(iconName == "04d"){
        document.querySelector('.video').src= './videos/04d.mp4';
        let ajusteCor = document.querySelectorAll('li')
        for(let i = 0; i < ajusteCor.length; i++){
            ajusteCor[i].style.color = 'black';
        }
    }else if(iconName == "04n"){
        document.querySelector('.video').src= './videos/04n.mp4';
        let ajusteCor = document.querySelectorAll('li')
        for(let i = 0; i < ajusteCor.length; i++){
            ajusteCor[i].style.color = 'white';
        }
    }else if(iconName == "09d"){
        document.querySelector('.video').src= './videos/09d.mp4';
        let ajusteCor = document.querySelectorAll('li')
        for(let i = 0; i < ajusteCor.length; i++){
            ajusteCor[i].style.color = 'black';
        }
    }else if(iconName == "09n"){
        document.querySelector('.video').src= './videos/10n.mp4';
        let ajusteCor = document.querySelectorAll('li')
        for(let i = 0; i < ajusteCor.length; i++){
            ajusteCor[i].style.color = 'white';
        }
    }else if(iconName == "10d"){
        document.querySelector('.video').src= './videos/10d.mp4';
        let ajusteCor = document.querySelectorAll('li')
        for(let i = 0; i < ajusteCor.length; i++){
            ajusteCor[i].style.color = 'white';
        }
    }else if(iconName == "10n"){
        document.querySelector('.video').src= './videos/10n.mp4';
        let ajusteCor = document.querySelectorAll('li')
        for(let i = 0; i < ajusteCor.length; i++){
            ajusteCor[i].style.color = 'white';
        }
    }else if(iconName == "11d"){
        document.querySelector('.video').src= './videos/11d.mp4';
        let ajusteCor = document.querySelectorAll('li')
        for(let i = 0; i < ajusteCor.length; i++){
            ajusteCor[i].style.color = 'black';
        }
    }else if(iconName == "11n"){
        document.querySelector('.video').src= './videos/11d.mp4';
        let ajusteCor = document.querySelectorAll('li')
        for(let i = 0; i < ajusteCor.length; i++){
            ajusteCor[i].style.color = 'white';
        }
    }else if(iconName == "13d"){
        document.querySelector('.video').src= './videos/13d.mp4';
        let ajusteCor = document.querySelectorAll('li')
        for(let i = 0; i < ajusteCor.length; i++){
            ajusteCor[i].style.color = 'black';
        }
    }else if(iconName == "13n"){
        document.querySelector('.video').src= './videos/13n.mp4';
        let ajusteCor = document.querySelectorAll('li')
        for(let i = 0; i < ajusteCor.length; i++){
            ajusteCor[i].style.color = 'white';
        }
    }else if(iconName == "50d"){
        document.querySelector('.video').src= './videos/50d.mp4';
        let ajusteCor = document.querySelectorAll('li')
        for(let i = 0; i < ajusteCor.length; i++){
            ajusteCor[i].style.color = 'black';
        }
    }else if (iconName == "50n"){
        document.querySelector('.video').src= './videos/50n.mp4';
        let ajusteCor = document.querySelectorAll('li')
        for(let i = 0; i < ajusteCor.length; i++){
            ajusteCor[i].style.color = 'white';
        }
    }
    
    //-------------------------------------------------------------------------------
    let temperature = `${Math.round(weather.main.temp)}`
    temp_number.innerHTML = temperature;
    temp_unit.innerHTML = `°c`;

    weather_tempo = weather.weather[0].description;
    weather_t.innerText = capitalizeFirstLetter(weather_tempo)

    low_high.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

    let humidity = `${Math.round(weather.main.humidity)}`
    tempHumidity.innerHTML =`${humidity}%` ;

    let wind = `${Math.round(weather.wind.speed)}`
    var calc = (wind * 3.6)
    tempWind.innerHTML = `${calc}km/h`;

}

function dateBuilder(d) {
    let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julio", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    let day = days[d.getDay()]; 
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
}

container_temp.addEventListener('click', changeTemp)
function changeTemp() {
    temp_number_now = temp_number.innerHTML

    if (temp_unit.innerHTML === "°c") {
        let f = (temp_number_now * 1.8) + 32
        temp_unit.innerHTML = "°f"
        temp_number.innerHTML = Math.round(f)
    }
    else {
        let c = (temp_number_now - 32) / 1.8
        temp_unit.innerHTML = "°c"
        temp_number.innerHTML = Math.round(c)
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function moveRelogio() {

    let momentoAtual = new Date()

    let hora = momentoAtual.getHours()
    let minuto = momentoAtual.getMinutes()
    let segundo = momentoAtual.getSeconds()

    let strHora = new String(hora)
    let strMinuto = new String(minuto)
    let strSegundo = new String(segundo)


    if (strSegundo.length == 1) segundo = "0" + segundo
    if (strMinuto.length == 1) minuto = "0" + minuto
    if (strHora.length == 1) hora = "0" + hora

    h.textContent = hora
    m.textContent = minuto
    s.textContent = segundo

    h.textContent = hora
    m.textContent = minuto
    s.textContent = segundo

    setTimeout("moveRelogio()",1000)
}