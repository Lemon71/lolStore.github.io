window.onload=function () {
  function left() {
      // 获取ul
      var left =document.getElementsByClassName('list_left')[0];
      var ul =left.getElementsByTagName('ul')[0];
      // 获取ul高度
      var ulHeight =ul.offsetHeight;
      //大盒子的高度，就是显示出来的高度
      var leftHeight=left.offsetHeight;
      //设置一个当前位置
      var nowY= 0;

      ul.addEventListener('touchstart',function () {
          ul.style.transition='';
           startY = event.touches[0].clientY;
      });
      ul.addEventListener('touchmove',function () {
           moveY = event.touches[0].clientY-startY;
          ul.style.transform="translateY("+(nowY+moveY)+"px)";
      });
      ul.addEventListener('touchend',function () {
          nowY += moveY;
          if(nowY>0){
              ul.style.transition='all .1s';
              ul.style.transform='translateY(0px)';
              nowY=0;
          }else if(nowY<(leftHeight-ulHeight)){
              ul.style.transition='all .1s';
              ul.style.transform='translateY('+(leftHeight-ulHeight)+'px)';
              nowY=leftHeight-ulHeight;
          }

      });
  };
  function right(){
      var right =document.getElementsByClassName('list_right')[0];
      var text =document.getElementsByClassName('right_text')[0];
      // 获取text高度
      var textHeight =text.offsetHeight;
      //大盒子的高度，就是显示出来的高度
      var rightHeight=right.offsetHeight;
      //设置一个当前位置
      var nowY= 0;

      text.addEventListener('touchstart',function () {
          text.style.transition='';
          startY = event.touches[0].clientY;
      });
      text.addEventListener('touchmove',function () {
          moveY = event.touches[0].clientY-startY;
          text.style.transform="translateY("+(nowY+moveY)+"px)";
      });
      text.addEventListener('touchend',function () {
          nowY += moveY;
          if(nowY>0){
              text.style.transition='all .1s';
              text.style.transform='translateY(0px)';
              nowY=0;
          }else if(nowY<(rightHeight-textHeight)){
              text.style.transition='all .1s';
              text.style.transform='translateY('+(rightHeight-textHeight)+'px)';
              nowY=rightHeight-textHeight;
          }

      });
  };
  left();
  right();
};