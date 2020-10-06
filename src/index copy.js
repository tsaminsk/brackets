// module.exports = function check(str, bracketsConfig) {
//     if (!Array.isArray(bracketsConfig) && bracketsConfig.length == 0) return false

//     // const openBrackets = []
//     // const closeBrackets = []

//     // bracketsConfig.forEach(el => {
//     //     openBrackets.push(el[0])
//     //     closeBrackets.push(el[1])
//     // })

//     // let arr = str.split('')

//     // let end = null
//     // let ind = 0
//     // let result = true

//     // while (ind < arr.length ) {
//     //     // console.log('start', ind, str);
//     //     bracketsConfig.forEach(el => {
//     //         if (el[0] == arr[ind] && el[0] == arr[ind + 1]) {
//     //             ind++
//     //         } else {
//     //             end = ind + 1
//     //             for (let j = ind + 1; j < arr.length; j++) {
//     //                 if (arr[j] == el[1]) {
//     //                     end = j
//     //                     break
//     //                 }
//     //             }

//     //             let inner = arr.splice(ind + 1, end - ind - 1)

//     //             if (inner.length >= 3 && !check(inner.join(''), bracketsConfig)) {
//     //                 result = true
//     //                 ind == arr.length
//     //             } else {
//     //                 arr.splice(ind, 2)
//     //             }
//     //         }
//     //     })
//     //     // console.log('end');
//     // }

//     // if (arr.length == 0) return true
//     // else {
//     //     return result ? arr.filter(el => [...bracketsConfig].some(e => e == el)).length == 0 : false
//     // }

//     const miniFunc = (array, a, b) => {
//         const sop = a != b ? array.lastIndexOf(a) : array.lastIndexOf(a, array.lastIndexOf(a) - 1)
//         const stp = array.indexOf(b, sop + 1)
//         if (sop !== -1 && stp !== -1) {
//             let tmp = array.splice(sop + 1, stp - sop - 1)
//             if (tmp.length >= 2) {
//                 let inner = check(tmp.join(''), bracketsConfig)
//                 console.log('inner', inner);
//             }
//             console.log('tmp', tmp);
//             array.splice(sop, 2)
//             return 'repeat'
//         } else if (sop == -1 && stp == -1) return 'true'
//         else return 'false'
//     }

//     let result = true
//     let arr = str.split('')
//     bracketsConfig.forEach(el => {
//         let res = 'repeat'
//         while (res == 'repeat') {
//             res = miniFunc(arr, el[0], el[1])
//         }
//         result = result ? res == 'true' : false
//     });
//     return result
// }


module.exports = function check(str, bracketsConfig) {
    let newBr = bracketsConfig.join(" ").replace(/,/g, "").split(" ");
    let count = newBr.length;
    console.log('newbr', newBr);
    for (let h = 0; h <= count; h++) {
        newBr.forEach((item) => {
            while (str.includes(item)) {
                for (let i = 0; i < newBr.length; i++) {
                    while (str.includes(newBr[i])) {
                        str = str.replace(newBr[i], "");
                        console.log(str);
                    }
                }
            }
        })
    }
    if (str === "") {
        return true;
    } else {
        return false;
    }
}
