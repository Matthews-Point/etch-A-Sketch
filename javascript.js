const divContainer = document.getElementById("divContainer");

for(let i = 1; i < 257; i++){

const div = document.createElement("div");
div.style.background = "red";

div.innerHTML = i;
console.log("Testing"+ i)
divContainer.appendChild(div);
}

