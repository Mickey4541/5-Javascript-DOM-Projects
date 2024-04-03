var con = document.querySelector("#container")
var love = document.querySelector("i")


con.addEventListener("dblclick",function(){
    love.style.transform = 'translate(-50%,-50%) scale(1)'
    love.style.opacity = '0.9'

// settimeout kaa matlab delay
setTimeout(function(){
    love.style.opacity = 0;/*opacity 0 diyim, increase vayera ekdam sitaa gayab hunxa love */
},1000)


setTimeout(function(){
    love.style.transform = 'translate(-50%,-50%) scale(0)'
},2000)
});

