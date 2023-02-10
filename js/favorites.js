let favPosts = localStorage.getItem('favPosts');
let favPostsArray = JSON.parse(favPosts);

console.log(favPostsArray)

for(let post of favPostsArray){
    let h2 = document.createElement('h2');
    h2.innerText = post.id + ' ' + post.title

    let p = document.createElement('p');
    p.textContent = post.body

    document.body.append(h2, p)
}
