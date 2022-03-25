window.addEventListener('load', function () {
    var focus = document.querySelector('.focus');
    var arrows = document.querySelector('.arrows');
    var focusWidth = focus.offsetWidth;
    var arrow_l = focus.querySelector('.arrow-l');
    var arrow_r = focus.querySelector('.arrow-r');
    var imgs = focus.querySelector('.imgs');
    var circle = focus.querySelector('.circle');
    focus.addEventListener('mouseenter', function () {
        arrows.style.display = 'block';
        clearInterval(timer);
    })
    focus.addEventListener('mouseleave', function () {
        arrows.style.display = 'none';
        timer = setInterval(function () {
            arrow_r.click();
        },2000)
        
    })
    for (var i = 0; i < imgs.children.length; i++) {
        var li = document.createElement('li');
        //创建索引号
        li.setAttribute('index', i);
        circle.appendChild(li);
        li.addEventListener('click', function (){
            for (var i = 0; i < circle.children.length; i++) {
                circle.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circles = num;
            animate(imgs, -index * focusWidth); 
        });
      
    }
    circle.children[0].className = 'current';
    var first = imgs.children[0].cloneNode(true);
    imgs.appendChild(first);
    imgs.style.width = '718' * imgs.children.length+ 'px';
    var circles = 0;
    var num = 0;
    var flag = true;
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false;
        if (num == imgs.children.length - 1) {//要点击5次按钮，是从0开始比较的要比较5次，如果直接num == imgs_lis.length要比较6次了
            imgs.style.left = 0;//如果 不设置imgs.style.left = 0;也可以实现循环播放，但是点击最后图片的按钮回去方向是向右，而我们是需要向左的。
            //imgs.style.left = 718+'px';这种方式也可以，
            // 反正再次点击num = 1了之后imgs位置是 - 718px，结果都一样。
            num = 0;
        }
        num++; //点击就要有图片的移动所以是num++ 从1开始
            animate(imgs, -focusWidth * num, function () {
                flag = true;
            });
        circles++;
        if (circles ==circle.children.length)//不减一是因为circles++;过了从1开始算了
        {
            circles = 0;
        }
        circleChange();
      }
    }
);
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                imgs.style.right = 0;//=imgs.style.left=(imgs.children.length-1)*focusWidth+'px' 
                num = imgs.children.length - 1;
            }
            if (circles == 0) {
                circles = circle.children.length;
            }
            num--;
            animate(imgs, -focusWidth * num, function () {
                flag = true;
            });
            circles--;
      
            circleChange();
        }
    })
    ;
    function circleChange() {
        for (var i = 0; i < circle.children.length; i++){
            circle.children[i].className = '';
        }
        circle.children[circles].className = 'current';
    }
    var timer = setInterval(function () {
        arrow_r.click();
    },2000)
});

