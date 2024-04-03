var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")

// var removeFriend = document.querySelector("#remove")
var check = 0


btn.addEventListener("click",function(){
    if(check == 0){
    istatus.innerHTML = "She is Your Friend Now."
    istatus.style.color ="green";
    btn.innerHTML = "Remove Friend"
    btn.style.backgroundColor = "Red"
    check = 1
    }
    else{
        istatus.innerHTML = "She is a Stranger !!!"
    istatus.style.color ="red";
    btn.innerHTML = "Add Friend"
    btn.style.backgroundColor = "blue"

    check = 0
    }
})
// addFriend.addEventListener("mousemove",function(){
//     istatus.innerHTML = "Are you willing to make her friend???"
//     istatus.style.color ="green";
// })
// addFriend.addEventListener("mouseout",function(){
//     istatus.innerHTML = "Why are you not clicking on add friend"
//     istatus.style.color ="green";
// })


// removeFriend.addEventListener("click",function(){
//     istatus.innerHTML = "She is a Stranger !!!"
//     istatus.style.color ="red";
// })
