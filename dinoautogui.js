function dinoautogui_cdiv(){
  let game = document.getElementById('t'); 

  let code = document.createElement('div'); 
  gamecodet = document.createElement('div'); 

  code.setAttribute('id', 'dinogui'); 
  code.innerHTML = "<div id='dinoguiheader'>dinoautogui</div><div id='dag_main'><button onclick='dag_im_on();'>무적</button> <br> <button onclick='dag_sp_on()'>속도</button> <br> <button onclick='dag_ex_on()'>종료(wip)</button></div> <div id='dag_im'> <button onclick='Runner.prototype.gameOver = function (){};'>무적모드</button> <br> <button onclick='Runner.prototype.gameOver = dino_over;'>무적모드 끄기</button> <br> <button onclick='back()'>돌아가기</button></div> <div id='dag_sp'>스피드 올리기내리기<button onclick='back()'>돌아가기</button></div><div id='dag_ex'>개발중<br><button onclick='back()'>돌아가기</button></div>"; 
  
  game.appendChild(code); 

  let css = document.createElement('style');


  css.setAttribute('id', 'dinoguicss');
  css.innerHTML = "#dinogui{position:absolute;z-index:9;background-color:#f1f1f1;border:1px solid #d3d3d3;text-align:center}#dinoguiheader{padding:10px;cursor:move;z-index:10;background-color:#2196F3;color:#fff}"
  
  game.appendChild(css);


}

var dino_over = Runner.prototype.gameOver

dinoautogui_cdiv()

function dag_im_on(){
  let dagim = document.getElementById('dag_im');
  
  let dagmain = document.getElementById('dag_main');
  
  dagim.style.display = "block";
  dagmain.style.display = "none";
}

function dag_sp_on(){
  let dagsp = document.getElementById('dag_sp');
  
  let dagmain = document.getElementById('dag_main');
  
  dagsp.style.display = "block";
  dagmain.style.display = "none";
}

function dag_im_ex(){
  let dagex = document.getElementById('dag_ex');
  
  let dagmain = document.getElementById('dag_main');
  
  dagex.style.display = "block";
  dagmain.style.display = "none";
}

function back(){
  dagim1 = document.getElementById('dag_im');
  dagmain1 = document.getElementById('dag_main');
  dagsp1 = document.getElementById('dag_sp');
  dagex1 = document.getElementById('dag_ex');
  dagim1.style.display = "none";
  dagmain1.style.display = "block";
  dagsp1.style.display = "none";
  dagex1.style.display = "none";
}

dagim1 = document.getElementById('dag_im');
dagmain1 = document.getElementById('dag_main');
dagsp1 = document.getElementById('dag_sp');
dagex1 = document.getElementById('dag_ex');
dagim1.style.display = "none";
dagmain1.style.display = "block";
dagsp1.style.display = "none";
dagex1.style.display = "none";


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
