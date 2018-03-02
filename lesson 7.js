// 2016/12/08
//
// ============
// 作业 7
//
// 本次作业主要还是是 string
// string 题目用到的知识仍然是
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
// 请自行编写测试
//


// 定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}

// ======
// 测试
// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 {', message)
    }
}

// 定义一个增强的 ensureEqual
var ensureEqual = function(a, b, message) {
    if (a != b) {
        log(`*** 测试失败, ${a} 不等于 ${b}, ${message}`)
    }
}


// 作业 1
// 实现函数
// 多看提示多讨论
var join = function(delimiter, array) {
    /*
    delimiter 是 string
    array 是包含 string 的 array

    把 array 中的元素用 delimiter 连接成一个字符串并返回
    具体请看测试
    */
    var str = []
    str[0] = array[0]

    for (var i = 1; i < array.length; i++) {
        str = str + delimiter + array[i]
    }

    return str
}

var test_join = function() {
    ensure(join('#', ['hello', 'gua']) == 'hello#gua', 'join 测试 1')
    ensure(join(' ', ['hello', 'gua']) == 'hello gua', 'join 测试 2')
    ensure(join('\n', ['multi', 'line', 'string']) == 'multi\nline\nstring', 'join 测试 3')
}


// 作业 2
// 实现函数
var split = function(s, delimiter=' ') {
    /*
    s 是 string
    delimiter 是 string, 默认为空格 ' '

    以 delimiter 为分隔符号, 返回一个 array
    例如
    split('1 2 3') 返回 ['1', '2', '3']
    split('a=b&c=d', '&') 返回 ['a=b', 'c=d']
    注意, 测试 array 是否相等得自己写一个函数用循环来跑

     0123456789
    'a=bc=def'
    [0, 1, 4, s.length]
    (0, 1)
    (1, 4)
    (4, s.length)
    */

    var array = []
    // space 是分隔符的长度, 因为分隔符不一定长度为 1
    var space = delimiter.length;
    // start 用来存储每次的开始下标
    var start = 0
    // 检查分隔符
    // 思路大概是这样的
    // 判断slice是不是与分隔符相等
    for(var i = 0; i < s.length; i++) {
        if(s.slice(i, i+space) === delimiter) {
            // 如果检查到了， 就储存一个数据
            array.push(s.slice(start, i))
            // 并更新start的值
            start = i + space
        }
    }
    // 把最后一个也放进去
    array.push(s.slice(start))
    return array
}


// 作业 3
// 实现函数
var replaceAll = function(s, old, newString) {
    /*
    s old newString 都是 string
    返回一个「将 s 中出现的所有 old 字符串替换为 new 字符串」的字符串
    */
    // 很简单, 对吧?

    // 你要学会， 将问题分解， 然后从上往下看程序的实现。
    // 这个题可以把他分解成， 先将这个old去除， 然后得到一个删除了old的数组
    // 然后在每个删除数组的中间添加上new
    // 我感觉吧， 不要总把问题放在一起想， 可能会， 使程序效率更高
    // 但是， 按照萧大的思想来说， 真正的写程序就是把问题拆成无数个小的部分

    var s1 = split(s, old)
    var s2 = join(newString, s1)
    return s2
}


// 作业 4
// 实现函数
var str1 = function(n) {
    /*
    n 是 int
    返回这样规律的字符串, 特殊情况不考虑
    n       返回值
    1       '1'
    2       '121'
    3       '12321'

    1-n
    (n-1)-1
    */

    // 拆分， 先输出左边， 再输出右边
    var array = []
    // 为什么用String()比用'i'， 要好
    for (var i = 0; i < n+1; i++) {
        array = array + 'i'
    }
    for (var i = n-1; i > 0; i++) {
        array = array + 'i'
    }

}


// 作业 5
// 实现函数
var str2 = function(n) {
    /*
    n 是 int
    返回这样规律的字符串, 特殊情况不考虑
    n       返回值
    1       'A'
    2       'ABA'
    3       'ABCBA'
    */
    // 用下标来取字符
    //
    var L = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var array = []
    for (var i = 0; i < n; i++) {
        array = array + L[i]
    }
    for (i = n-2; i > -1; i++) {
        array = array + L[i]
    }

    return array
}


