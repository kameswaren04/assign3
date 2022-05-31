$(document).ready(function(){
    jsonObject.emp_details.forEach((i)=>loadProducts(i));

});

// function example(){
//     jsonObject.products.forEach((i)=>loadProducts(i));

// }
function loadProducts(data){

    var data1 = document.createElement('div');
   data1.innerHTML =  '<div class="rect">'+
    '<div class="rect1"><img src="'+ data.EmployeeDP +'" class="rect_img"></div>'+
    '<div class="subrect"><p class="subrect_p1">'+ data.EmployeeName +'</p>'+
    '<span>'+ data.Designation +'</span>'+
    '<p class="subrect_p2">'+ data.EmployeeDetails +'</p>'+
'</div>';
document.getElementById("content1").appendChild(data1);
//console.log(data1);
}

const division = document.getElementsByClassName("rect");
const hide = document.getElementsByClassName("hide");

division.addEventListner("mouseenter",a);
division.addEventListner("mouseleave",b);
    
function a(){
     
}

function b(){

}
