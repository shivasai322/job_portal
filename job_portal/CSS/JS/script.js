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


