let userDatabase = JSON.parse(localStorage.getItem('myDatabase')) || []
let blogDatabaseMemory = JSON.parse(localStorage.getItem('blogDatabaseMemory')) || []

let currentUserIndex = Number(localStorage.getItem('myUSerIndex'))

let currentUserObj = userDatabase[currentUserIndex]


console.log(currentUserIndex);
console.log(currentUserObj);
let ImgHolder = JSON.parse(localStorage.getItem('imgDatabase')) || []


let currentUser = document.getElementById('currentUser')
currentUser.innerHTML = `<h2>Welcome ${currentUserObj.username}</h2>`
let post = document.getElementById('timeLine')

let blogDatabase = JSON.parse(localStorage.getItem('blogDatabaseMemory')) || []

let imgResult = null

function imgPicker(params) {
    let file = document.getElementById('imageInput').files[0]
    let imgOutput = document.getElementById('imgOutput')

    let reader = new FileReader() //this helps us read the content of a file
    reader.readAsDataURL(file) // this is a method that helps us read file as data url and turns it intp 64bits and modifies the original array such that it pushes read file into reader

    reader.addEventListener('load', (ev) => {
        imgResult = ev.target.result
        imgOutput.src = imgResult
        // blogDatabase.push(imgResult)

        console.log(imgResult);

        // ImgHolder.push(imgResult)
        // localStorage.setItem('imgDatabase', JSON.stringify(ImgHolder))


    })



}

function submitPost() {
    let blogInner = document.getElementById('postContent')
    let blogInput = blogInner.value.trim()
    if (!blogInput) {
        // submitPost.onclick = null;
        alert('input a tweet')
        return
    }
    // if (imgResult ===null) {
    //     alert('pick an image')
    //     return
    // }

    let blog = {
        blogText: blogInput,
        imageInput: imgResult
    }
    console.log(blog);


    blogDatabase.push(blog)
    localStorage.setItem('blogDatabaseMemory', JSON.stringify(blogDatabase))
    displayBlog()
    blogInner.value = ''
    imgResult = null

}


function displayBlog() {
    post.innerHTML = ''
    for (let index = 0; index < blogDatabase.length; index++) {
        const element = blogDatabase[index];



        post.innerHTML
            += `
       <div>
           <p>${element.blogText}</p>
           <div><img src = '${element.imageInput}' id="image" alt="" width="300px" height="350px"></div>
            <div id="tweetArea">
                <button onclick="edit(${index})" id="edit">Edit</button>
                <button onclick="deleter(${index})" id="delete">Delete</button>
                <hr>
            </div>
        </div>
        `
        console.log(blogDatabase);

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
    let prompter = prompt('Edit your tweet', blogDatabase[params])
    console.log(prompter);

    if (prompter) {
        let newBlog = blogDatabase.splice(params, 1, `${prompter}`)
        displayBlog()
        console.log(blogDatabase);
        localStorage.setItem('blogDatabaseMemory', JSON.stringify(blogDatabase))

    }

}
