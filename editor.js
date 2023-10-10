console.log("the vedu website ready  to launch");

// when click on choose img so it choose the Image

let chooseimgbutton= document.querySelector(".imgcontainer button");
let chooseimageinput=  document.querySelector(".imgcontainer input");
chooseimgbutton.addEventListener("click",()=>{
    chooseimageinput.click()
})




// when img choose the  img show  in img section
let chooseimage=  document.querySelector(".imgcontainer img");
chooseimageinput.addEventListener("change",(e)=>{
// console.log(chooseimageinput.files[0]);
chooseimage.src=URL.createObjectURL(chooseimageinput.files[0])
})



let  imgicons= document.querySelectorAll(".fimg img");
let inputslider= document.querySelector(".inpturange input");
let slidervalue=document.querySelector(".fvalue");
var brightness=100 , contrast =100, saturate= 100 , invert= 0 , blur=0,rotate=0 ,flipx=1,flipy=1;
let rimg = document.querySelectorAll(".rimg img")
imgicons.forEach((element)=>{
element.addEventListener("click",()=>{
    // console.log(element);
    document.querySelector(".active").classList.remove("active")
    element.classList.add("active")

    let fname= document.querySelector(".fname");
    fname.innerHTML=element.id;
    if(element.id=="brightness"){
        inputslider.max = "200";
        inputslider.value=brightness;
        slidervalue.innerText = `${brightness}`
    }
     else if(element.id=="contrast")
    {
        inputslider.max = "200";
        inputslider.value=contrast;
        slidervalue.innerText = `${contrast}`
    }
    else if(element.id=="saturate")
    {
        inputslider.max = "200";
        inputslider.value=saturate;
        slidervalue.innerText = `${saturate}`
    }
    else if(element.id=="invert")
    {
        inputslider.max = "100";
        inputslider.value=invert;
        slidervalue.innerText = `${invert}`
    }
    else if(element.id=="blur")
    {
        inputslider.max = "100";
        inputslider.value=blur;
        slidervalue.innerText = `${blur}`
    }
})
})
// console.log(inputslider);
inputslider.addEventListener("input",()=>{
    slidervalue.innerText = `${inputslider.value}%`
    let sliderstate=document.querySelector(".fimg .active");
    if(sliderstate.id==="brightness")
    {
        brightness = inputslider.value
    }
    else if(sliderstate.id==="contrast") 
    {
        contrast = inputslider.value ;

    }
    else if(sliderstate.id==="saturate") 
    {
        saturate = inputslider.value ;

    }
     else if(sliderstate.id==="invert") 
    {
        invert = inputslider.value ;

    }
     else if(sliderstate.id==="blur") 
    {
        blur = inputslider.value ;

    }
    chooseimage.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur}px)`
});


// flip and rotate


rimg.forEach((element)=>{
    element.addEventListener("click",()=>{
        if(element.id=== "rotateleft"){
            rotate-= 90 ;

        }
       else if(element.id=== "rotateright"){
            rotate+= 90 ;

        }
       else if(element.id=== "flipx"){
           flipx = flipx === 1 ? -1 : 1 ;

        }
       else if(element.id=== "flipy"){
        flipy = flipy === 1 ? -1 : 1 ;

        }
        chooseimage.style.transform = `rotate(${rotate}deg) scale(${flipx},${flipy})`
    })
})

// reset and save 

let reset = document.querySelector(".reset");
let save = document.querySelector(".save");
// console.log(reset);
reset.addEventListener("click",()=>{
    brightness= "100";
    saturate= "100";
    contrast= "100";
    invert= "0";
    blur = "0";
    rotate= 0;
    flipx= 1;
    flipy= 1;

    chooseimage.style.transform = `rotate(${rotate}deg) scale(${flipx},${flipy})`

    chooseimage.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur}px)`

})

save.addEventListener("click", () => {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = chooseimage.naturalWidth;
    canvas.height = chooseimage.naturalHeight;
    ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur}px)`;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(flipx, flipy);
    ctx.drawImage(
        chooseimage,
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width,
      canvas.height
    );
    const link = document.createElement("a");
    link.download = "vedueditorimg.jpg";
    link.href = canvas.toDataURL();
    link.click();
});




