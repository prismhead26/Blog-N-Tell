// sign up handler func
const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, username, password }),
      headers: { "Content-Type": "application/json" },
    });


    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      // alert modal
      let myModal = new bootstrap.Modal(
        document.getElementById("errorModal"),
        {}
      );
      myModal.show();
      setTimeout(function(){
        location.reload()
      }, 5000)
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