// 作业 6
// 实现加法口诀表
//
// 辅助函数
var log = function() {
    console.log.apply(console, arguments)
}
var join = function(delimiter, array) {
    var str = []
    str[0] = array[0]

    for (var i = 1; i < array.length; i++) {
        str = str + delimiter + array[i]
    }

    return str
}
var addLine = function(number) {
    var array = []
    var s = ''
    for (var i = 0; i < number; i++) {
        s = `${number} + ${i+1} = ${number+i+1}`
        // log("addLine(), for1", s)
        array[i] = s
    }
    // log("addLine(), 每一次得到的数组", array)
    var str = join(' ', array)
    // log("addLine()", array, number)
    // log("addLine(), 每一次得到的数组", array)
    return str
}

var addTable = function() {

    var array = []
    for (var i = 0; i < 9; i++) {
        array[i] = addLine(i+1)
    }
    return array
}
log(join('\n', addTable()))
// 用之前的 join 就可以漂亮地输出了
// log(join('\n', addTable()))


// 作业 7
// 实现函数
var range1 = function(start, end) {
    /*
    start end 都是 int

    返回一个 array, 假设 start 为 1, end 为 5, 返回数据如下
    [1, 2, 3, 4]
    */

    var array = []
    for (var i = 0; i < end; i++) {
        array.push(i+1)
    }
    return array
}


// 作业 8
// 实现函数
var range2 = function(start, end, step=1) {
    /*
    start end step 都是数字
    step 是大于 0 的正整数

    返回一个 array
    假设 start=1, end=5, step=1 返回数据如下
    [1, 2, 3, 4]
    假设 start=0, end=6, step=2 返回数据如下
    [0, 2, 4]
    */
    var array = []
    for (var i = start; i < end; i += step) {
        array.push(i)
    }
    return array
}


// 作业 9
// 实现函数

var range3 = function(start, end, step=1) {
    /*
    start end step 都是数字

    和 range2 一样, 但是要求支持负数 step
    使用 while 循环
    返回一个 array
    假设 start=1, end=5, step=1 返回数据如下
    [1, 2, 3, 4]
    假设 start=6, end=0, step=-1 返回数据如下
    [6, 5, 4, 3, 2, 1]
    */
    // 分成正数和负数的情况
    var array = []
    if(step > 0) {
        array = range2(start, end, step)
    } else {
        for (var i = start; i > end; i += step) {
            array.push(i)
        }
    }
    return array
}

// 背下另一个思路
var stepCondition = function(start, end, step) {
    if(step > 0) {
        return start < end
    } else {
        return start > end
    }
}
var range3_ = function(start, end, step=1) {
    var array = []
    var i = start

    while(stepCondition(i, end, step)) {
        array.push(i)
        i = i + step
    }
    return array
}

// 作业 10
// 实现函数
var random01 = function() {
    /*
    js 标准数学库有一个随机数函数
    Math.random()
    它返回 0 - 1 之间的小数

    用它实现本函数, 返回 0 或 1
    */
    var i = 0
    var decimal = Math.random()

    if(decimal < 0.5) {
        i = 1
    }
    return i
}


// 作业 11
// 实现函数
var randomLine01 = function(n) {
    /*
    返回一个只包含了 0 1 的随机 array, 长度为 n
    假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    [0, 0, 1, 0, 1]
    */
    var array = []

    for (var i = 0; i < n; i++) {
        var r = random01()
        array.push(r)
    }
    return array

}


// 作业 12
var randomSquare01 = function(n) {
    /*
    返回以下格式的数据
    假设 n 为 3, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    注意, 这只是一个 array, 并不是它显示的样子
    注意, 这是一个 array 不是 string
    [
        [0, 0, 1],
        [1, 0, 1],
        [0, 0, 0],
    ]
    返回, 包含了 n 个『只包含 n 个「随机 0 1」的 array』的 array
    */

    // 就是把， square， 分成， n个line
    var array = []
    for(var i = 0; i < n; i++) {
        var randomLine = randomLine01(n)
        array.push(randomLine)
    }
    return array

}


