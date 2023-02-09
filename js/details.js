let url = new URL(location.href);
let dataJSON = url.searchParams.get('data');
let post = JSON.parse(dataJSON);

let h1 = document.createElement('h1');
h1.innerText = `${post.id} ${post.title}`;

let p = document.createElement('p');
p.textContent = post.body;

document.body.append(h1, p )