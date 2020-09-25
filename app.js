window.addEventListener('load',()=>{
    const sounds =  document.querySelectorAll('.sounds');
    const pads =  document.querySelectorAll('.pads div');
    const visuals = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ]
    console.log(sounds)

//Lets get going with th sound
    pads.forEach((pad,index) => {
        pad.addEventListener('click',function(){
            sounds[index].currentTime = 0
            sounds[index].play();
            createBubbles(index)
        })
    })
    //Create function to make bubble when pad is clicked
    const createBubbles = (index)=>{
        const bubble = document.createElement('div');
        visuals.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease"
        bubble.addEventListener('animationend',function(){
            visuals.removeChild(this)
        })
    }
    
})
