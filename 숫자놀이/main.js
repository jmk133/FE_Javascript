const generateForm = document.querySelector('#generate-form');
const playForm = document.querySelector('#play-form');
const inputNum = playForm.querySelector('#number');
const maximum = document.querySelector('#maximum');
const range = document.querySelector('#range');
const choice = document.querySelector('#choice');
const result = document.querySelector('#result');

//숫자 비교 및 결과 출력
function showresult(temp) {
  const answer = localStorage.getItem('randomNum');
  choice.innerText = `You chose: ${temp}, the machince chose ${answer}.`;
  if (parseInt(temp) === answer) {
    result.innerText = 'You won!';
  } else {
    result.innerText = 'You lost!';
  }
}

//난수 생성
function generateNum(event) {
  event.preventDefault();
  const temp = inputNum.value;
  const rangeNum = range.value;
  const randomNum = Math.ceil(Math.random() * rangeNum);
  localStorage.setItem('randomNum', randomNum);
  showresult(temp);
}

//최댓값 입력받기
function handleInput(event) {
  event.preventDefault();
  maximum.innerText = `${range.value}`;
}

range.addEventListener('input', handleInput);
playForm.addEventListener('submit', generateNum);
