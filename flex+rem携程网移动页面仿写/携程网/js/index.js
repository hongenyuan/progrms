window.addEventListener('load', function () {
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    var ol = focus.children[1];
    var width = focus.offsetWidth;
    var index= 0;
    var timer = setInterval(function () {
        index++;
        var move = -index * width;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translatex(' + move + 'px)';
    }, 2000);
    ul.addEventListener('transitionend', function () {
        if (index >= 3) {
            index = 0;
            var move = -index * width;
            ul.style.transition = 'none';
            ul.style.transform = 'translatex(' + move + 'px)';
        }else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            var move = -index * width;
            ul.style.transform = 'translatex(' + move + 'px)';
        }
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    });
    var startx = 0;
    var movex = 0;
    var flag = false;
    ul.addEventListener('touchstart', function (e) {
        clearInterval(timer);
        startx = e.targetTouches[0].pageX;
        
    });
    ul.addEventListener('touchmove', function (e) {
        flag = true;
        movex = e.targetTouches[0].pageX - startx;
        var x = -index * width + movex;
        ul.style.transition = 'none';
        ul.style.transform = 'translatex(' + x + 'px)';
        e.preventDefault();
    })
   
    ul.addEventListener('touchend', function () {
        if (flag) {
            if (Math.abs(movex) > 50) {
                if (movex > 0) {
                    index--;
                } else {
                    index++;
                }
                var x = -index * width;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translatex(' + x + 'px)';
            }
           timer = setInterval(function () {
                index++;
                var move = -index * width;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translatex(' + move + 'px)';
            }, 2000);
        }
    })
    var top = this.document.querySelector('.top');
    var local_nav = this.document.querySelector('.local_nav');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= local_nav.offsetLeft) {
            top.style.display = 'block';
        } else {
            top.style.display = 'none';
        }
        top.addEventListener('click', function () {
            window.scroll(0, 0);
        })
    })
})