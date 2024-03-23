var submit = document.querySelector(".RatingState_submit"); //submit button 
var points = Array.from(document.querySelectorAll(".point")); // punctuation elements
var ratingState = document.querySelector(".RatingState"); //score container
var score = document.querySelector(".score"); //score span

let check = []; //Selected items
let validated; //validation
let select;//selected score



function selectedCheck(point) {
    console.log(select);
    point.classList.remove(`point_hover`);
    point.setAttribute("class","point_Selected point");
    point.setAttribute("check","true");
    check.push(point)
    validated = true;
    deleteCheck()   
}

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
