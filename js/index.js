window.onload=function () {
    // 画布函数，给英雄和皮肤左侧画一个渐变的方块
    function cvs() {
        var cvsarr = document.getElementsByClassName('cvs');
        for(var j =0;j<cvsarr.length;j++){
            var ctx = cvsarr[j].getContext('2d');

            // 需求，在50,50点绘制一个宽高各100的渐变矩形
            var i = 0, len = 100;
            for ( ; i < len; i++ ) {
                // 为了防止重绘
                ctx.beginPath();
                ctx.moveTo(i,0);
                ctx.lineTo(i,100);
                // 红色通道值依次累加
                ctx.strokeStyle = 'rgba(' + 0 + ', ' + 0 + ', ' + 0+ ',' + 20/i + ' )';
                ctx.stroke();
            }
        }
    }
    cvs();

    //轮播图函数
    function banner() {
        //获取li元素节点
        //css3的话是
        // var ul = document.querySelector('.banner_images');
        //错了，没必要获取li,而且下面写错了不是空格
        // var liArr =document.querySelectorAll('.banner_images li' )
        // 明明获取到了却说我transition不能加给未定义
        // var ul =document.getElementsByClassName('banner_image')[0];
        var ul=document.querySelector('.banner_image');
        // console.log(ul);
        // 都打印出来看不同，发现get那个很多属性，像是对象，query那个更像是标签
        //原来是因为没有加[0]，终极低级失误，加了之后打印出来是一样的，不加那个是数组
        //哇真的低级
        var liIndex =document.querySelectorAll('.banner_index li');
        // 获取屏幕宽度
        var width = document.body.offsetWidth;
        var index =1;
        var timer =setInterval(function () {
            index++;
            //总之触发定时器就一定会自动打开过渡效果
            ul.style.transition ='all .3s';

            ul.style.transform="translateX("+-index*width+"px)";
        },1500);
        //监听，过渡事件结束就做事情
        addEventListener('webkitTransitionEnd',function() {
            if(index>4){
                //先关闭过渡，别让人看出，然后移动到第一张或者最后一张重新开始
                ul.style.transition ='';
                index=1;
                ul.style.transform="translateX("+-index*width+"px)";
            }else if(index<0){
                ul.style.transition='';
                index=4;
                ul.style.transform="translateX("+-index*width+"px)";
            }
            //全部清空类名
            for(var i=0;i<liIndex.length;i++){
                liIndex[i].className='';
            }
            liIndex[index-1].className='current';
        });
        //舰艇手动滑屏幕了
        ul.addEventListener('touchstart',function() {
            console.log('触摸开始了');
            //首先只要点了肯定就关闭定时器
            clearInterval(timer);
            //关闭过渡
            ul.style.transition ='';
            // 记录开始值
            startX = event.touches[0].clientX;
        });
        ul.addEventListener('touchmove',function() {
            console.log('触摸中了');
            //记录移动了多少
            moveX=event.touches[0].clientX-startX;
            console.log(moveX);
            ul.style.transform="translateX("+(-1*index*width+moveX)+"px)";


        });
        ul.addEventListener('touchend',function() {
            console.log('触摸结束了了');
            //不是回拉就是换页，肯定要过渡
            ul.style.transition ='all .3s';
            //拉少了回弹，拉多了换页
            if(Math.abs(moveX)<0.3*width){
                // 不变
                ul.style.transform="translateX("+(-1*index*width)+"px)";
            }else{
                if(moveX>0){
                    index--;
                    ul.style.transform="translateX("+(-1*index*width)+"px)";
                }else{
                    index++;
                    ul.style.transform="translateX("+(-1*index*width)+"px)";
                }
            }
            //直到结束才开始定时器
            timer=setInterval(function () {
                index++;
                //总之触发定时器就一定会自动打开过渡效果
                ul.style.transition ='all .3s';

                ul.style.transform="translateX("+-index*width+"px)";
            },1500);
        });
    }
    function cutDownTime() {
        // 定义 总时间
        var totalHour = 1 ;

        // 转化为秒
        var totalSec = 1*60*60;


        var liArr = document.querySelectorAll('.new_title ul li');

        var timeId = setInterval(function () {

            // 0 判断 是否 小于0了
            if (totalSec<=0) {
                // 干掉 定时器
                clearInterval(timeId);

                console.log('结束啦,你买不到了哦');

                return;
            }


            totalSec--;


            var hour = Math.floor(totalSec / 3600);
            var minute = Math.floor(totalSec % 3600 /60);
            var sec =totalSec % 60;



            liArr[0].innerHTML =Math.floor(hour/10) ;
            liArr[1].innerHTML =hour%10 ;


            liArr[3].innerHTML = Math.floor(minute/10);
            liArr[4].innerHTML = minute%10;


            liArr[6].innerHTML = Math.floor(sec/10);
            liArr[7].innerHTML = sec%10;



        },1000)
    }
    banner();
    cutDownTime();
};