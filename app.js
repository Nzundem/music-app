window.addEventListener('load',()=>{
    const sounds =  document.querySelectorAll('.sounds');
    const pads =  document.querySelectorAll('.pads div');
    console.log(sounds)

//Lets get going with th sound
    pads.forEach((pad,index) => {
        pad.addEventListener('click',function(){
            sounds[index].currentTime = 0
            sounds[index].play();
        })
    })
})
