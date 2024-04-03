


// this is for one element



// var elem1 = document.querySelector("#elem1")

// var elemImage = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove",function(dets){
//     elemImage.style.left = dets.x+"px"
//     elemImage.style.top = dets.y+"px"

// })
// elem1.addEventListener("mouseenter",function(){
//     elemImage.style.opacity = 1
// })
// elem1.addEventListener("mouseleave", function(){
//     elemImage.style.opacity = 0
// })

// this is for all element
var elem = document.querySelectorAll(".elem");


// elem.forEach(function(val){
//     console.log(val.childNodes[3]) /*yaha child node [3] maa image matra dinxa. 0,1,2 rakhera herda ni hunxa.*/ 
// })

/*here val = elem*/
elem.forEach(function(val)
{
    val.addEventListener("mouseenter", function(){
        val.childNodes[3].style.opacity = 1
    });

        val.addEventListener("mouseleave", function(){
            val.childNodes[3].style.opacity = 0
        });

        val.addEventListener("mousemove",function(dets){
            val.childNodes[3].style.left = dets.x+"px"
            val.childNodes[3].style.top = dets.y+"px"
        });
});
