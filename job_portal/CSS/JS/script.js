function registerUser(){
  let user = {
    name: name.value,
    email: email.value,
    password: password.value,
    role: role.value
  };

  if(user.name=="" || user.email=="" || user.password=="" || user.role==""){
    alert("All fields required");
    return false;
  }

  if(user.password.length < 6){
    alert("Password must be 6 characters");
    return false;
  }

  localStorage.setItem("user", JSON.stringify(user));
  alert("Registered Successfully");
}


function loginUser(){
  let savedUser = JSON.parse(localStorage.getItem("user"));

  if(!savedUser){
    alert("Please Register First");
    return false;
  }

  if(loginEmail.value == savedUser.email && loginPassword.value == savedUser.password){
    alert("Login Successful");
    window.location.href = "jobs.html";
  } else {
    alert("Invalid Login");
  }
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