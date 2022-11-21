const btnSubmitRef = document.querySelector('.login-form');

const onBtnSubmit = event => {
  event.preventDefault();
  const { email, password } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Заповність будь ласка всі поля');
  }
  const userData = {
    email: email.value,
    password: password.value,
  };
  console.log(userData);
  btnSubmitRef.reset();
};

btnSubmitRef.addEventListener('submit', onBtnSubmit);
