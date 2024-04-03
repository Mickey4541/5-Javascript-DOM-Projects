var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")
// dets function ko small bracket maa pass 
// garera console.log(dets) garni ho vani mouse ko move vako x axis ko Ra
// y axis maa move vako points haru 
// dinxa . ra dets.x ra dets.y garni
// ho vani x-axis ra y-axis kaa points haru dinxa. Yo sabai 
// console bat harna sakinxa.
main.addEventListener("mousemove",function(dets){
    //aani aaha crsr.style maa left taba kaam garxa jaba hamile css maa .cursor lai position absolute dinxam.
    crsr.style.left = dets.x+"px" //x axis maa move gareko px maa
    crsr.style.top = dets.y+"px"   //y axis maa move gareko

})
