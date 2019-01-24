
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("password").value;
    var submit = document.getElementById("submit")

    submit.addEventListener("submit", submit)

    if (username == "" && password == "" && confirmPassword == "" && "") {
        alert("Login successfully");
        window.location = "success.html";
        return false;
    }
    else {
        if (document == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}

// USER IN

// PROMPT & ALERT

