const calendar = document.querySelector("#app-calendar");
const isWeekend = day =>{
    return day%7===6||day%7===0;
}

for(let day = 1; day<=31; day++){
    const weekend = isWeekend(day);
    const date = new Date(2021, 2, day);
    const options = {weekday: "short"};
     const dayName = new Intl.DateTimeFormat("en-us", options).format(date);

    // console.log( weekend ? "yes": "");
let name ="";
if(day<=7){

    name = `<div class = "name">${dayName}</div>` ;
}

  

    calendar.insertAdjacentHTML("beforeend", `<div class=" card
    selected ${weekend ? "weekend": ""}">
    <div class = "name">${name}</div>
    ${day}</div>`)

}