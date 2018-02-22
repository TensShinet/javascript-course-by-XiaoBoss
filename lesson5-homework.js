var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
// 作业 1
// 10 分钟做不出就看提示
//

    /*
    n 是 int 类型
    width 是 int 类型

    把 n 的位数变成 width 这么长，并在右对齐，不足部分用 0 补足并返回
    具体请看测试, 注意, 返回的是 string 类型

    返回 string 类型
    */
log('Codes Beigin')
var zfill = function(n, width) {
    var str = String(n)
    var len = str.length
    var num_zero = width - len
    // 数组语法
    var zeros = []
    // 这个题告诉我这样一个语法
    // 在javascript中，字符串的可以直接进行加（连接函数）
    if(num_zero > 0) {
        for(var i = 0; i < num_zero; i++ ) {
            zeros += '0'
        }
        str = zeros + str
    }
    // log(str)
    return str
}
var test_zfill = function() {
    ensure(zfill(1, 4) === '0001', 'zfill 测试 1')
    ensure(zfill(23, 4) === '0023', 'zfill 测试 2')
    ensure(zfill(12345, 4) === '12345', 'zfill 测试 3')
    ensure(zfill(169, 5) === '00169', 'zfill 测试 4')
}
test_zfill()

// 作业 2
// 10 分钟做不出就看提示
//
// 注意, 这是一个新的知识点, 叫 默认参数
// fillchar 这个参数如果你不提供, 它的值默认就是 ' '
// 语法就是这样

    /*
    s 是 string
    width 是 int
    fillchar 是 长度为 1 的字符串, 默认为空格 ' '

    如果 s 长度小于 width, 则在末尾用 fillchar 填充并返回
    否则, 原样返回, 不做额外处理

    返回 string 类型
    */
// 又学一个新知识点默认参数
// 可以设置一个默认参数
var ljust = function(s, width, fillchar=' ') {
    var len = s.length
    var num_zero = width - len
    var strs = []
    var str = s
    if(num_zero > 0) {
        for(var i = 0; i < num_zero; i++) {
            strs += fillchar
        }
        str = s + strs
    }

    // log(str)
    return str
}
var test_ljust = function() {
    ensure(ljust('gua', 5) === 'gua  ', 'ljust 测试 1')
    ensure(ljust('guagua', 5) === 'guagua', 'ljust 测试 2')
    ensure(ljust('gua', 5, '*') === 'gua**', 'ljust 测试 3')
}
//test_ljust()
// 作业 3
// 10 分钟做不出就看提示
//

    /*
    s 是 string
    width 是 int
    fillchar 是 长度为 1 的字符串, 默认为空格 ' '

    如果 s 长度小于 width, 则在开头用 fillchar 填充并返回

    返回 string 类型
    */

// 不管怎么样先强行转变成字符。这一点其实很重要
var rjust = function(s, width, fillchar=' ') {
        var str = String(s)
        var len = str.length
        var num_zero = width - len
        var zeros = []

        if(num_zero > 0) {
            for(var i = 0; i < num_zero; i++) {
                zeros = zeros + fillchar
            }
            str = zeros + str
        }
        //
        // log(str)
        return str
}
var test_rjust = function() {
    ensure(rjust('gua', 5) === '  gua', 'rjust 测试 1')
    ensure(rjust('guagua', 5) === 'guagua', 'rjust 测试 2')
    ensure(rjust('gua', 5, '*') === '**gua', 'rjust 测试 3')
}
// test_rjust()

// 作业 4
// 10 分钟做不出就看提示
//

    /*
    s 是 string
    width 是 int
    fillchar 是 长度为 1 的字符串, 默认为空格 ' '

    如果 s 长度小于 width, 则在两边用 fillchar 填充并返回
    如果 s.length 和 width 互为奇偶, 则无法平均分配两边的 fillchar
    这种情况下, 让左边的 fillchar 数量小于右边

    返回 string 类型
    */
// 加油吧，写得很烦
var ljust = function(s, width, fillchar=' ') {
        var str = String(s)
        var len = str.length
        var num_zero = width - len
        var zeros = []

        if(num_zero > 0) {
            for(var i = 0; i < num_zero; i++) {
                zeros = zeros + fillchar
            }
            str = zeros + str
        }
        //
        // log(str)
        return str
}
// 作业 5
// 10 分钟做不出就看提示
// 注意, 看上面的资料, 介绍了一个 includes 函数
//

    /*
    s 是 string
    检查 s 中是否只包含空格

    返回 bool, 如果 s 中包含的只有空格则返回 true, 否则返回 false
    */
