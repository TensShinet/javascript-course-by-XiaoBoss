// 2016/11/25
// 作业 2
//
// 作业开始
// 注意, 作业中提到的国旗的颜色我们只画线框部填色

// 1
// 实现一个矩形函数
// x y 是矩形左上角坐标
// w h 是宽高
// rect(x, y, w, h)
var rect = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)
    //
    int i = 0
    while (i < 2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i++;
    }
}

// 2
// 实现一个矩形函数
// x y 是矩形中心的坐标
// w h 是宽高
// center_rect(x, y, w, h)
var center_rect = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)
    // 
    var x1 = x - w/2
    var y1 = y - h/2
    //
    rect(x1, y1, w, h)
}
//3 3
// 实现一个正五角星(国旗大星星那种)函数
// x y 是五角星顶部横边的左边点坐标
// length 是一条线的长度
// 这是一个正五角星
// vgwujcxy(x, y, length)
var a = function(angle, length) {
    right(angle)
    forward(length)
}
var b = function(angle, length) {
    left(angle)
    forward(length)
}
var vgwujcxy = function(x, y, length) {
    jump(x, y)
    setHeading(0)
    // 箭头的初始方向必须与横线平行
    // 画五角星
    i = 0
    while(i < 5) {
        forward(length)
        b(75, length) 
        right(150)
        i++;
    }
}

// 4
// 实现一个函数画日本国旗
// 调用 2 个函数画日本国旗
// 一个画背景的白色矩形
// 一个画中间的红色圆
// japan()
var circle = function(x, y, color, r) {
    jump(x, y)
    setHeading(0)
    //
    var edge = 36
    var angle = 360 / edge
    // 将画笔的位置初始化
    var angleHalf = angle / 2
    var rotaAngle = 90 + angleHalf
    penup()
    a(rotaAngle, r) 
    pendown()
    rotaAngle = (180 - (360 / edge)) / 2
    right(rotaAngle)
    // 求出画笔画画的边长
    var radin = (angleHalf / 180) * Math.PI 
    var length = r * Math.sin(radin) * 2
    // 画36边形    
    var i = 0
    while( i < edge ) {
        a(angle, length)
        i++;
    }
    // 还不知道怎么填充颜色
}
var japan = function {
    var x = 0,  y = 0, w = 0, h = 0
    var cirColor = 0
    var rectColor = 0
    var cirR = 0

    center_rect(x, y, w, h, rectColor)
    circle(x, y, cirColor, cirR)    
}
// 注意, 你可以添加 x y w h 参数让国旗画在任意地方, 任意尺寸
// 注意, 以下所有国旗同理

// 5
// 实现一个五角星函数
// x y 是五角星的中心点坐标
// length 是一条线的长度
// rorate 是正五角星顺时针偏移的角度
// wujcxy(x, y, length, rorate)
// 为了实现这个函数, 你需要使用三角函数计算顶点在圆上的坐标
// 如果你不懂这个数学计算过程, 可以在论坛提问
// 我帮你实现了正弦余弦函数如下
var sin = function(degree) {
    // 如上课所述, 数学库里面的 sin 函数接受弧度作为参数
    // 我们这个函数X接受角度, 下面是弧度转角度的公式
    var radians = degree * Math.PI / 180
    return Math.sin(radians)
}
var cos = function(degree) {
    var radians = degree * Math.PI / 180
    return Math.cos(radians)
}
var wujcxy = function(x, y, length, rorate) {
    jump(x, y)
    setHeading(0)
    // 初始化箭头位置
    var r = sin(129) / sin(36) * length
    var rotaAngle = 90 + 72 - rorate
    b(rotaAngle, r)
    // initialize arrow's direction, which must parallel with the line
    rotaAngle = 180 - 15
    right(rotaAngle)
    // begin to draw five-pointed star
    var i = 0
    while(i < 5) {
        forward(length)
        b(75, length) 
        right(150)
        i++;
    }
}

// 6
// 实现一个函数画中国国旗(以下国旗题目都是如此 不重复了)
// 调用 2 个函数画中国国旗
// 一个画红色背景
// 另一个画五角星（调用 5 次，不要求角度朝向，只要 5 个五角星即可）
// 当然你也可以使用第 5 题 wujcxy 这个函数画出完美的国旗
// china()
var china = function() {
    var rectX = 0
    var rectY = 0
    var starX = 0
    var starY = 0
    var length = 5
    var w
    var h

    rect(rectX, rectY, w, h, red)
    var i = 0
    while (i < 5) {
        starX = i * 20
        vgwujcxy(starX, starY, yellow)
    }
}


// 7
// 实现一个函数画法国国旗
// france()
var france = function() {
    var x = 0
    var y = 0
    var w = 10
    var h = 30
    var i = 0
    var color = 0
    while(i < 3) {
        x = i * w
        if(i === 0) {
            color = blue
        } else if(i === 1) {
            color = white
        } else {
            color = red
        }
        rect(x, y, w, h, color)
        i++
    }
}
// 8
// 画德国国旗
// germany()
// germany() is the same as france()

// 9
// 画 冈比亚国旗
// gambia()
// gambia() is the same as france() ,however,2 rects are added

// 10
// 画 瑞士国旗
// switzerland()

// 11
// 画朝鲜国旗
// 分别是 圆 矩形 五角星
// 提示, 使用之前定义的函数
// northkorea()

// 如果你实在无聊, 还可以画美国国旗(这个很复杂, 不要求你现在画)
// 丑媳妇总要见公婆的
