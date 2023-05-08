const form = document.querySelector('.signup-form');
const userList = document.querySelector('.user-list');

// Load existing users from local storage
let users = JSON.parse(localStorage.getItem('users')) || [];

// Render existing users on page load
users.forEach(user => {
  const li = document.createElement('li');
  li.classList.add('user-list__item');
  li.textContent = `${user.name} (${user.email})`;
  userList.appendChild(li);
});

// Handle form submission
form.addEventListener('submit', event => {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Create new user object
  const user = { name, email, password };

  // Add user to list on page
  const li = document.createElement('li');
  li.classList.add('user-list__item');
  li.textContent = `${user.name} (${user.email})`;
  userList.appendChild(li);

  // Add user to local storage
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  // Clear form
  form.reset();
});