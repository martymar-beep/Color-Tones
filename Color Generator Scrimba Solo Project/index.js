const getBtn = document.getElementById("get-btn")

getBtn.addEventListener("click", function(){
    const colorInput = document.getElementById("color-input").value;
    const removeHex = colorInput.replace("#", "");
    const colorScheme = document.getElementById("color-schemes").value;
   
 fetch(`https://www.thecolorapi.com/scheme?hex=${removeHex}&mode=${colorScheme}&count=5`, {
    method: "GET" })
        .then(response => response.json())
        .then(data =>{
            document.getElementById("color-palette").style.display = "grid";  
/*put swatches & codes into arrays*/
    const swatches = Array.from(document.querySelectorAll(".color-swatch"));
    const codes = Array.from(document.querySelectorAll(".color-code"));
    
/*loop thru the arrays*/
    data.colors.forEach((color, index) => {
    if (index < swatches.length) {
    swatches[index].style.backgroundColor = color.hex.value;
    codes[index].textContent = color.hex.value;
  }
})
})
    .catch(err => {
  console.error("Fetch error:", err);
  alert("Sorry! Something went wrong while fetching your color scheme.");
  
})
})
    

