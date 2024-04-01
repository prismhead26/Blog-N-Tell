const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    console.log(id);
    const response = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete blog");
    }
  }
};

const upButtonHandler = async (event) => {
  event.preventDefault();
  console.log("button clicked");
  const title = document.querySelector("#update-blog-title").value.trim();
  const body = document
    .querySelector("#update-blog-body")
    .value.trim();
  console.log(title, body);

  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    console.log("the id is: " + id);
    const response = await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("the response is: " + response);
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#delete-button")
  .addEventListener("click", delButtonHandler);

document
  .querySelector("#update-button")
  .addEventListener("click", upButtonHandler);
