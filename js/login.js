let dataBase = JSON.parse(localStorage.getItem('myDatabase')) || []


let userName = document.getElementById('name').value.trim()
let password = document.getElementById('password').value.trim()


let isUserExistingObj = undefined

function signUp() {
    let userName = document.getElementById('name').value.trim()
    let password = document.getElementById('password').value.trim()
    let isUserExistingObj = undefined

    if (!userName ||!password ) {
        alert('all fields are mandatory')
        return
    }

    for (let index = 0; index < dataBase.length; index++) {
        if (userName === dataBase[index].username) {
            isUserExistingObj = dataBase[index]
            console.log(isUserExistingObj);
            break; // stop searching once we find the user
        }
        console.log(isUserExistingObj);
        
    }

    if (!isUserExistingObj) {
        alert('User does not exist, please sign up.')
        location.href = "../index.html"
        return
    }

    if (password === isUserExistingObj.password) {
        alert('Login successful')
        location.href = "https://picsum.dev/300/200"
    } else {
        alert('Incorrect password')
    }
}