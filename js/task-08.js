const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(evt) {
  const { email, password } = evt.currentTarget.elements;
  evt.preventDefault();
  if (!email.value.length || !password.value.length) {
    return alert('Всі поля повинні бути заповнені');
  }

  const data = {
    email: email.value,
    password: password.value,
  };
  console.log('data: ', data);

  evt.currentTarget.reset();
}
