export const printMessage = (message, type) => {
  const div = document.createElement('div');
  div.id = 'error';
  div.className = type;
  div.innerHTML =  `<p>${message}</p>`;
  document.querySelector('main').parentNode.insertBefore(div, document.querySelector('footer'));
}