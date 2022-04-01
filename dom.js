var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.getElementsByTagName("li");

// To add to list after button clicked
button.addEventListener("click",function(){
    if(inputlength() !==0)
    {
        createlist();
    }

});

// to make Enter button also add to list
input.addEventListener("keypress", function(event)
{
    if(inputlength() !== 0 && event.keyCode === 13)
    {
        createlist();
    }
});

// To check if there is any input 
function inputlength()
{
    return input.value.length;
}

// To create the list
function createlist()
{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    // ul.innerHTML += '<li>' + input.value + '</li>';
    // input.value = "";

    var btn = document.createElement("button");
    btn.innerHTML = "delete"
    li.appendChild(btn)
    btn.onclick = removeParent;
}
  
function removeParent(){
    event.target.parentNode.remove();
}

function delbtn(){
    var btn = document.createElement("button");
    btn.innerHTML = "delete";
    items[i].appendChild(btn);
    btn.onclick = removeParent;
}

for(i=0; i < items.length; i++)
{
    delbtn();
}