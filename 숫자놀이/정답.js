const guessForm = document.getElementById('js-guess');
const result = document.getElementById('js-result');
const maxNumber = document.getElementById('maxNumber'); // 최댓값

function handleGuessSubmit(e) {
  e.preventDefault();
  const guessInput = guessForm.querySelector('input'); // 추측하는 숫자
  if (guessInput.value === '' && maxNumber === '') { // 모두 입력값이 없을 경우에는 함수 종
    return;
  }
  const max = maxNumber.value;
  const random = Math.ceil(Math.random() * max);
  const userGuess = parseInt(guessInput.value, 10); // <input>, <form> 태그를 통해 제출된 값은 문자열로 저장, 문자열을 정수로 바꿈(10진수로 변경)
  const resultSpan = result.querySelector('span');
  resultSpan.innerHTML = `
  You chose: ${userGuess},
  the machine chose: ${random}.<br />
  <strong>${userGuess === random ? 'You won!' : 'You lost!'}</strong>
  `;
}

guessForm.addEventListener('submit', handleGuessSubmit);
