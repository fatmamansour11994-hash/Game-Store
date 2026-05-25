// زر Buy اللعبة
function buyGame(gameName){
    alert("Game added to cart: " + gameName + " إلى السلة 🛒");
}


// تغيير الثيم
const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function(){
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML = "☀️";
    }
    else{
        themeBtn.innerHTML = "🌙";
    }
}