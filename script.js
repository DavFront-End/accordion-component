const plusButton = document.querySelectorAll(".plus");
const exitButton = document.querySelectorAll(".exit");

plusButton.forEach((plus) => {
  plus.addEventListener("click", (e) => {
    const target = e.target.parentNode;
    const details = target.querySelector(".acordion-details");
    const exit = target.querySelector(".exit");

    handleButton(details, exit, plus);
   
  });
});

function handleButton(details, exit, plus) {
  exit.style.display = "block";
  details.style.display = "block";
  plus.style.display = "none";

  exitButton.forEach((exit) => {
    exit.addEventListener("click", () => {
      details.style.display = "none";
      exit.style.display = "none";
      plus.style.display = "block";
    });
  });
}
