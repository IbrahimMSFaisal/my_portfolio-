let imgs    = document.getElementById("image"),
    videos  = document.getElementById("vid"),
    prevV   = document.getElementsByClassName("fa-backward")[0],
    nextV   = document.getElementsByClassName("fa-forward")[0],
    counter = 1;

setInterval(() => {
    counter++;
    if(counter === 6)counter=1;
    imgs.src = `/images/certificate/0${counter}.jpg`;
    imgs.style.transition = "all 1.5s ease-in-out";
}, 1000);

let count = 1;
prevV.addEventListener('click',()=>{
    count--;
    if(count <= 0)count = 3;
    videos.src = `/vedioes/0${count}.mp4`;
})

nextV.addEventListener('click',()=>{
    count++;
    if(count === 4)count = 1;
    videos.src = `/vedioes/0${count}.mp4`;
})




