const divContainer = document.getElementById("divContainer");

//Creates Coloums
for(let i = 0; i < 4; i++){

const divColoums = document.createElement("divColoums");

console.log("Testing"+ i)
divContainer.appendChild(divColoums);

//Creates Rows
for(let i = 0; i < 4; i++){
    const divRow = document.createElement("divRow");
    console.log("Testing"+ i)
    divColoums.appendChild(divRow);
}
}
