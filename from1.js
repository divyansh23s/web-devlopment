const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add('active'); 
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active'); 
})

document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.querySelector('.sign-up form');
  const loginForm = document.querySelector('.sign-in form');

  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = registerForm.querySelector('input[placeholder="Name"]').value;
      const email = registerForm.querySelector('input[placeholder="Email"]').value;
      const password = registerForm.querySelector('input[placeholder="Password"]').value;

      try {
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        });

        const data = await res.json();
        alert(data.message);
      } catch (err) {
        alert('Error registering user');
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = loginForm.querySelector('input[placeholder="Email"]').value;
      const password = loginForm.querySelector('input[placeholder="Password"]').value;

      try {
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        alert(data.message);
      } catch (err) {
        alert('Error logging in');
      }
    });
  }
});
