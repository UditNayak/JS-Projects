let f = document.getElementById("f");
let d = document.getElementById("d");
let p = document.getElementById("p");

f.addEventListener("click", function (e) {
    console.log("f");
    e.stopPropagation();
});

d.addEventListener("click", function (e) {
    console.log("d");
    e.stopPropagation();
});

p.addEventListener("click", function (e) {
    console.log("p");
    e.stopPropagation();
});   // true -> Evebt Bubbling