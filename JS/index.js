const markedBookMark = document.querySelector(".fa-constant");

markedBookMark.addEventListener("click", (event) => {
  event.target.classList.toggle("red");
});
