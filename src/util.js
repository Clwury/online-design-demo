/**
 * 函数节流 返回函数连续调用时，fn 执行频率限定为每多少时间执行一次
 * @param fn         {function}  需要调用的函数
 * @param delay      {number}    延迟时间，单位毫秒
 * @param immediate  {bool}      给 immediate 参数传递 false，绑定的函数先执行，而不是delay后后执行
 * @return           {function}  实际调用函数
 */
let throttle = function (fn, delay, immediate = false, debounce = false) {
    let curr = +new Date()
    let last_call = 0
    let last_exec = 0
    let timer = null
    let diff
    let context
    let args
    const exec = function () {
        last_exec = curr
        fn.apply(context, args)
    }

    return function () {
        curr = +new Date()
        context = this
        args = arguments
        diff = curr - (debounce ? last_call : last_exec) - delay

        clearTimeout(timer)

        if (debounce) {
            if (immediate) {
                timer = setTimeout(exec, delay)
            } else if (diff >= 0) {
                exec()
            }
        } else {
            if (diff >= 0) {
                exec()
            } else if (immediate) {
                timer = setTimeout(exec, -diff)
            }
        }

        last_call = curr
    }
}

/**
 * 函数去抖 返回函数连续调用时，空闲时间必须大于或等于 delay，fn 才会执行
 * @param fn         {function}  需要调用的函数
 * @param delay      {number}    空闲时间，单位毫秒
 * @param immediate  {bool}      给 immediate 参数传递 false，绑定的函数先执行，而不是delay后后执行
 * @return           {function}  实际调用函数
 */
const debounce = function (fn, delay, immediate = false) {
    return throttle(fn, delay, immediate, true)
}

export default {
    throttle,
    debounce
}