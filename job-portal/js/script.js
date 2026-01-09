// alert("JS Loaded Successfully");



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

  let savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("Please register first");
    return false;
  }

  if (loginEmail === savedUser.email && loginPassword === savedUser.password) {
    localStorage.setItem("loggedIn", "true");
    alert("Login successful");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials");
  }

  return false;
  // localStorage.setItem("loggedIn", "true");

}


function toggleDark() {
  document.body.classList.toggle("dark");
}

let jobs = JSON.parse(localStorage.getItem("jobs")) || [
  { Role: "Developer", company: "Google", location: "Hyderabad", lastDate: "30 June 2026" },
  { Role: "Tester", company: "TCS", location: "Chennai", lastDate: "25 June 2026" },
  { Role: "Designer", company: "Infosys", location: "Bangalore", lastDate: "20 June 2026" }
];



let jobList = document.getElementById("jobList");

if (jobList) {
  jobs.forEach(job => {
    jobList.innerHTML += `
  <div class="job">
    <b>${job.Role}</b>
    <p>${job.company}</p>
    <p>${job.location}</p>
    <p><strong>Last Date:</strong> ${job.lastDate}</p>
    <a class="btn" href="apply.html">Apply</a>
  </div>
`;


  });
  localStorage.setItem("jobs", JSON.stringify(jobs));

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
function postJob() {
  let role = document.getElementById("jobRole").value;
  let company = document.getElementById("companyName").value;
  let location = document.getElementById("jobLocation").value;
  let lastDate = document.getElementById("lastDate").value;

  if (!role || !company || !location || !lastDate) {
    alert("All fields required");
    return false;
  }

  let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

  jobs.push({
    Role: role,
    company: company,
    location: location,
    lastDate: lastDate
  });

  localStorage.setItem("jobs", JSON.stringify(jobs));

  alert("Job Posted Successfully");
  window.location.href = "jobs.html";
  return false;
}

function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}
function checkLogin() {
  let status = localStorage.getItem("loggedIn");

  if (status !== "true") {
    alert("Please login first");
    window.location.href = "login.html";
  }
}
function goToJobs() {
  if (localStorage.getItem("loggedIn") !== "true") {
    alert("Please login first");
    window.location.href = "login.html";
  } else {
    window.location.href = "jobs.html";
  }
}

function goToPostJob() {
  if (localStorage.getItem("loggedIn") !== "true") {
    alert("Please login first");
    window.location.href = "login.html";
  } else {
    window.location.href = "post-job.html";
  }
}



