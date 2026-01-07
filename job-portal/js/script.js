alert("JS Loaded Successfully");



function registerUser() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let role = document.getElementById("role").value;

  if (name === "" || email === "" || password === "" || role === "") {
    alert("All fields required");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  let user = { name, email, password, role };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Registered Successfully");

  return false;
}

function loginUser() {
  let loginEmail = document.getElementById("loginEmail").value;
  let loginPassword = document.getElementById("loginPassword").value;

  if (loginEmail === "" || loginPassword === "") {
    alert("Enter all details");
    return false;
  }

  let savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("Please Register First");
    return false;
  }

  if (loginEmail === savedUser.email && loginPassword === savedUser.password) {
    alert("Login Successful");
    window.location.href = "jobs.html";
  } else {
    alert("Invalid Login");
  }

  return false;
}

function toggleDark() {
  document.body.classList.toggle("dark");
}

let jobs = [
  { title: "Developer", company: "Google", location: "Hyderabad" },
  { title: "Tester", company: "TCS", location: "Chennai" },
  { title: "Designer", company: "Infosys", location: "Bangalore" }
];

let jobList = document.getElementById("jobList");

if (jobList) {
  jobs.forEach(job => {
    jobList.innerHTML += `
  <div class="job">
    <b>${job.title}</b>
    <p>${job.company}</p>
    <p>${job.location}</p>
    <a class="btn" href="apply.html">Apply</a>
  </div>
`;

  });
}

function applyJob() {
  alert("Applied Successfully");
  return false;
}

function filterJobs() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.getElementsByClassName("job");

  for (let i = 0; i < cards.length; i++) {
    let text = cards[i].innerText.toLowerCase();
    cards[i].style.display = text.includes(input) ? "" : "none";
  }
}
