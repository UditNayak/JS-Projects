let container = document.getElementById("container");
let clickCount = 0;

container.addEventListener("click", function(e) {
    console.log(e);
    if (e.target.classList.contains("btn")) {

        // Create two new buttons with similar properties
        let newButton1 = document.createElement("button");
        newButton1.setAttribute("class", "btn");
        newButton1.innerText = "button" + (++clickCount);

        let newButton2 = document.createElement("button");
        newButton2.setAttribute("class", "btn");
        newButton2.innerText = "button" + (++clickCount);

        container.appendChild(newButton1);
        container.appendChild(newButton2);

        // Remove the clicked button
        container.removeChild(e.target);
    }
});
