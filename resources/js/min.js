function openManu(){
    document.getElementById('myNav').style.width="60%";
}
function closeManu(){
    document.getElementById('myNav').style.width="0%";
}
// var a=false;
// function dropdowan(){
//     a=true;
//     if(a){
//         document.querySelector('#dropdown_menu').style.display="block";
//         return;
//     }
//     if(a){
//         a=false;
//         document.querySelector("#dropdown_menu").style.display="none";
//         return;
//     }
// }
// preloder
let preloader=document.getElementById('preloder');
function loading(){
    preloader.style.display="none"
}


// star time now
const day=document.querySelector('.set_time_days .numb');
const hor=document.querySelector('.set_time_hor .numb');
const min=document.querySelector('.set_time_min .numb');
const sec=document.querySelector('.set_time_sec .numb'); 
let time=setInterval(function(){
    var current=new Date().getTime();
    var launchDate=new Date("jun 25,2021 13:59:58").getTime();
    var duration=launchDate-current;
    var days=Math.floor(duration/(1000*60*60*24));
    var hours=Math.floor((duration % (1000*60*60*24))/(1000*60*60)); 
    var minutes=Math.floor((duration % (1000*60*60))/(1000*60));
    var seconds=Math.floor((duration % (1000*60))/1000);
    day.innerHTML=days;
    hor.innerHTML=hours;
    min.innerHTML=minutes;
    sec.innerHTML=seconds;
    if(days<10){
        day.innerHTML="0"+days;
    }
    if(hours<10){
        hor.innerHTML='0'+hours;
    }
    if(minutes<10){
        min.innerHTML='0'+minutes;
    }
    if(duration<0){
        clearInterval(time)
    }
},1000);
    // new time
    const day_f=document.querySelector('.set_time_days_f .numb_f');
    const hor_f=document.querySelector('.set_time_hor_f  .numb_f');
    const min_f=document.querySelector('.set_time_min_f .numb_f');
    const sec_f=document.querySelector('.set_time_sec_f .numb_f'); 
    let time_f=setInterval(function(){
    var current_f=new Date().getTime();
    var launchDate_f=new Date("jun 25,2021 13:59:58").getTime();
    var duration_f=launchDate_f-current_f;
    var days_f=Math.floor(duration_f/(1000*60*60*24));
    var hours_f=Math.floor((duration_f % (1000*60*60*24))/(1000*60*60)); 
    var minutes_f=Math.floor((duration_f % (1000*60*60))/(1000*60));
    var seconds_f=Math.floor((duration_f % (1000*60))/1000);
    day_f.innerHTML=days_f;
    hor_f.innerHTML=hours_f;
    min_f.innerHTML=minutes_f;
    sec_f.innerHTML=seconds_f;
    if(days_f<10){
        day_f.innerHTML="0"+days_f;
    }
    if(hours_f<10){
        hor_f.innerHTML='0'+hours_f;
    }
    if(minutes_f<10){
        min_f.innerHTML='0'+minutes_f;
    }
    if(duration_f<0){
        clearInterval(time_f)
    }
},1000);
// agin time start
const day_s=document.querySelector('.set_time_days_s .numb_s');
const hor_s=document.querySelector('.set_time_hor_s .numb_s');
const min_s=document.querySelector('.set_time_min_s .numb_s');
const sec_s=document.querySelector('.set_time_sec_s .numb_s'); 
let time_s=setInterval(function(){
var current_s=new Date().getTime();
var launchDate_s=new Date("jun 25,2021 13:59:58").getTime();
var duration_s=launchDate_s-current_s;
var days_s=Math.floor(duration_s/(1000*60*60*24));
var hours_s=Math.floor((duration_s % (1000*60*60*24))/(1000*60*60)); 
var minutes_s=Math.floor((duration_s % (1000*60*60))/(1000*60));
var seconds_s=Math.floor((duration_s % (1000*60))/1000);
day_s.innerHTML=days_s;
hor_s.innerHTML=hours_s;
min_s.innerHTML=minutes_s;
sec_s.innerHTML=seconds_s;
if(days_s<10){
    day_s.innerHTML="0"+days_s;
}
if(hours_s<10){
    hor_s.innerHTML='0'+hours_s;
}
if(minutes_s<10){
    min_s.innerHTML='0'+minutes_s;
}
if(duration_s<0){
    clearInterval(time_s)
}
},1000);
   


$(document).ready(function(){
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            margin:20,
            items:3,
            loop:true,
            autoplayHoverPause:true,
            autoplay:false,
            autoplayTimeout:3000,
            responseresponsiveRefreshRate:true,
            responsive:{
                0:{
                    items:2,
                },
                575.98:{
                    items:3,
                },
                767.98:{
                    items:3,
                },
                991.98:{
                    items:3,
                },
                1199.98:{
                    items:3,
                },
                1919.98:{
                    items:3,
                }
            }
        });
    })
    AOS.init({
  duration: 1200,
})



















//     $(document).ready(function(){
//         $("a").on("click", function (e) {
//         if ("" !== this.hash) {
//             e.preventDefault();
//             var t = this.hash;
//             $("html, body").animate({ scrollTop: $(t).offset().top }, 500, function () {
//                 window.location.hash = t;
//             });
//         }
//     });
//     }) 
});