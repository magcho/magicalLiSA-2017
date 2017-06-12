/**
 * background.js
 * 背景の「あの楽器風のアニメーション」
 */
$(function(){
  let count = 0;
  setInterval(function () {
    let elements = '';
    let randLeft = Math.floor(Math.random()*(window.innerWidth));
    let randTop = Math.floor(Math.random()*(window.innerHeight/2));
    switch (randLeft%4) {
      case 0:
        elements = '<img src="./resource/img/circle.svg" class="circle" style="left:'+randLeft+'px;top:'+randTop+'px" />';
        break;
      case 1:
        elements = '<img src="./resource/img/triangle.png" class="triangle" style="left:'+randLeft+'px;top:'+randTop+'px" />';
        break;
      case 2:
        elements = '<img src="./resource/img/rect.svg" class="rect" style="left:'+randLeft+'px;top:'+randTop+'px" />';
        break;
      case 3:
        elements = '<img src="./resource/img/bar.png" class="bar" style="left:'+randLeft+'px;top:'+randTop+'px" />';
        break;
    };
    $('#background-area').append(elements);
    count++;
    if(count > 10){
      $('#background-area > img:first').remove();
    }
  }, 700);
});
