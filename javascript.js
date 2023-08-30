const divContainer = document.getElementById("divContainer");
const gridSizeButton = document.getElementById("gridSizeButton")

//let gridSize = 0;
let gridChoice = 0;

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

//Trying to find a way to delete grid before and then enter new grid
/*
gridSizeButton.onclick = function (){
    let gridChoice = prompt("What Size grid do you want");
    console.log("before if statement");
    console.log(gridChoice);
    if (gridChoice <100){ 
        console.log("after if statement");
        let gridSize = gridChoice;
        gridCreation();
    }
    else{
        alert("a number less than 100 must be chosen");
    }
}
*/

gridSizeButton.onclick = function (){

  //  for(let i = 0; i < 0; i++){

        const divColoums = divContainer.getElementsByTagName("divColoums");
        for(let p = -3; p < divColoums.length; p++){
            divContainer.removeChild(divColoums[0]);
            console.log('within P for loop');
        }
   // }
    
   // divContainer.appendChild(divColoums);
    
   // divColoums.appendChild(divRow);

   // divColoums.parentNode.removeChild(divColoums);
  //  divRow.parentNode.removeChild(divRow);
    
}



/*function gridCreation() {
    //Creates coloums
    
   // divColoums.parentNode.removeChild(divColoums);
   // divRow.parentNode.removeChild(divRow);
    

    for(let i = 0; i < 8; i++){
        console.log(gridSize);
        console.log(gridChoice);
        console.log(i);
        const divColoums = document.createElement("divColoums");
        
        console.log("Testing"+ i)
        divContainer.appendChild(divColoums);
        
        divColoums.parentNode.removeChild(divColoums);
        console.log(i);

        //Creates Rows
        for(let i = 0; i < 4; i++){
            const divRow = document.createElement("divRow");
            console.log("Testing"+ i)
            divColoums.appendChild(divRow);

            divRow.parentNode.removeChild(divRow);
    }
    }
}
*/

//gridCreation();

