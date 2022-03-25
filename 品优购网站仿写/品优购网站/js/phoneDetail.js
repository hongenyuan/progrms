 window.addEventListener('load', function () {
 var phoneImg = document.querySelector('.phoneImg');
 var mask = document.querySelector('.mask');
 var big = document.querySelector('.big');
 phoneImg.addEventListener('mouseover', function () {
 mask.style.display = 'block';
 big.style.display = 'block';
 })
phoneImg.addEventListener('mouseout',function(){
    mask.style.display = 'none';
    big.style.display = 'none';
})
phoneImg.addEventListener('mousemove',function(e){
// 获取鼠标在盒子内的坐标
var x = e.pageX-this.offsetLeft;
var y = e.pageY-this.offsetTop;
var maskLeft=x-mask.offsetWidth/2;
var maskTop=y-mask.offsetHeight/2;
var maxLeft=phoneImg.offsetWidth-mask.offsetWidth;
// 把鼠标的盒子内坐标位置给mask
mask.style.left=maskLeft+'px';
mask.style.top=maskTop+'px';
// 设定mask不能超多phoneImg
if(mask.offsetLeft<=0){
    mask.style.left=0;
    }else if(mask.offsetLeft>=maxLeft){
    mask.style.left=maxLeft+'px';
    }
    //注意phoneImg与mask都是等宽高的所以最大移动距离都是一样的
    if(mask.offsetTop<=0){
        mask.style.top=0;
        }else if(mask.offsetTop>=maxLeft){
        mask.style.top=maxLeft+'px';
        }
    //利用等比例改变big的位置
    //先算出big最大移动的距离
    var big_img=document.querySelector('.big_img');
    var big_max=big.offsetWidth-big_img.offsetWidth;
    var bigLeft=maskLeft*big_max/maxLeft;
    var bigTop=maskTop*big_max/maxLeft;
    big_img.style.left=bigLeft+'px';
    big_img.style.top=bigTop+'px';
})
 })
