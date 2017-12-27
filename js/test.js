var animationElements = {
  '.screen-1': [
    '.screen-1__heading',
    '.screen-1__phone',
    '.screen-1__shadow'
  ],
  '.screen-2': [
    '.screen-2__heading',
    '.screen-2__phone',
    '.screen-2__subheading'
  ],
  '.screen-3': [
    '.screen-3__heading',
    '.screen-3__phone',
    '.screen-3__subheading',
    '.screen-3_features'
  ],
  '.screen-4': [
    '.screen-4__heading',
    '.screen-4__subheading',
    '.screen-4__type_item_i_1',
    '.screen-4__type_item_i_2',
    '.screen-4__type_item_i_3',
    '.screen-4__type_item_i_4'
  ],
  '.screen-5': [
    '.screen-5__heading',
    '.screen-5__subheading',
    '.screen-5__bg'
  ]
}
function changeStatus(ele){
  var screen = document.querySelector(ele); // 获取当前屏的元素
  var aniElement = animationElements[ele]; // 获取需要设置动画的元素
  var isSetAnimateDone = false; //是否按下
  var isSetAnimateInit = false; // 是否设置初始化样式
  screen.onclick = function(){
      if(isSetAnimateInit===false){
        for(var i=0;i<aniElement.length;i++){
          var element = document.querySelector(aniElement[i]);
          var baseEle = element.getAttribute('class');
           element.setAttribute('class',baseEle +' '+ aniElement[i].substr(1)+'_animate_init');
        }
        isSetAnimateInit = true;
        return;
      }
      if(isSetAnimateDone===false){
        for(var i=0;i<aniElement.length;i++){
          var element = document.querySelector(aniElement[i]);
          var baseEle = element.getAttribute('class');
           element.setAttribute('class',baseEle.replace('_animate_init','_animate_done'));
        }
        isSetAnimateDone = true;
        return;
      }
      if(isSetAnimateDone===true){
        for(var i=0;i<aniElement.length;i++){
          var element = document.querySelector(aniElement[i]);
          var baseEle = element.getAttribute('class');
           setDone = element.setAttribute('class',baseEle.replace('_animate_done','_animate_init'));
        }
        isSetAnimateDone = false;
        return;
      }
  }
}
for(k in animationElements){
  changeStatus(k);
}
