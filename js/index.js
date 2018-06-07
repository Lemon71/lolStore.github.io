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


}