const debounce=(fun)=>{
  return ()=>{
      setTimeout(()=>fun(),1000)
  }
}
const expensiveFun=()=>{
    console.log("calling")
}
const call1=debounce(expensiveFun);
call1()