function animate(object, target, callback) {
    clearInterval(object.timer);
    object.timer = setInterval(function () {
        var step = (target - object.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (object.offsetLeft == target) {
            clearInterval(object.timer);
            // if (callback) {
            // callback();
            // }
            // 短路运算
            callback && callback();
        }
        object.style.left = object.offsetLeft + step + 'px';
        // console.log(object.style.left );
    }, 30);

}