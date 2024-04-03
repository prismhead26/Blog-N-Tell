const signupFormHandler = async (event) => {
    event.preventDefault();

    const data = '{{blogs}}'
    console.log('data', data)
  
    const description = document.querySelector("#new-comment-description").value.trim();
    const blog_id = document.querySelector("#new-comment-blog_id").innerHTML.trim();
    console.log('blog_id', blog_id)

    if (description && blog_id) {
        const response = await fetch(`api/comments`, {
          method: "POST",
          body: JSON.stringify({ description, blog_id }),
          headers: { "Content-Type": "application/json" },
        });
    
        if (response.ok) {
          document.location.assign("/");
        } else {
          alert(response.statusText);
        }
      }

  };

  document
    .querySelector("#new-comment")
    .addEventListener("click", signupFormHandler);
