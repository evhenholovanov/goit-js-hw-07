const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const data = {};

  for (const [key, value] of formData.entries()) {
    const trimmedValue = value.trim();
    if (!trimmedValue) {
      alert('All form fields must be filled in');
      return;
    }
    data[key] = trimmedValue;
  }

  console.log(data);
  form.reset();
});
