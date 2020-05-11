export const printMessage = (message, type, place) => {
  const div = document.createElement('div');
  div.className = type;
  div.innerHTML =  `<p>${message}</p>`;
  document.querySelector(place).appendChild(div);
  setTimeout(() => {
    div.remove();
  }, 5000);
}