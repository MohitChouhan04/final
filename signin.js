

const ccount = () =>{
    document.getElementById("cdown-container").style.display="none";
}
ccount();

const cdisplay = () =>{
    document.getElementById("cdown-container").style.display="block";
}

const hometrigger= () =>{
    document.querySelector(".container").style.display="block";
}
const featuretrigger = () =>{
    document.querySelector(".grid-text").style.display;
}


const endDate= "28 May 2025"
document.getElementById("end-date");
const inputs = document.querySelectorAll("input");


function clock(){
    const end =new Date(endDate);
    const now = new Date();
    // console.log(end);
    // console.log(now);
    const diff= (end-now)/1000;
    // console.log(diff);
    if(diff < 0){
        return;
    }
    inputs[0].value= Math.floor(diff / 3600  /24);
    inputs[1].value= Math.floor(diff/ 3600)%24;
    inputs[2].value= Math.floor(diff / 60 )%60;
    inputs[3].value= Math.floor(diff)%60;
}
clock();
// 1day = 24hour 
// 1hr = 60min 
// 60min = 3600sec 
setInterval(()=>{
    clock();
},1000)