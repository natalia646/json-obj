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



