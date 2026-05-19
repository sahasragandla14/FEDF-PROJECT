// SIGNUP

const signupForm = document.getElementById("signupForm");

if(signupForm){

    signupForm.addEventListener("submit", function(e){

        e.preventDefault();

        const username =
            document.getElementById("signupUsername").value;

        const password =
            document.getElementById("signupPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if(password !== confirmPassword){

            alert("Passwords do not match");

            return;
        }

        localStorage.setItem("username", username);

        localStorage.setItem("password", password);

        alert("Signup Successful");

        window.location.href = "login.html";

    });

}

// LOGIN

const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const username =
            document.getElementById("loginUsername").value;

        const password =
            document.getElementById("loginPassword").value;

        const storedUsername =
            localStorage.getItem("username");

        const storedPassword =
            localStorage.getItem("password");

        if(
            username === storedUsername &&
            password === storedPassword
        ){

            localStorage.setItem(
                "loggedInUser",
                username
            );

            alert("Login Successful");

            window.location.href = "index.html";

        }else{

            alert("Invalid Username or Password");

        }

    });

}

// DISPLAY USER

const welcomeUser =
    document.getElementById("welcomeUser");

const studentName =
    document.getElementById("studentName");

if(welcomeUser){

    const user =
        localStorage.getItem("loggedInUser");

    welcomeUser.innerHTML =
        `Hello, ${user} 👋`;

    studentName.innerHTML = user;

}

// LOGOUT

function logout(){

    localStorage.removeItem("loggedInUser");

    window.location.href = "login.html";

}