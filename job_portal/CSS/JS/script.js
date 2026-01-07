function registerUser() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let role = document.getElementById("role").value;

  if(name=="" || email=="" || password=="" || role=="") {
    alert("All fields required");
    return false;
  }

  if(password.length < 6) {
    alert("Password must be 6 characters");
    return false;
  }

  alert("Registered Successfully");
}

function loginUser() {
  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPassword").value;

  if(email=="" || pass=="") {
    alert("Enter all details");
    return false;
  }

  alert("Login Successful");
}


let jobs = [
  {title:"Developer", company:"Google", location:"Hyderabad"},
  {title:"Tester", company:"TCS", location:"Chennai"},
  {title:"Designer", company:"Infosys", location:"Bangalore"}
];

let jobList = document.getElementById("jobList");

if(jobList){
  jobs.forEach(job => {
    jobList.innerHTML += `
      <div class="job">
        <b>${job.title}</b> - ${job.company} - ${job.location}
        <a class="btn" href="apply.html">Apply</a>
      </div>
    `;
  });
}

function applyJob(){
  alert("Applied Successfully");
}

function filterJobs(){
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.getElementsByClassName("job");

  for(let i=0;i<cards.length;i++){
    let text = cards[i].innerText.toLowerCase();
    cards[i].style.display = text.includes(input) ? "" : "none";
  }
}