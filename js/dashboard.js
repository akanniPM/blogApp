let userDatabase = JSON.parse(localStorage.getItem('myDatabase')) || []
let blogDatabaseMemory = JSON.parse(localStorage.getItem('blogDatabaseMemory')) || []

let currentUserIndex = Number(localStorage.getItem('myUSerIndex'))

let currentUserObj = userDatabase[currentUserIndex]


console.log(currentUserIndex);
console.log(currentUserObj);


let currentUser = document.getElementById('currentUser')
currentUser.innerHTML = `<h2>Welcome ${currentUserObj.username}</h2>`
let post =document.getElementById('timeLine')

let blogDatabase = JSON.parse(localStorage.getItem('blogDatabaseMemory')) || []


function submitPost() {
    let blogInner = document.getElementById('postContent')
    let blogInput = document.getElementById('postContent').value.trim()
    if (!blogInput) {
        // submitPost.onclick = null;
        alert('input a tweet')
        return
    }
    else {
        blogDatabase.push(blogInput)
        localStorage.setItem('blogDatabaseMemory', JSON.stringify(blogDatabase))
       displayBlog()
       blogInner.value = ''
    }
}

function displayBlog() {
    post.innerHTML = ''
    for (let index = 0; index < blogDatabase.length; index++) {
        const element = blogDatabase[index];
    
        
    
     post.innerHTML 
        +=  `
       <div>
           <p>${element}</p>
            <div id="tweetArea">
                <button onclick="edit(${index})" id="edit">Edit</button>
                <button onclick="deleter(${index})" id="delete">Delete</button>
                <hr>
            </div>
        </div>
        `
    }
}
displayBlog()





function deleter(params) {
   let confirmDelete = confirm('are you sure you want to delete this post')
    if (confirmDelete) {
        blogDatabase.splice(params, 1)
        localStorage.setItem('blogDatabaseMemory', JSON.stringify(blogDatabase))
        displayBlog()
        
    }
    
    
}

function logOut() {
    let confirmLogout = window.confirm('are you sure you want to logout?')
    if (confirmLogout) {
        localStorage.removeItem('myUSerIndex')
        window.location.href = '../pages/login.html'
    }


}

function edit(params) {
   let prompter = prompt('Edit your tweet', blogDatabase[params] )
    console.log(prompter);
    
   if (prompter) {
    let newBlog = blogDatabase.splice(params, 1, `${prompter}`)
    displayBlog()
    console.log(blogDatabase);
     localStorage.setItem('blogDatabaseMemory', JSON.stringify(blogDatabase))
    
   }
    
}



// let arr = ['ade', 'kenny', 'tudde','bimbo','yemi','bayo']

// arr.splice(1,2,'143', 'sodiki')
// console.log(arr);


// function getTweet(${blogInput}) {
   
        
// }

 

// function tweetStore() {
//     localStorage.getItem('posts')

// } 
// tweetStore()