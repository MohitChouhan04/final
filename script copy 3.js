const reply = (res)=>{
    var res= document.getElementById(res);
    console.log(res);
    if(res.className == "replies" ){
        res.className = "thapa_show";
    }
    else if(res.className == "thapa_show"){
        res.className = "replies";
    }

}

// like button js
const like = document.getElementById('like_btn');
const singleclick=() =>{
    like.style.fontWeight = 'bold';
    like.style.background = '#bbe1fa';
    like.style.color = '#1b262c';
    like.innerHTML = '✔️liked';
}
const doubleclick = () =>{
    like.style.fontWeight = 'normal';
    like.style.background = '#3282b8';
    like.style.color = '#fff';
    like.innerHTML = 'Like';
}
var clickcount=0;
like.addEventListener('click' , function(){
    clickcount++;
    if(clickcount === 1){
        singleclicktimer = setTimeout(function(){
            clickcount=0;
            singleclick();

        },400);
    }
    else if(clickcount === 2){
        clearTimeout(singleclicktimer);
        clickcount=0;
        doubleclick();
    }
},false);