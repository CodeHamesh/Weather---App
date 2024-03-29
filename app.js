let url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ecf318d8ce8e73ae6560907cd686b8af"
let inp = document.querySelector("input")
let btn = document.querySelector("button")
let p = document.querySelector("p")
async function wApp(city){
    let f = await fetch(url + `&q=${city}` + `&units=metric`)
    let j = await f.json();
    console.log(j);
    p.textContent = j.main.temp + " °C"

}

btn.addEventListener("click",()=>{
   wApp(inp.value)
   inp.value = ''
})

inp.addEventListener("keydown",(e)=>{
   if (e.keyCode === 13) {
    wApp(inp.value)
    inp.value = ''
   }
})





