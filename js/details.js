let url = new URL(location.href);
let dataJSON = url.searchParams.get("data");
let post = JSON.parse(dataJSON);

let h1 = document.createElement("h1");
h1.innerText = `${post.id} ${post.title}`;

let p = document.createElement("p");
p.textContent = post.body;

let btn = document.createElement("button");
btn.innerText = "add to favorite";

btn.onclick = function () {
  let favPostsFromLS = localStorage.getItem("favPosts");
  if (favPostsFromLS === null) {
    localStorage.setItem("favPosts", JSON.stringify([post]));
    
  }

  let favPostsArray = JSON.parse(favPostsFromLS);
  favPostsArray.push(post);
  let stringify = JSON.stringify(favPostsArray);
  localStorage.setItem("favPosts", stringify);
};

document.body.append(h1, p, btn);
