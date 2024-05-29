// const number = document.getElementById('number');
// const increase = document.getElementById('increase');
// const decrease = document.getElementById('decrease');

// increase.onclick = () => {
//   const current = parseInt(number.innerText, 10);
//   number.innerText = current + 1;
// };

// decrease.onclick = () => {
//   const current = parseInt(number.innerText, 10);
//   number.innerText = current - 1;
// };

//------------------------------------------------------------------

const $number = document.querySelector('#number')
const $increase = document.querySelector('#increase')
const $decrease = document.querySelector('#decrease')

$increase.addEventListener('click', () => {
  const current = parseInt($number.innerText)
  $number.innerText = current+1
})

$decrease.addEventListener('click', () => {
  const current = parseInt($number.innerText)
  $number.innerText = current-1
})