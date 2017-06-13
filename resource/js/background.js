/**
 * 指定範囲でint型の乱数を返す
 * @param  {int} max 範囲の上限(デフォルトは100)
 * @param  {int} min 範囲の下限(デフォルトは0)
 * @return {int}     乱数
 */
function randInt(max = 100,min = 0){
  if(max < min){
    const i = max;
    max = min;
    min = i;
  }
  return Math.floor(( Math.random() * ( ( max + 1 ) - min ) ) + min);
}
/**
 * background.js
 * 背景の「あの楽器風のアニメーション」
 */
$(function(){
  'use strict';
  let count = 1;
  setInterval(function () {
    let elements = '';
    // lef rellaxClass =
    // let randLeft = Math.floor(Math.random()*(window.innerWidth));
    // let randTop = Math.floor(Math.random()*(window.innerHeight/2));
    const randLeft = randInt(window.innerWidth)-100;
    // const randTop = randInt(window.innerHeight)-100;
    const randTop = randInt(document.body.clientHeight)-100;
    switch (randLeft%4) {
      case 0:
        elements = '<img src="./resource/img/circle.svg" class="circle rellax'+count+'" data-rellax-speed="'+randInt(10,1)+'" style="left:'+randLeft+'px;top:'+randTop+'px" />';
        break;
      case 1:
        elements = '<img src="./resource/img/triangle.png" class="triangle rellax'+count+'" data-rellax-speed="'+randInt(10,1)+'" style="left:'+randLeft+'px;top:'+randTop+'px" />';
        break;
      case 2:
        elements = '<img src="./resource/img/rect.svg" class="rect rellax'+count+'" data-rellax-speed="'+randInt(10,1)+'" style="left:'+randLeft+'px;top:'+randTop+'px" />';
        break;
      case 3:
        elements = '<img src="./resource/img/bar.png" class="bar rellax'+count+'" data-rellax-speed="'+randInt(10,1)+'" style="left:'+randLeft+'px;top:'+randTop+'px" />';
        break;
    };

    let appendEle = '#background-area div.layer' + randInt(5,1);
    $(elements).appendTo(appendEle);
    if(count > 20){
      $('#background-area > img:first').remove();
      count = 1
    }
    count++;
    console.info(randLeft,randTop);
  }, 300);
});
