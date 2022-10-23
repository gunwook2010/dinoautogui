
function dinoautogui_cdiv(){
  let game = document.getElementById('t'); // 게임(t) 가져오기 선언

// html 삽입

  let code = document.createElement('div'); // div 코드 선언
  //var gamecode = game // 게임(t)코드 복사

  code.setAttribute('id', 'dinogui'); // id 선언
  code.innerHTML = "<div id='dinoguiheader'>dinoautogui</div><p>무적</p><p>속도</p><p>종료</p>"; // html 코드 설정
  
  game.appendChild(code); // 게임(t) 코드 삽입

// css 삽입

  let css = document.createElement('style'); // style 코드 선언
  //var gamecode = game // 게임(t)코드 복사

  css.setAttribute('id', 'dinoguicss'); // id 선언
  css.innerHTML = "#dinogui{position:absolute;z-index:9;background-color:#f1f1f1;border:1px solid #d3d3d3;text-align:center}#dinoguiheader{padding:10px;cursor:move;z-index:10;background-color:#2196F3;color:#fff}" // css 코드 설정
  
  game.appendChild(css); // 게임(t) 코드 삽입


}

dinoautogui_cdiv() // html,css 삽입 코드 호출

// js 코드

dragElement(document.getElementById("dinogui"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
