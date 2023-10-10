
// loading effect 

let loadingbar = document.querySelector(".loadingbar");
window.addEventListener("load",()=>{
   setTimeout(()=>{
    loadingbar.style.display="none";
   },2000)
})


// cursor move effect
let main= document.querySelector("body");
let cursor = document.querySelector(".cursor");
let timeout;


// console.log(cursor)
document.addEventListener("mousemove", (e)=>{
    cursor.style.left=e.pageX+"px";
    cursor.style.top=e.pageY+"px";
    cursor.style.display="block";
    // when cursor stop
    function mouseStopped(){
        cursor.style.display="none"
    }
    clearTimeout(timeout)
    timeout=setTimeout(mouseStopped,100)

})
// when cursor  out
document.addEventListener("mouseout",(e)=>{
    cursor.style.display="none"
})







let elem= document.querySelectorAll(".elem");
// console.log(elem);

elem.forEach(function(e){
    // console.log(e.childNodes[3]);
e.addEventListener("mousemove",function(dets){
e.childNodes[3].style.left=dets.pageX+"px"
// e.childNodes[3].style.top=dets.pageY+"px"
})
e.addEventListener("mouseenter",function(dets){
    e.childNodes[3].style.opacity=1;
})
e.addEventListener("mouseleave",function(dets){
    e.childNodes[3].style.opacity=0;

})
})