const colors = [
  '#ef5777',
  '#575fcf',
  '#4bcffa',
  '#34e7e4',
  '#0be881',
  '#f53b57',
  '#3c40c6',
  '#0fbcf9',
  '#00d8d6',
  '#05c46b',
  '#ffc048',
  '#ffdd59',
  '#ff5e57',
  '#d2dae2',
  '#485460',
  '#ffa801',
  '#ffd32a',
  '#ff3f34',
];

const button = document.querySelector('button');
function handleColor() {
  const colorA = colors[Math.floor(Math.random() * colors.length)];
  const colorB = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.background = `linear-gradient(${colorA}, ${colorB})`;
}

button.addEventListener('click', handleColor);

1. javascript로 css를 조작하는 가장 기본적인 방법: style을 이용한다.
  element.style.propertyName으로 적용할 수 있다.
