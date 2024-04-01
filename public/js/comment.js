const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const description = document.querySelector("#new-comment-description").value.trim();
    const blog_id = event.currentTarget.getAttribute("data-id");
    console.log('blog id', blog_id)
    // if (event.target.hasAttribute("data-id")) {
    //     const blog_id = event.target.getAttribute("data-id");
    //     console.log("the id is: " + blog_id);
    //     const response = await fetch(`/api/comments`, {
    //       method: "POST",
    //       body: JSON.stringify({ description, blog_id }),
    //       headers: { "Content-Type": "application/json" },
    //     });
    //     console.log("the response is: " + response);
    //     if (response.ok) {
    //       document.location.replace("/");
    //     } else {
    //       alert(response.statusText);
    //     }
    //   }
    if (description && blog_id) {
        const response = await fetch(`api/comments`, {
          method: "POST",
          body: JSON.stringify({ description, blog_id }),
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
    .querySelector("#new-comment")
    .addEventListener("click", signupFormHandler);
