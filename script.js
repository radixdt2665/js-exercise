// function menuShow(){
//     var link = document.getElementsByClassName("nav-link");
//     console.log(link,"link");
//     var s = document.getElementById("hover-menu");
//     s.classList.toggle("classAdded")
//     console.log(s,"s");
// }

function menuShow(){
    var link = document.querySelectorAll(".nav-link");
    for(var i = 0; i < link.length; i++){
        link[i] = addEventListener("click",function(){
            var current = document.getElementsByClassName("active");
            var s = current[0].className ;
            var a = current[0].className.replace(" active", "");
            console.log(a,"a");
            s = a;
            this.className += " active";
            console.log(s,"s");
            // current[0].className = current[0].className.replace(" active", "");
            // this.className += " active";
        })
    }
    // link.forEach(function(link){

    // })
    // console.log(link,"link");
    // var s = document.getElementById("hover-menu");
    // s.classList.toggle("classAdded")
    // console.log(s,"s");
}