// 作业 13
var randomLine09 = function(n) {
    /*
    返回一个只包含了 0 9 的随机 array, 长度为 n
    假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    [0, 0, 9, 0, 9]

    上上期有初学编程的同学用了一个很优雅的办法, 我就想不到
    */
    var array = []
    for (var i = 0; i < n; i++) {
        var r = random01()
        if(r === 1) { r = 9; }
        array.push(r)
    }
    return array
}


// 作业 14
var computedNine = function(array, i) {
    var num = 0
    var left = (i === 0 && array[i+1] === 9)
    var right = (i === array.length-1 && array[i-1] === 9)
    if(left || right) {
        num++
    } else {
        left = (array[i-1] === 9)
        right = (array[i+1] === 9)
        if(left && right) {
            num += 2
        } else {
            num++
        }
    }
    return num
}
var markedLine = function(array) {
    /*
    array 是一个只包含了 0 9 的 array
    返回一个标记过的 array
    ** 注意, 使用一个新数组来存储结果, 不要直接修改老数组
    复制数组用 array.slice(0) 实现

    标记规则如下
    对于下面这样的 array
    [0, 0, 9, 0, 9]
    标记后是这样
    [0, 1, 9, 2, 9]

    规则是, 0 会被设置为左右两边 9 的数量
    */
    var newArray = []
    for(var i = 0; i < array.length; i++) {
        var n = array[i]
        if(n === 0) {
            n = computedNine(array, i)
        }
        newArray.push(i)
    }
    return newArray
}


// 作业 15
// 复制一个 square
var log = function() {
    console.log.apply(console, arguments)
}
var plused1 = function(array, row, col) {
    var plus = 0
    if( row < 0 || col < 0 || row > array.length-1 || col > array.length-1) {
        plus = 0
    } else if(array[row][col] === 9) {
        plus++;
    }
    return plus
}
var computedNine = function(array, row, col) {

    var num = 0
    if(array[row][col] === 9) {
        num = 9
    } else {
        for (var i = col-1; i <= col+1; i++) {
            num += plused1(array, row-1, i)
        }

        num += plused1(array, row, col-1)
        num += plused1(array, row, col+1)

        for (var i = col-1; i <= col+1; i++) {
            num += plused1(array, row+1, i)
        }

    }

    return num
}
var markedLine = function(array, row) {
    var width = array[0].length
    var num = 0
    var line = []
    for (var i = 0; i < width; i++) {
        num = computedNine(array, row, i)
        line.push(num)
    }
    return line
}
var markedSquare = function(array) {
    /*
    array 是一个「包含了『只包含了 0 9 的 array』的 array」
    返回一个标记过的 array
    ** 注意, 使用一个新数组来存储结果, 不要直接修改老数组

    范例如下, 这是 array
    [
        [0, 9, 0, 0],
        [0, 0, 9, 0],
        [9, 0, 9, 0],
        [0, 9, 0, 0],
    ]

    这是标记后的结果
    [
        [1, 9, 2, 1],
        [2, 4, 9, 2],
        [9, 4, 9, 2],
        [2, 9, 2, 1],
    ]

    规则是, 0 会被设置为四周 8 个元素中 9 的数量
    */
    var square = []
    var width = array[0].length;
    var height = array.length;
    for(var i = 0; i < height; i++) {
        var line = markedLine(array, i)
        square.push(line)
    }

    return square

}

log(markedSquare(array))

// 变量取名
/*
如果函数要返回一个数据
    函数名字是 名词

如果函数只做事不返回
    函数名字是 动词

变量名、函数名取名方式
    驼峰法 markedSquare


*/

// =======
// 提示
// =======
/*
注意要多 log 数据, 模拟执行流程, 发现问题所在

1, join
循环相加


2, split
用循环找到 delimiter
记录两个变量 start 和 end 来 slice 出子字符串


3, replaceAll
split 再 join


4, str1
用 2 个辅助函数
一个生成前半部分
一个生成后半部分
辅助函数用循环


5, str2
同上


6, addTable
用一个辅助函数生成行
用循环 push


7, range1
使用 while 循环


8, range2
循环加判断


9, range3
循环加判断


10, random01
用余数来实现


11, randomLine01
循环加 random01


12, randomSquare01
循环加 randomLine01


13, randomLine09
可以生成 01 之后把 1 替换为 9


14, markedLine
把 9 左右加一
注意判断 9 是否在两边


15, markedSquare
循环调用 markedLine
*/
