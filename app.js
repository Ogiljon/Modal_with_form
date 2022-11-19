const callBtn = document.querySelector('.call__btn')
const modal = document.querySelector('.call__modal')
const submitBtn = document.querySelector('.form__btn')
const modalHeaderBtn = document.querySelector('.modal__header-btn')
const modalInput = document.querySelector('.input__inform')

const emailText = document.querySelector('.email__text') 
const passwordText = document.querySelector('.password__text') 
const coniformPasswordText = document.querySelector('.coniformpassword__text') 

callBtn.addEventListener('click', function () {
    modal.classList.add('modal__top')
})

modalHeaderBtn.addEventListener('click', function () {
    modal.classList.remove('modal__top')
})

submitBtn.addEventListener('click', function (event) {
    event.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const coniformPassword = document.querySelector('#coniformpassword').value

    emailText.innerText = email
    passwordText.innerText = password
    coniformPasswordText.innerText = coniformPassword
})

submitBtn.addEventListener('click', function () {
    modal.classList.remove('modal__top')
})