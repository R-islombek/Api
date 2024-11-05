const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const form = document.querySelector("#namozform");
const weather = document.querySelector(".weather");
const hero__container = document.querySelector(".hero__container")

form.addEventListener("submit" , function(e){
    e.preventDefault();
     let KEY = `7639f5cd4da89691622ae7276bc486df`;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${KEY}`)
    .then(res=> res.json())
    .then(data=>
        weather.innerHTML = `
        <p id="harorat">Harorat: ${Math.round(data.main.temp)}<sup>o</sup> </p>
        `
        )
        .catch((error)=>
        console.log("xato")
        )

})




form.addEventListener("submit" ,function(even){
    even.preventDefault();
    fetch(`https://islomapi.uz/api/present/day?region=${input.value}`)

    .then(result=> result.json())
    .then(d=>
        hero__container.innerHTML = ` <div class="container hero__container">
        <h1 id="shahar">${d.region}  ${d.date}  ${d.weekday}</h1>
        <ul class="hero__list">
            <li class="hero__item">
                <h2 id="bomdod" class="hero__tittle">BOMDOD</h2>
                <h2 id="peshin" class="hero__tittle">PESHIN</h2>
                <h2 id="asr" class="hero__tittle">ASR</h2>
                <h2 id="shom" class="hero__tittle">SHOM</h2>
                <h2 id="xufton" class="hero__tittle">XUFTON</h2>
            </li>
            <li class="hero__item">
                <h2 class="hero__name" id="time">${d.times.tong_saharlik}</h2>
                <h2 class="hero__name" id="time">${d.times.peshin}</h2>
                <h2 class="hero__name" id="time">${d.times.asr}</h2>
                <h2 class="hero__name" id="time">${d.times.shom_iftor}</h2>
                <h2 class="hero__name" id="time">${d.times.hufton}</h2>
            </li>
        </ul>
    </div>`
        )
        .catch((error)=>
        console.log("xatolik yuz berdi")
        )
})




