window.addEventListener('load', () => {
  // 여러 요소를 내가 원하는 시간에 맞게 애니메이션 시키겠다.
  // 한줄인데 보기 편할라고 내린 거임
  // gsap.timeline().from(~~).from(~~) 이런 형식

  // 동작선언을 변수에 넣어서
  const tl = gsap.timeline();

  // 불러서 쓰기
  tl.from('.box1', { opacity: 0, y: -100 }, 1) /* 1초 후 */
    .from('.box2', { opacity: 0, scale: 2, rotation: 180 }, 0)
    .to('.box3', { scale: 1.5, rotation: 90 })
    .from('.box4', { opacity: 0, y: 50, rotation: 180 }, '-=0.5') /* 원래 시간보다 0.5초 빠르게 */
    .from('.box5', { opacity: 0, x: 100, ease: 'power4.inOut' }, '<'); /* 이전 애니메이션 시작기점 */
});
