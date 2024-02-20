import throttle from 'lodash.throttle';

const email = document.querySelector('input[name="email"]').value.trim();
const message = document.querySelector('textarea[name="message"]').value.trim();
const formData = { email, message };
