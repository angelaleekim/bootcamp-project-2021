function addIngredient() {
   var ul = document.getElementById("ingredients");
   var li = document.createElement("li");
   li.appendChild(document.createTextNode("ingredient description here"));
   li.setAttribute("id", "testId");
   ul.appendChild(li);
}