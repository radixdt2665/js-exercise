var navlink = document.querySelectorAll(".nav-link");

navlink.forEach((el)=>{
    el.addEventListener("click",(event) => {
        event.preventDefault();
        var elems = document.querySelector(".open");
        console.log(elems,"elems");
        if(elems !== null){
            elems.classList.remove("open");
        }
        const submenu = event.target.parentElement.querySelector(".hover-menu");
        console.log(submenu,"submenu");
        submenu.classList.add("open");
    })
})



// function menuShow(){
//     var link = document.getElementsByClassName("nav-link");
//     console.log(link,"link");
//     var s = document.getElementsByClassName("hover-menu");
//     for(var i = 0; i < s.length; i++)
//         {
//             s[i].className += "classAdd";
//         }
//     // s.classList.toggle("classAdded")
//     // console.log(s,"s");
// }

// function menuShow(){
//     var link = document.querySelectorAll(".nav-link");
//     for(var i = 0; i < link.length; i++){
//         link[i] = addEventListener("click",function(){
//             var current = document.getElementsByClassName("active");
//             var s = current[0].className ;
//             var a = current[0].className.replace(" active", "");
//             console.log(a,"a");
//             s = a;
//             this.className += " active";
//             console.log(s,"s");
//             // current[0].className = current[0].className.replace(" active", "");
//             // this.className += " active";
//         })
//     }
    // link.forEach(function(link){

    // })
    // console.log(link,"link");
    // var s = document.getElementById("hover-menu");
    // s.classList.toggle("classAdded")
    // console.log(s,"s");
// }


// var contentTitle = document.querySelectorAll(".content-main .title");
// var contentPara = document.querySelectorAll(".content-main .content-para");

// console.log(contentTitle,"objectss");

// window.onscroll = function(){myFun()}
// function myFun(){
//     let lastScrollTop = 0;
//     let scroll = document.documentElement.scrollTop;
//     console.log(scroll,"scroll");
//     // console.log(lastScrollTop,"lastscroll");
//         if(scroll > 0){
//             if(scroll > lastScrollTop){
//                 contentTitle.classList.add("position-fixed");
//                 console.log("innerif");
//             }
//             else{
//             //         contentTitle.classList.remove("position-fixed");
//             //         contentPara.classList.remove("d-none");
//             console.log("innerelse");
//             }
//             console.log("if");
//         }else{
//                 // contentTitle.classList.remove("position-fixed");
//                 // contentPara.classList.remove("d-none");
//                 console.log("else");
//         }
//         console.log(lastScrollTop,"ssss");
//         lastScrollTop = scroll;

//     // let height = document.getElementByClassName("custom-navbar").outerHeight();
//     // console.log(height);
//     // if (scroll >= 50) {
//     //     document.getElementByClassName("custom-navbar").addClass("headerSticky shadow");
//     // } else {
//     //     document.getElementByClassName("custom-navbar").removeClass("headerSticky shadow");
//     // }
// }

// var contentTitle = document.querySelectorAll(".content-main .title");
// var contentPara = document.querySelectorAll(".content-main .content-para");

// console.log(contentTitle,"objectss");

// window.onscroll = function(){myFun()}
// function myFun(){
//     let lastScrollTop = 0;
//     let scroll = document.documentElement.scrollTop;
//     console.log(scroll,"scroll");
//     // console.log(lastScrollTop,"lastscroll");
//         if(scroll > 0){
//             if(scroll > lastScrollTop){
//                 contentTitle.classList.add("position-fixed");
//                 console.log("innerif");
//             }
//             else{
//             //         contentTitle.classList.remove("position-fixed");
//             //         contentPara.classList.remove("d-none");
//             console.log("innerelse");
//             }
//             console.log("if");
//         }else{
//                 // contentTitle.classList.remove("position-fixed");
//                 // contentPara.classList.remove("d-none");
//                 console.log("else");
//         }
//         console.log(lastScrollTop,"ssss");
//         lastScrollTop = scroll;

//     // let height = document.getElementByClassName("custom-navbar").outerHeight();
//     // console.log(height);
//     // if (scroll >= 50) {
//     //     document.getElementByClassName("custom-navbar").addClass("headerSticky shadow");
//     // } else {
//     //     document.getElementByClassName("custom-navbar").removeClass("headerSticky shadow");
//     // }
// }



// differnce of let and var
function greet() {
    // variable a can be used here
    let a = 'hello';
    console.log(a);
    if(a=="hello"){
        let b="World";
        console.log(b);
    }
    // console.log(b);
}
// console.log(a);
greet();




// assignment operators

var a = 5;
console.log(a,"a");
// var b = a+=1;
// console.log(b,"b");

var c = a**=3;
console.log(c,"c");


// logical operator

// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false


// if else condition
let number = 2;
if (number > 0) {
    console.log(true,"condition true");
    // code block 1
} else {
    console.log(false,"condition false");
    // code block 3
}






addEventListener('DOMContentLoaded', (event) => {
    console.log('The DOM is fully loaded.');
});

addEventListener('load', (event) => {
    console.log('The page is fully loaded.');
});

addEventListener('beforeunload', (event) => {
    // show the confirmation dialog
    event.preventDefault();
    // Google Chrome requires returnValue to be set.
    event.returnValue = '';
});

addEventListener('unload', (event) => {
    // send analytic data
});




let btn = document.getElementById('btnRate');
let output = document.getElementById('output');

btn.addEventListener('click', () => {
    let rates = document.getElementsByName('rate');
    rates.forEach((rate) => {
        if (rate.checked) {
            output.innerText = `You selected: ${rate.value}`;
        }
    });

});

let currentNext = document.querySelector('.current');
let nextSibling = currentNext.nextElementSibling.innerHTML;
console.log(nextSibling,"nextSibling");

let current2 = document.querySelector('.current');
let prevSiblings = current2.previousElementSibling.innerHTML;
console.log(prevSiblings,"previousSibling");

let getSiblings = function (e) {
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    if(!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentNode.firstChild;
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};

let siblings = getSiblings(document.querySelector('.current'));
siblingText = siblings.map(e => e.innerHTML);
console.log(siblingText);