// 字符串数组每一个都可以用includes函数，数字数组不行
var is_space = function(s) {
    var a = String(s[0])
    var bo = a.includes(' ')

    for(var i = 1; i < s.length; i++ ) {
        if(bo) {
            bo = s[i].includes(' ')
        }
    }
    return(bo)
}


// 测试函数
var test_is_space = function() {
    ensure(is_space(' '), 'center 测试 1')
    ensure(is_space('   '), 'center 测试 2')
    ensure(!is_space(''), 'center 测试 3')
    ensure(!is_space('gua '), 'center 测试 4')
}
// test_is_space()

// 作业 6
// 10 分钟做不出就看提示
//

    /*
    s 是字符串
    检查 s 中是否只包含数字
    返回: bool, 如果 s 中包含的只有数字则返回 true, 否则返回 false
    */
var is_digit = function(s) {
    var bo = true
    var str = String(s)


    for(var i = 0; i < str.length; i++) {
        if(bo) {
            var a = str[i]
            for(var j = 0; j < 10; j++) {
                //可以直接用数字吗？？？
                bo = a.includes(j)
                if(bo) { break }
            }
        }
    }
    return bo
}
var test_is_digit = function() {
    ensure(is_digit('123'), 'is_digit 测试 1')
    ensure(is_digit('0'), 'is_digit 测试 2')
    ensure(!is_digit('  '), 'is_digit 测试 3')
    ensure(!is_digit('1.1'), 'is_digit 测试 4')
    ensure(!is_digit('gua'), 'is_digit 测试 5')
}
// test_is_digit()
// 作业 7
// 10 分钟做不出就看提示
//

    /*
    s 是 string
    返回一个「删除了字符串开始的所有空格」的字符串

    返回 string
    */
// 好吧又学一个新函数slice()
var strip_left = function(s){
    // 不知道为什么， 又不用转换成字符串数组了
    var num = s.length
    for(var i = 0; i < s.length; i++) {
        if(s[i] != ' ') {
            num = i
            break
        }
    }

    var str = s.slice(num)
    return str
}
var test_strip_left = function() {
    ensure(strip_left('  gua') === 'gua', 'strip_left 测试 1')
    ensure(strip_left(' gua  ') === 'gua  ', 'strip_left 测试 2')
    ensure(strip_left('') === '', 'strip_left 测试 3')
    ensure(strip_left('    ') === '', 'strip_left 测试 4')
    log("Make it")
}
// test_strip_left()

// 作业 8
// 10 分钟做不出就看提示
//

    /*
    s 是 string
    返回一个「删除了字符串末尾的所有空格」的字符串

    返回 string
    */
// 好吧，slice的更多用法
var strip_right = function(s) {
    var num = s.length - 1
    //界限是-1.
    for(var i = (s.length)-1; i > -1; i--) {
        if( s[i] != ' ' ) {
            break
        }
    }
    num = i+1
    // 应该指的是有多少个，而不是下标
    var str = s.slice(0, num)
    return str
}
var test_strip_right = function() {
    ensure(strip_right('  gua') === '  gua', 'strip_right 测试 1')
    ensure(strip_right(' gua  ') === ' gua', 'strip_right 测试 2')
    ensure(strip_right('') === '', 'strip_right 测试 3')
    ensure(strip_right('    ') === '', 'strip_right 测试 4')
    log("succeed")
}
// test_strip_right()

var replace = function(s, old, newstr) {
    var lenOld = old.length
    var lenS = s.length
    var lenNewstr = newstr.length
    var str = ''
    var num = 0
    var iniNum = 0

    for(var i = 0; i < lenS; i++) {
        if( s[i] === old[0] ) {
            for(var j = 0; j < lenOld; j++ ) {
                if(s[i+j] != old[j] ) { break }
            }
            if( j === lenOld ) {
                str = str + s.slice(iniNum, num) + newstr
                // num 是结尾的的哪一个
                num = i + lenOld - 1
                // iniNum 是开始的位置
                iniNum = i + lenOld
                // i值也要变化
                i = i + lenOld - 1
            }
        }
        num++
    }
    str = str + s.slice(iniNum, num)
    log(str)
    return str
}
// 测试函数
var test_replace = function() {
    ensure(replace('hello, world', 'world', 'gua') === 'hello, gua', 'replace 测试 1')
    ensure(replace('hello', 'world', 'gua') === 'hello', 'replace 测试 2')
    ensure(replace('hello', 'll', 'gua') === 'heguao', 'replace 测试 3')
    ensure(replace('iiiiiiiiiiiiii', 'i', 'o') === 'oooooooooooooo', 'replace 测试 4')

    log('Make it')
}
test_replace()
