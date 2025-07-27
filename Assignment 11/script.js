let count = 0;
const counter = document.getElementById("counter");

function updateCounter() {
  counter.textContent = count;
  counter.classList.add("animate");
  setTimeout(() => counter.classList.remove("animate"), 200);
}

function increment() {
  count++;
  updateCounter();
}

function decrement() {
  count--;
  updateCounter();
}

function reset() {
  count = 0;
  updateCounter();
}
