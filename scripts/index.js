// 画出任意的梯形
function drawTrapezoid() {
    // 四边形内角和为360度，仅需要用户输入一个底角或一个顶角的度数即可
    // 梯形的顶边的长度， CSS 中的 width
    var tTop = document.getElementById("tTop").value;
    // this.tBottom = tBottom;
    // 梯形的高， CSS 中的 border-bottom-width
    var tHeight = document.getElementById("tHeight").value;
    // 梯形左边的一个角
    var tLeftAngle = document.getElementById("tLeftAngle").value;
    // 梯形右边的一个角
    var tRightAngle = document.getElementById("tRightAngle").value;
    // 判断输入数据是否合法
    // tLA 与 tRA 均为正值且 tLA 与 tRA 均不为零且在规定范围内
    if (!((180 > tLeftAngle > 0) && (180 > tRightAngle > 0))) {
        alert("需要输入左边与右边的两个角度（0-180）");
        return false;
    }
    if ((tTop > 150) || (tHeight > 150)) {
        alert("这么大的梯形可能放不下！");
        return false;
    }
    if (tTop > 100 || tHeight > 100 || tLeftAngle > 130 || tRightAngle > 130) {
        alert("当前尺寸在部分设备上可能显示不全");
    }
    // 通过三角函数求得实际在 CSS 中 border-left-width 的宽度
    var borderLeftWidth = function (tHeight, tLeftAngle) {
        // 判断用户输入的是顶角还是底角
        // 输入的是顶角
        var tLA = tLeftAngle;
        var tH = tHeight;
        if (tLA > 90) {
            // 顶角转化为锐角运算
            tLA -= 90;
            // 此时与底角运算相反
            var temp = tH * Math.tan(tLA * Math.PI / 180);
            console.log(temp.toFixed(2));
            // 对运算结果保留两位（四舍五入）
            return temp.toFixed(2);
        }
        // 输入的是底角
        else {
            // 底角直接进行运算
            var temp = tH / Math.tan(tLA * Math.PI / 180);
            console.log(temp.toFixed(2));
            // 对运算结果保留两位（四舍五入）
            return temp.toFixed(2);
        }
    }
    // 通过三角函数求得实际在 CSS 中 border-right-width 的宽度
    var borderRightWidth = function (tHeight, tRightAngle) {
        // 判断用户输入的是顶角还是底角
        // 输入的是顶角
        var tRA = tRightAngle;
        var tH = tHeight;
        if (tRA > 90) {
            // 顶角转化为锐角运算
            tRA -= 90;
            // 此时与底角运算相反
            var temp = tH * Math.tan(tRA * Math.PI / 180);
            // console.log(temp.toFixed(2));
            // 对运算结果保留两位（四舍五入）
            return temp.toFixed(2);
        }
        // 输入的是底角
        else {
            // 底角直接进行运算
            var temp = tH / Math.tan(tRA * Math.PI / 180);
            // console.log(temp.toFixed(2));
            // 对运算结果保留两位（四舍五入）
            return temp.toFixed(2);
        }
    }

    // HTML DOM
    var draw = document.getElementById("trapezoid");
    // alert(draw);
    draw.style.width = tTop + "px";
    draw.style.borderLeftWidth = borderLeftWidth(tHeight, tLeftAngle) + "px";
    draw.style.borderRightWidth = borderRightWidth(tHeight, tRightAngle) + "px";
    draw.style.borderBottomWidth = tHeight + "px";
    // 移除trapezoid的类名
    draw.classList.remove("trapezoidAnimated");
    // offsetWidth 元素宽度（布局）
    // void expression
    void draw.offsetWidth;
    draw.classList.add("trapezoidAnimated");
}