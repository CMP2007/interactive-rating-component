var submit = document.querySelector(".RatingState_submit");
var points = Array.from(document.querySelectorAll(".point"));
var ratingState = document.querySelector(".RatingState");
var score = document.querySelector(".score");
var check = [];
let validated;
var select;


function deleteCheck(){
    if (check.length >= 2) {
        check[0].classList.remove(`point_Selected`);
        check[0].setAttribute("class","point_hover point");
        check[0].setAttribute("check","false");
        if (check[0] === check[1]) {
            validated = false;
        }
        check.shift(); 
        console.log(check);
    }
}

function selectedCheck(point) {
    console.log(select);
    point.classList.remove(`point_hover`);
    point.setAttribute("class","point_Selected point");
    point.setAttribute("check","true");
    check.push(point)
    validated = true;
    deleteCheck()   
}

points.forEach(function (element) {
    element.addEventListener("mousedown", ()=>{
        let point = event.target;
        select = point.id
        selectedCheck(point);
        
console.log(validated);

    })
})


submit.addEventListener("mousedown",()=>{
    if (validated === true ) {
        ratingState.setAttribute("class","animation");
        score.textContent = select
        console.log(select);
    }else{
        alert("Por Favor Calificanos")
    }
})
