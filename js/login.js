let dataBase = JSON.parse(localStorage.getItem('myDatabase')) || []

let isUserExistingObj = undefined

function signUp() {
    let userName = document.getElementById('name').value.trim()
    let password = document.getElementById('password').value.trim()
    let isUserExistingObj = undefined

    if (!userName ||!password ) {
        alert('all fields are mandatory')
        return
    }
    if (!findUserObj(userName, true)) {
        alert('user not found, try sign up')
        location.href = '../index.html'
    }else if (password === findUserObj(userName, true).password) {
        alert('login successful')
        localStorage.setItem('myUSerIndex', findUserObj(userName,false))
        location.href ='../pages/dashboard.html'
        
    } else {
        alert('incorrect Password')
    }

    function findUserObj(userName, bool) {
        let isUserExistingObj = undefined
        for (let index = 0; index < dataBase.length; index++) {
        if (userName === dataBase[index].username) {
            isUserExistingObj = bool ? dataBase[index] : index
            break
        }
    }
    return isUserExistingObj
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
        location.href = "./dashboard.html"
    } else {
        alert('Incorrect password')
    }
}