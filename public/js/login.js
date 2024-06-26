const signUpBtn = document.getElementById("signup-btn");

const loginFormHandler = async (event) => {
  console.log("This is the login js file");
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  console.log(username, password);
  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.assign("/dashboard");
    } else {
      let myModal = new bootstrap.Modal(
        document.getElementById("errorModal"),
        {}
      );
      myModal.show();
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
