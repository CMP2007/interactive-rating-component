let points = Array.from(document.querySelectorAll(".RatingState_div"));
let check = [];
let element ;


function deleteCheck(id){
    if (check.length >= 2) {
        check[0].classList.remove(`point_Selected`);
        check[0].setAttribute("class","point_hover point");
        check[0].setAttribute("check","false");
        console.log(check);
        if(check[0] === check[1]){

        };

        check.shift();
    }
}




    addEventListener("mousedown", ()=>{
        let point = event.target;
        if (point.id) {
            point.classList.remove(`point_hover`);
            point.setAttribute("class","point_Selected point");
            point.setAttribute("check","true");
            check.push(point)
            deleteCheck(point.id)
        }
    })

