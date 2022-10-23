// wip 제작중...


function dinoautogui_cdiv(){
  let game = document.getElementById('t'); // 게임(t) 가져오기 선언

// html 삽입

  let code = document.createElement('div'); // div 코드 선언
  //var gamecode = game // 게임(t)코드 복사

  code.setAttribute('id', 'dinogui'); // id 선언
  code.innerHTML = "<div id='dinoguiheader'>dinoautogui</div><p>무적</p><p>속도</p><p>종료</p>"; // html 코드 설정
  
  game.appendChild(code); // 게임(t) 코드 삽입

// css 삽입

  let code = document.createElement('style'); // style 코드 선언
  //var gamecode = game // 게임(t)코드 복사

  code.setAttribute('id', 'dinoguicss'); // id 선언
  code.innerHTML =  // css 코드 설정
  
  game.appendChild(code); // 게임(t) 코드 삽입


}
