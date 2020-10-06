module.exports = function check(str, bracketsConfig) {

    if (!Array.isArray(bracketsConfig) && bracketsConfig.length == 0) return false

    let count = 0
    while (count !== str.length) {
        count = str.length
        bracketsConfig.forEach(el => {
            const para = el.join('')
            str.includes(para) ?  str = str.replace(para, '') : null
        })
    }
    return str.length == 0
}
