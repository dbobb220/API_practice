let arrayOfPosts;

window.onload = function() {
  getPosts()

}

const getPosts = () => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}

const consolePosts = () => {
  console.log(arrayOfPosts)
}

const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

const fetchPostFive = () => {
  const postFive = document.getElementById('post-five')
  const fifthPost = arrayOfPosts[5]
  const li = document.createElement('li')
  const text = document.createTextNode(`#5, Title: ${fifthPost.title}:    ${fifthPost. body}, by user: ${fifthPost.userId}`)
  li.appendChild(text)
  postFive.append(li)
}