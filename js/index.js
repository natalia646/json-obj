fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {

    let button = document.createElement('button');
    button.innerText = 'Clear favorites list '
    document.body.appendChild(button);
    
    button.onclick = function(){
     localStorage.clear()
    }


    let ul = document.createElement("ul");

    for (const post of posts) {
      let li = document.createElement("li");
      li.innerText = post.id + " " + post.title;

      let a = document.createElement("a");
      a.innerText = '  details';
      a.href = 'details.html?data=' + JSON.stringify(post)
      


      li.appendChild(a);
      ul.appendChild(li);
    }

    document.body.appendChild(ul);


  });

// створення html і його додали на сторінку
// for (let i = 0; i < 5; i++) {
//   let h1 = document.createElement("h1");
//   h1.innerText = "Lorem dsfwdf fw ww ";
//   document.body.appendChild(h1);
// }

// const products = [
//   {
//     juice: "Garden",
//     price: 22,
//   },
//   {
//     juice: "TOM",
//     price: 32,
//   },
//   {
//     juice: "OUR",
//     price: 28,
//   },
// ];

// for (const product of products) {
//   let div = document.createElement("div");
//   let h2 = document.createElement("h2");
//   h2.innerText = product.juice + " $";
//   let p = document.createElement("p");
//   p.innerText = product.price;

//   div.append(h2, p);
//   document.body.appendChild(div);
// }



