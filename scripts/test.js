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
        console.log(temp.toFixed(2));
        // 对运算结果保留两位（四舍五入）
        return temp.toFixed(2);
    }
    // 输入的是底角
    else {
        // 底角直接进行运算
        var temp = tH / Math.tan(tRA * Math.PI / 180);
        console.log(temp.toFixed(2));
        // 对运算结果保留两位（四舍五入）
        return temp.toFixed(2);
    }
}

borderLeftWidth(30, 40);
borderRightWidth(30, 50);