const clockTitle = document.querySelector('.js-clock');

function getChristmas() {
  const date = new Date();
  const christmas = new Date(`${date.getFullYear()}-12-25`);

  if (date > christmas) {
    christmas.setFullYear(date.getFullYear() + 1);
  }

  let diff = christmas - date;

  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diff / (1000 * 60 * 60)) % 24); // 전체 남은 시간을 시간 단위로 변환, 24로 나눠서 남은 시간 구하기
  const diffMin = Math.floor((diff / (1000 * 60)) % 60);
  const diffSec = Math.floor((diff / 1000) % 60);

  clockTitle.innerText = `${diffDays}d ${diffHours}h ${diffMin}m ${diffSec}s`;
}

setInterval(getChristmas, 1000);
getChristmas(); //페이지 로드 시 초기화
