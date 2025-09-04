let userDatabase = JSON.parse(localStorage.getItem('myDatabase')) || []
let username = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirm')
let tablebody =document.getElementById('tbody')

function displayUser(params) {
    tablebody.innerHTML = ''
    for (let index = 0; index < userDatabase.length; index++) {
        tablebody += `<tr>
          <td>${index +1}</td>
          <td>${userDatabase[index].username}</td>
          <td>${userDatabase[index].email}</td>
          <td>${userDatabase[index].password}</td>
        </tr>`
    }
    
}

displayUser()

// localStorage.clear()

function signUp() {
    let myUsername = username.value.trim()
    let myEmail = email.value.trim()
    let myPassword = password.value.trim()
    let myConfirm = confirmPassword.value.trim()

    // if (myUsername === '' || myEmail === '' || myPassword === '' || myConfirm === '') {
    //     alert('all fields are mandatory')

    // } else if (myPassword !== myConfirm) {
    //     alert('passwords do not match')

    // }else{

    // }

    if (myUsername === '' || myEmail === '' || myPassword === '' || myConfirm === '') {
        alert('all fields are mandatory')
        return

    }
  

    if (myPassword !== myConfirm) {
        alert('passwords do not match')
        return
    }
    if (myPassword < 8) {
        alert('password must be greater than 8')
        return
    }


    let isUserExistingObj = undefined

    for (let index = 0; index < userDatabase.length; index++) {
        if (userDatabase[index].username === myUsername) {
            isUserExistingObj = userDatabase[index]
            break
        }
    }

    console.log(isUserExistingObj);

    if (isUserExistingObj) {
        alert('user already exists, proceeed to sign-in')
        return
    }

    let userObj = {
        username: myUsername,
        email: myEmail,
        password: myPassword
    }
    

    userDatabase.push(userObj)
    localStorage.setItem('myDatabase',JSON.stringify(userDatabase))
    displayUser()
    alert('sign up successful')
    console.log(userDatabase);
    // location.href = './pages/login.html'

    displayUser()

}