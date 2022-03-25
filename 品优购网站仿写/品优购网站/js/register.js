window.addEventListener('load', function () {
    var phoneNum = /^1[3|4|5|7|8]\d{9}$/;
    var ph = document.querySelector('#ph');
    var qqNum = /^[1-9]\d{4,}$/;
    var qq = document.querySelector('#qq');
    var qqName = /^[\u4e00-\u9fa5]{2,8}$/;
    var qname = document.querySelector('#qname');
    var mesgReg = /^\d{6}$/;
    var mesg = document.querySelector('#mesg');
    var paswReg = /^[a-zA-Z0-9_-]{6,16}$/;
    var pasw = document.querySelector('#pasw');
    var sure = document.querySelector('#sure');
    regxp(ph, phoneNum);
    regxp(qq, qqNum);
    regxp(qname, qqName);
    regxp(mesg, mesgReg);
    regxp(pasw,paswReg);
    function regxp(obj, reg) {
        obj.onblur = function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'right';
                this.nextElementSibling.innerHTML = '<img src="images/duigou.PNG" alt="">恭喜您输入正确!';
            } else {
                this.nextElementSibling.className = 'repeat';
                this.nextElementSibling.innerHTML = ' <img src="upload/images/❌_03.jpg" alt="">格式不正确，请重新输!';
            }
           
       }
    }
    sure.onblur = function () {
        if (this.value == pasw.value) {
            this.nextElementSibling.className = 'right';
            this.nextElementSibling.innerHTML = '<img src="images/duigou.PNG" alt="">恭喜您输入正确!';
        } else {
            this.nextElementSibling.className = 'repeat';
            this.nextElementSibling.innerHTML = ' <img src="upload/images/❌_03.jpg" alt="">输入密码不一致!';
        }
    }

})