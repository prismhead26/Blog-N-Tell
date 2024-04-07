const signupFormHandler = async (event) => {
    event.preventDefault();
  if( event.target.matches('button') ) {
    
    console.dir(event.target);

    const description = event.target.parentElement.parentElement.children[1].children[1].value.trim()
    const blog_id = event.target.parentElement.parentElement.children[1].children[1].dataset.id

    if (description && blog_id) {
        const response = await fetch(`api/comments`, {
          method: "POST",
          body: JSON.stringify({ description, blog_id }),
          headers: { "Content-Type": "application/json" },
        });
    
        if (response.ok) {
          document.location.assign("/");
        } else {
          let myModal = new bootstrap.Modal(
            document.getElementById("errorModal"),
            {}
          );
          myModal.show();
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