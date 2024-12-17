




   const users = JSON.parse(localStorage.getItem("users")) || [];

// To manipulate HTML elements
const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");

// Display dashboard if the user is logged in
function ShowView(view){
document.getElementById("signup").style.display

// Show view

// Add events
signupBtn.addEventListener("click", signUp);
loginBtn.addEventListener("click", login);

function signUp() {
  const username = document.getElementById("username").value;
  const useremail = document.getElementById("useremail").value;
  const userpassword = document.getElementById("userepassword").value;

  const newUser = {
    name: username,
    email: useremail,
    password: userpassword,
  };

  // Check if user already exists
  const userExists = users.find((user) => user.name === username);
  if (userExists) {
    alert("Username already exists. Please choose a different one.");
    return;
  }

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful! You can now log in.");
  console.log(newUser);
}

// login
function login(){
    const useremail=document.getElementById("useremail").value;
    const userpassword=document.getElementById("userpassword").value;
    

// Show dashboard with a welcome message
function ShowDasboard(){
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    document.getElementById("usernameDisplay").innerText=`hey ${user.name}welcome !!`;
    ShowView("dashboard");
}

// Logout function
