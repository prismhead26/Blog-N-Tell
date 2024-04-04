const signupFormHandler = async (event) => {
    event.preventDefault();
  if( event.target.matches('button') ) {
    
    // console.dir(event.target);
    // console.dir(event.target.parentElement.previousElementSibling.children[0][0])
    const description = event.target.parentElement.previousElementSibling.children[0][0].value.trim()
    const blog_id = event.target.parentElement.previousElementSibling.children[0][0].dataset.id

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
    }
  };

  const modelEl = document
    .querySelectorAll(".modal")
  console.log(modelEl)
modelEl.forEach(modal => {
  modal.addEventListener("click", signupFormHandler);
});