console.log('%c dinoautogui','font:5em sans-serif;color:blue;');
dinolog('info', '로딩 시작');

function dinolog(logt, logs){
  let today = new Date();

  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let ms = today.getMilliseconds();
  console.log('[dinoautogui] [' + hour + ':' + min + ':' + sec + '.' + ms +'] [' + logt + '] ' + logs);
}


function dinoautogui_cdiv(){
  let game = document.getElementById('t'); 

  let code = document.createElement('div'); 
  gamecodet = document.createElement('div'); 

  code.setAttribute('id', 'dinogui'); 
  code.innerHTML = "<div id='dinoguiheader'>dinoautogui</div><div id='dag_main'><button onclick='dag_im_on();'>무적</button> <br> <button onclick='dag_sp_on()'>속도</button> <br> <button onclick='dag_js_on()'>스크립트 실행</button> <br> <button onclick='dag_ex_on()'>종료(wip)</button></div> <div id='dag_im'> <button onclick='Runner.prototype.gameOver = function (){};'>무적모드</button> <br> <button onclick='Runner.prototype.gameOver = dino_over;'>무적모드 끄기</button> <br> <button onclick='back()'>돌아가기</button></div> <div id='dag_sp'><input id='dag_speed' type='number' style='ime-mode:disabled;'></input><button onclick='dag_setspeed()'>적용</button><br><button onclick='back()'>돌아가기</button></div> <div id='dag_js'><textarea id='dag_jsinput' placeholder='js code here'></textarea><button onclick='dag_runjs()'>적용</button><br><button onclick='back()'>돌아가기</button></div> <div id='dag_ex'>개발중<br><button onclick='dag_exit()' style='background-color: red;'>종료</button><br><button onclick='dagr()' style='background-color: red;'>리셋</button><br><button onclick='back()'>돌아가기</button></div>"; 
  
  game.appendChild(code); 

  let css = document.createElement('style');


  css.setAttribute('id', 'dinoguicss');
  css.innerHTML = "#dinogui{position:absolute;z-index:9;background-color:#f1f1f1;border:1px solid #d3d3d3;text-align:center}#dinoguiheader{padding:10px;cursor:move;z-index:10;background-color:#2196F3;color:#fff}"
  
  game.appendChild(css);


}

var dino_over = Runner.prototype.gameOver
var tcode = document.getElementById('t')

dinoautogui_cdiv()

dinolog('info', 'gui 창 코드 삽입');

function dag_im_on(){
  let dagim = document.getElementById('dag_im');
  
  let dagmain = document.getElementById('dag_main');
  
  dagim.style.display = "block";
  dagmain.style.display = "none";
  dinolog('info', 'dag_im_omn() 함수 호출');
}

function dag_sp_on(){
  let dagsp = document.getElementById('dag_sp');
  
  let dagmain = document.getElementById('dag_main');
  
  dagsp.style.display = "block";
  dagmain.style.display = "none";
  dinolog('info', 'dag_sp_on() 함수 호출');
}

function dag_ex_on(){
  let dagex = document.getElementById('dag_ex');
  
  let dagmain = document.getElementById('dag_main');
  
  dagex.style.display = "block";
  dagmain.style.display = "none";
    dinolog('info', 'dag_ex_on() 함수 호출');
}

function dag_js_on(){
  let dagjs = document.getElementById('dag_js');
  
  let dagmain = document.getElementById('dag_main');
  
  dagjs.style.display = "block";
  dagmain.style.display = "none";
    dinolog('info', 'dag_js_on() 함수 호출');
}

function dag_exit(){
  console.log('asdf')
  dinolog('info', 'dinogui 삭제');
  dinolog('thanks', '사용해주서셔 감사합니다. 다음에 또 이용해주세요.');
  dinolog('info', '다시 불러오기 : 링크');
  let dinoguidel = document.getElementById('dinogui');
  let dinoguicssdel = document.getElementById('dinoguicss');
  dinoguidel.remove();
  dinoguicssdel.remove();
  
}

function dagr(){
  alert('새로고침 해주세요')
  document.body.innerHTML = "[dinogui] 새로고침을 해주세요!"
  document.head.innerHTML = "[dinogui] 새로고침을 해주세요!"
}

function back(){
  dagim1 = document.getElementById('dag_im');
  dagmain1 = document.getElementById('dag_main');
  dagsp1 = document.getElementById('dag_sp');
  dagex1 = document.getElementById('dag_ex');
  dagjs1 = document.getElementById('dag_js');
  dagim1.style.display = "none";
  dagmain1.style.display = "block";
  dagsp1.style.display = "none";
  dagex1.style.display = "none";
  dinolog('info', 'back() 함수 호출');
  dagjs1.style.display = "none";
}

dagim1 = document.getElementById('dag_im');
dagmain1 = document.getElementById('dag_main');
dagsp1 = document.getElementById('dag_sp');
dagex1 = document.getElementById('dag_ex');
dagjs1 = document.getElementById('dag_js');
dagim1.style.display = "none";
dagmain1.style.display = "block";
dagsp1.style.display = "none";
dagex1.style.display = "none";
dagjs1.style.display = "none";

dinolog('info', 'gui 창 기초 설정 완료');

function dag_setspeed(){
 dagspeed = document.getElementById('dag_speed');
 setspeed = dagspeed.value
 setspeed *= 1
 Runner.instance_.setSpeed(setspeed)
 dinolog('info', 'speed 설정 값 : ' + dagspeed.value);
}

function dag_runjs(){
 dagspeed = document.getElementById('dag_jsinput');
 runjs = dagspeed.value
 runjst = runjs + ""
 eval(runjst)
 dinolog('info', 'js 실행 코드 : ' + runjs.value);
}

dragElement(document.getElementById("dinogui"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

document.addEventListener("keydown", dinoguiposreset, false);

dinolog('info', 'gui move 스크립트 로딩 완료');
dinolog('info', 'OK!');

function dinoguiposreset(e) {
  if (e.keyCode === 81) {
    document.getElementById('dinogui').style.left="600px";
    document.getElementById('dinogui').style.top="600px";
    alert("[dinogui] gui창 위치가 재설정 되었습니다");
    dinolog('info', 'gui 창 위치 재설정');
  }
}

dinolog('info', 'q 키를 누르시면 창 위치가 리셋됩니다!');
