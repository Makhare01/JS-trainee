const app = document.querySelector("#posts");
const form = document.getElementById("user-id-input");

const getPosts = async (userId) => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const response = await fetch(userId ? URL + `?userId=${userId}` : URL);

  return await response.json();
};

const createCardElement = ({ title, subtitle, userId }) => {
  const div = document.createElement("div");
  div.setAttribute("class", "container");

  const titleEl = document.createElement("p");
  titleEl.setAttribute("class", "title");
  titleEl.textContent = title;

  const subtitleEl = document.createElement("p");
  subtitleEl.setAttribute("class", "subtitle");
  subtitleEl.textContent = subtitle;

  const userIdEl = document.createElement("p");
  userIdEl.setAttribute("class", "user-id");
  userIdEl.textContent = userId;

  div.append(titleEl, subtitleEl, userIdEl);

  return div;
};

const renderElements = (posts) => {
  app.innerHTML = "";

  posts.forEach((record) => {
    const card = createCardElement({
      title: record.title,
      subtitle: record.body,
      userId: record.userId,
    });
    app.appendChild(card);
  });
};

window.addEventListener("load", async () => {
  const posts = await getPosts();
  renderElements(posts);
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const ID = document.getElementById("user-id").value;

  const posts = await getPosts();
  const filteredPosts = posts.filter((item) => {
    if (item.body.includes(ID) || item.title.includes(ID)) {
      return item;
    }   
  });
  if (filteredPosts.length === 0) {
    app.innerHTML = `No result found for ID = ${ID}`;
  } else {
    renderElements(filteredPosts);
  }
});
