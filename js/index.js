//获取元素
var getEle = function(cls){
   return document.querySelector(cls);
}
// 获取所有元素
var getAllEle = function(cls){
  return document.querySelectorAll(cls);
}
// 获取元素样式
var getCls = function(element){
  return element.getAttribute('class');
}
// 设置元素样式
var setCls = function(element,cls){
  return element.setAttribute('class',cls);
}
// 为元素添加样式
var addCls = function(element,cls){
  var baseCls = getCls(element);
  if(baseCls.indexOf(cls)==-1){
    setCls(element,baseCls + ' ' +cls);
  }
}
// 为元素删除样式
var delCls = function(element,cls){
  var baseCls = getCls(element);
  if(baseCls.indexOf(cls)!=-1){
    setCls(element,baseCls.split(cls).join(' ').replace(/\s+/g,' '));
  }
}
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
var setScreenAnimateInit = function(ele){
  var screen = document.querySelector(ele); // 获取当前屏的元素
  var aniElement = animationElements[ele]; // 获取需要设置动画的元素
  for(var i=0;i<aniElement.length;i++){
    var element = document.querySelector(aniElement[i]);
    var baseEle = element.getAttribute('class');
     element.setAttribute('class',baseEle +' '+ aniElement[i].substr(1)+'_animate_init');
  }
}
var setScreenAnimateDone = function(ele){
  var screen = document.querySelector(ele); // 获取当前屏的元素
  var aniElement = animationElements[ele]; // 获取需要设置动画的元素
  for(var i=0;i<aniElement.length;i++){
    var element = document.querySelector(aniElement[i]);
    var baseEle = element.getAttribute('class');
     element.setAttribute('class',baseEle.replace('_animate_init','_animate_done'));
  }
}
window.onload = function(){
  for(k in animationElements){
    if(k==='.screen-1'){
      continue;
    }
    setScreenAnimateInit(k);
  }
}
var navItem = getAllEle('.header__nav-item');
var outlineItem = getAllEle('.outline__item');
var setNavJump = function(i,libs){
  var item = libs[i];
  item.onclick = function(){
      document.documentElement.scrollTop = 800*i;
    }
  }
for(var i=0;i<navItem.length-1;i++){
  setNavJump(i,outlineItem);
}
for(var i=0;i<navItem.length-1;i++){
  setNavJump(i,navItem);
}
var switchNavStatus = function(index){
  for(var i=0;i<navItem.length;i++){
    delCls(navItem[i],'header__nav-item_status_Active');
  }
  addCls(navItem[index],'header__nav-item_status_Active');
  for(var i=0;i<outlineItem.length;i++){
    delCls(outlineItem[i],'outline__item_status_color');
  }
  addCls(outlineItem[index],'outline__item_status_color');
}
switchNavStatus(0);
window.onscroll = function() {
  var top = document.body.scrollTop||document.documentElement.scrollTop;
  if(top>60){
    addCls(getEle('.header'),'header_Active');
    addCls(getEle('.outline'),'outline__active');
  }else{
    delCls(getEle('.header'),'header_Active');
    delCls(getEle('.outline'),'outline__active');
  }
  switchNavStatus(0);
  // if(top>1){
  //   setScreenAnimateDone('.screen-1');
  // }
  if(top>740*1){
    setScreenAnimateDone('.screen-2');
    switchNavStatus(1);
  }
  if(top>740*2){
    setScreenAnimateDone('.screen-3');
    switchNavStatus(2);
  }
  if(top>740*3){
    setScreenAnimateDone('.screen-4');
    switchNavStatus(3);
  }
  if(top>740*4){
    setScreenAnimateDone('.screen-5');
    switchNavStatus(4);
  }
  if(top>740*5){
    setScreenAnimateDone('.screen-5');
    switchNavStatus(5);
  }
}
setTimeout(function(){
  setScreenAnimateDone('.screen-1');
},100)
