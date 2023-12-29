window.addEventListener('load', () => {
  // GSAP를 사용하기 위해서는 gsap객체를 먼저 부른다.
  // gsap.to('대상', { 옵션 });
  //.to : 기존 --> 내 거
  gsap.to('.box1', { x: -200, width: 400, duration: 1, rotate: 360, autoAlpha: 1 });
  // x,duration,rotate...은 gsap 속성 , gsap속성과 css속성을 함께 쓴다
  // x ---> transform: translateX

  //.to : 내 거 --> 기존
  gsap.from('.box2', {
    scale: 2,
    y: 100,
    delay: 1.5,
    // opacity: 0,
    autoAlpha: 0,
    repeat: -1 /* infinite */,
    yoyo: true /* alternate */,
    ease: 'power1.inOut',
  });

  // 버튼을 클릭했을 때 초록색박스(.box3)를 움직이자
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', () => {
    // gsap.fromTo('.box3',{from},{to});
    gsap.fromTo(
      '.box3',
      {
        opacity: 0,
        backgroundColor: '#000',
      },
      { opacity: 1, backgroundColor: 'green', scale: 3, duration: 2 }
    );
  });

  gsap.from('.wrap2 div', {
    y: -100,
    autoAlpha: 0,
    rotate: 90,
    stagger: 0.3 /* 순차적으로 떨어지기 : 같은 요소에 적용, delay과 유사 */,
  });
});
