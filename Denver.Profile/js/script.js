const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.textContent = open ? 'CLOSE' : 'MENU';
});
document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = 'MENU';
}));
document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.querySelector('.form-status').textContent = 'お問い合わせを受け付けました。折り返しご連絡します。';
  event.currentTarget.reset();
});