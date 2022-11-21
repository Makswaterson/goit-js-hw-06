const btnSubmitRef = document.querySelector('.login-form');

const onBtnSubmit = event => {
  event.preventDefault();
  const { email, password } = event.currentTarget;
  if (email.value.trim() === '' || password.value.trim() === '') {
    return alert('Заповність будь ласка всі поля');
  }
  const userData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  console.log(userData);
  btnSubmitRef.reset();
};

btnSubmitRef.addEventListener('submit', onBtnSubmit);
