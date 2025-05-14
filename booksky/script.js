var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addbtn = document.getElementById("popup-btn");

addbtn.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})

var cancelbtn = document.getElementById("cancel-btn");
cancelbtn.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay.style.display="none";
    popupbox.style.display="none";
})

var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitle = document.getElementById("book-title-ip");
var bookauthor = document.getElementById("book-author-ip");
var bookdes = document.getElementById("book-des-ip");

addbook.addEventListener("click",function(event){
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class","bookcon");
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdes.value}</p>
    <button onclick="deletebook(event)">Delete</button>`;
    container.append(div);
    popupoverlay.style.display="none";
    popupbox.style.display="none";

})
function deletebook(event)
{
    event.target.parentElement.remove();
}