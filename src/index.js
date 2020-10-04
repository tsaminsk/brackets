module.exports = function check(str, bracketsConfig) {
    if (!Array.isArray(bracketsConfig) && bracketsConfig.length == 0) return false

    const miniFunc = (array, a, b) => {
        const sop = a != b ? array.lastIndexOf(a) : array.indexOf(a)
        const stp = array.indexOf(b, sop + 1)
        if (sop !== -1 && stp !== -1) {
            array.splice(sop, stp - sop + 1)
            return 'repeat'
        } else if (sop == -1 && stp == -1) return 'true'
        else return 'false'
    }

    const arr = str.split('')
    let result = true
    bracketsConfig.forEach(el => {
        let res = 'repeat'
        while (res == 'repeat') {
            res = miniFunc(arr, el[0], el[1])
        }
        result = result ? res == 'true' : false
    });
    return result
}



































// module.exports = function check(str, bracketsConfig) {
//     if (!Array.isArray(bracketsConfig) && bracketsConfig.length == 0) return false

//     const removeInnerStr = (simbol_start, simbol_end, base_str) => {
//         // let regExp = '/' + simbol_start + '([^' + simbol_end + ']*' + simbol_end + '\)/';
//         let regExp = new RegExp(`/\(${simbol_start}[^${simbol_start}${simbol_end}]*${simbol_end}\)/g`);
//         // console.log(regExp);
//         let new_str = base_str
//         // base_str.replace(regExp, '')
//         console.log(new_str, base_str.replace(regExp, ''))
//         while (new_str !== base_str) {
//             console.log('while');
//             base_str = new_str
//             new_str.replace(regExp, '')
//         }
//         return new_str
//     }

//     bracketsConfig.forEach((el, i) => {
//         console.log('forEach', i, removeInnerStr(el[0], el[1], str), str);

//     });
//     return 'zzz'
// }
