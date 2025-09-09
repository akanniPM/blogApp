let userDatabase = JSON.parse(localStorage.getItem('myDatabase')) || []

let currentUserIndex = Number(localStorage.getItem('myUSerIndex'))

let currentUserObj = userDatabase[currentUserIndex]


console.log(currentUserIndex);
console.log(currentUserObj);


let currentUser = document.getElementById('currentUser')
currentUser.innerHTML = `<h2>Welcome ${currentUserObj.username}</h2>`
let post =document.getElementById('timeLine')


function submitPost() {
    let blogInput = document.getElementById('postContent').value.trim()
    if (!blogInput) {
        // submitPost.onclick = null;
        alert('input a tweet')
        return
    }
    if (blogInput) {
        post.innerHTML 
        +=  `
       <div class="blog">
           <p>${blogInput}</p>
            <div id="tweetArea">
                <button onclick="edit()" id="edit">Edit</button>
                <button onclick="deleter(this)" id="delete">Delete</button>
                <hr>
            </div>
        </div>
        `
        
        // getTweet()
         localStorage.setItem('posts', JSON.stringify(post.innerHTML))

         blogInput=""
    }
}

let pastPost = JSON.parse(localStorage.getItem('posts'))|| ''

post.innerHTML = pastPost



 function deleter(button) {
    let blogDiv = button.closest(".blog");
    let content = blogDiv.querySelector("p").innerText;

    // Remove from localStorage
    let pastPost = JSON.parse(localStorage.getItem("posts")) || [];
    savedPosts = pastPost.filter(p => p !== content);
    localStorage.setItem("posts", JSON.stringify(pastPost));

    // Remove from DOM
    blogDiv.remove();
  }

// function getTweet(${blogInput}) {
   
        
// }

 

// function tweetStore() {
//     localStorage.getItem('posts')

// } 
// tweetStore()