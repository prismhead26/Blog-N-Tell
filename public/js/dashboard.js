const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#new-blog-title").value.trim();
    const body = document.querySelector("#new-blog-body").value.trim();
  
    if (title && body) {
      const response = await fetch(`api/blogs`, {
        method: "POST",
        body: JSON.stringify({ title, body, user_id }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.assign("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  };

  document
    .querySelector("#new-blog")
    .addEventListener("click", signupFormHandler);
