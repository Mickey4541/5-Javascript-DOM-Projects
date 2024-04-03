/*for each loop is always on array. sadhai array maa loop
lagauda foreach loop */

// var arr = [1,2,3,4,5]

// arr.forEach(function(elem){
//     console.log("Hello")
// })


// var arr = [1,2,3,4,5]

// var clutter = ""
// arr.forEach(function(){
//     clutter += "Hello"
// })
// console.log(clutter)


// var arr = [1,2,3,4,5]

// var clutter = ""
// arr.forEach(function(elem){
//     clutter += elem
// })
// console.log(elem)

var stories = document.querySelector("#stories")
var arr = [
    /*this is array bhitra ko objects haru */
    {dp:"./model1.jpg",story:"./model1.jpg"},
    {dp:"./model3.jpg",story:"./model3.jpg"},
    {dp:"./model2.jpg",story:"./model2.jpg"},
    {dp:"./model4.jpg",story:"./model4.jpg"},
    {dp:"./model6.jpg",story:"./model6.jpg"},
    {dp:"./model5.jpg",story:"./model5.jpg"},
    {dp:"./model7.jpg",story:"./model7.jpg"},

]

var clutter = ""
arr.forEach(function(elem,idx){
    // console.log(elem,idx)
    clutter += `<div id="story">
    <img id = "${idx} "src="${elem.dp}" alt="">
</div> `                /*` ` is backtake template literals*/
})

// document.querySelector("#stories").innerHTML = clutter
stories.innerHTML = clutter
stories.addEventListener("click", function(dets){
    // console.log(dets.target) ==== yesle jaha click garxam(target) tyo dinxa
    // for example image maa click garepaxi image dinxa

    // console.log(dets.target.id) === yesle jun image maa click
    // garxau tesko id dinxa 

//      dets,target.id ley pura object uthayera dinxa
//     ra .story last maa jod diyepaxi tyo click gareko image dinxa


    // console.log(arr[dets.target.id].story)

    // var value = arr[dets.target.id].story
    var value = arr[parseInt(dets.target.id)].story;


    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${value})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },2000)

    })
