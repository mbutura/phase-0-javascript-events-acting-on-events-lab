// Your code here
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 5}px`;
    }
  }

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left+dodger.clientWidth < 400) {
      dodger.style.left = `${left + 5}px`;
    }
  }

  
  const dodger = document.getElementById("dodger");

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
  });