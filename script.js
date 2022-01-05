const accordians = document.getElementsByClassName("accordian");

function showAnswer() {
  hideAnswer();
  this.children[0].classList.toggle("active-question");
  this.children[1].classList.toggle("active");
}
function hideAnswer() {
  for (let i = 0; i < accordians.length; i++) {
    accordians[i].children[0].classList.remove("active-question");
    accordians[i].children[1].classList.remove("active");
  }
}
for (let i = 0; i < accordians.length; i++) {
  accordians[i].addEventListener("click", showAnswer);
}
