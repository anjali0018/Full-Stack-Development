document.getElementById("searchBtn").addEventListener("click", function () {
  const input = document.getElementById("searchInput").value.trim();
  const resultBox = document.getElementById("result");

  if (input) {
    resultBox.innerHTML = `<p><strong>You searched for:</strong> ${input}</p>`;
  } else {
    resultBox.innerHTML = `<p style="color: red;">Please enter a search term.</p>`;
  }
});
