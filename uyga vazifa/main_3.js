const  create =(e)=>{
    e.preventDefault();
    let text = e.target[0].value
    let arr = text.split("")
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != " ") {
            result.push(arr[i])
        }
    }
    console.log(result.length);
}