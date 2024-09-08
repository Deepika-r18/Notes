const inputContainer = document.querySelector(".input-container");
const createBtn =  document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showData(){
    inputContainer.innerHTML = localStorage.getItem("notes");
}
showData();
function saveData(){
    localStorage.setItem("notes", inputContainer.innerHTML);
}


createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "assets/images/delete.png";
    inputContainer.appendChild(inputBox).appendChild(img);

})
inputContainer.addEventListener('click', function (e) {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        saveData();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                saveData();
            }
        })

    }
})

