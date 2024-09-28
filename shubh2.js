const inputBox = document.querySelector("#input-box");
const container = document.querySelector(".unorderedlist");

function addTask() {
   if (inputBox.value === '') {
      alert("you must write something....");
   }
   else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      container.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
   }
   inputBox.value = '';
}
  container.addEventListener("click", function (e) {
   if (e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
   }else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
   }
},false);