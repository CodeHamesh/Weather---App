let url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ecf318d8ce8e73ae6560907cd686b8af"

async function wApp(city){
    let f = await fetch(url + `&q=${city}` + `&units=metric`)
    let j = await f.json();
    return j

}
wApp("jaipur")


;

let inp = document.querySelector("input")
let btn = document.querySelector("button")
let p = document.querySelector("p")

btn.addEventListener("click",()=>{
   
})


function name(params) {
    let add = 2*2
    return add
}