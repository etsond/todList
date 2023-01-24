//select items to work with
var buttonClick = document.querySelector(".button");
var input = document.querySelector(".user")
var ul = document.querySelector("ul");

//Function to calculate and return the user input length
function inputLength(){
    return input.value.length;
}

   //Function create the elements button, the list, the delete button
function createListElement(){
    //create the list variable and store the li itmes
    var li = document.createElement("li");
    //adding input value to the current li items from the list
    li.appendChild(document.createTextNode(input.value));
    //after getting the user input to the li now you add it to the ul(unorder list which is the parent)
    ul.appendChild(li);
    //do the same thing by creating a variable that stores the button
    var delButton = document.createElement("button");
    //after the delButton has been store you then create the text node which will be inside of the button aka (button.innnerHTML("remove"))
    delButton.appendChild(document.createTextNode("remove "));
    //Again you add the delete button to the li 
    li.appendChild(delButton);
    //Now after you add it, you have to listen to see if you hear a click to the delete button
    delButton.addEventListener("click", function(){
        //if you hear a click on the remove or delete button then you removed the li from the unorder list
        ul.removeChild(li)
    })
    //this is to make sure the input box is cleared after 
    input.value = " ";

}
function addListAfterClick(){
        if(inputLength() > 0){
         createListElement()
    }
}
function addListAfterPress(event){
        //13 is enter
        if(inputLength() > 0 && event.keyCode === 13){
         createListElement()

        }
}


function strikeThrough(){
    //Remember you can style items in css
    if(this.style.textDecoration === "line-through"){
        this.style.textDecoration = "none"
    }else{
        this.style.textDecoration = "line-through";
    }
}
document.querySelectorAll("li").forEach(function(element){
    element.addEventListener("click", strikeThrough);
});
buttonClick.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterPress);