function string2buffer(str) {
    // 首先将字符串转为16进制
    if(str.length%2!==0){
        str+=""
    }
    let val = ""
    for (let i = 0; i < str.length; i++) {
        if (val === '') {
            val = str.charCodeAt(i).toString(16)
        } else {
            val += ',' + str.charCodeAt(i).toString(16)
        }
    }
    console.log('val',val)
    // 将16进制转化为ArrayBuffer
    return new Uint16Array(val.match(/[\da-f]{2}/gi).map(function (h) {
        return parseInt(h, 16)
    })).buffer
}
let str2buf=string2buffer('amwares.com');
console.log(str2buf)
const ui16 = new Uint16Array(str2buf);
console.log(ui16)

const array = new Uint16Array(65);
for(let i=0;i<array.length;i++){
    if(ui16[i]){
        array[i]=ui16[i]
    }else{
        array[i]=0
    }
}
console.log(array)