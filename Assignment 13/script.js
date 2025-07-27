document.getElementById('idForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const idNumber = document.getElementById('idNumber').value;
  const department = document.getElementById('department').value;
  const role = document.getElementById('role').value;

  document.getElementById('cardName').innerText = name;
  document.getElementById('cardId').innerText = idNumber;
  document.getElementById('cardDept').innerText = department;
  document.getElementById('cardRole').innerText = role;

  document.getElementById('idCard').style.display = 'block';
});
