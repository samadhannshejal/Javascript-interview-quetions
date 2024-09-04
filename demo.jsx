//! Closures

const parentFun=()=>{
    let outerVariable="I am outside"
    const innerFun=()=>{
        console.log(outerVariable)
    }
    return innerFun
}
const child=parentFun();
child()