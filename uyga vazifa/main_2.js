const  create =(e)=>{
    e.preventDefault();
    let result = document.getElementById("result")
    let width = e.target[0].value
    let height = e.target[1].value
    let bg_color = e.target[2].value
    let border_r = e.target[3].value
    let title = e.target[4].value
    console.log(width,height,bg_color,border_r);
    result.style.width = `${width}px`
    result.style.height = `${height}px`
    result.style.backgroundColor = bg_color
    result.style.borderRadius = `${border_r}px`
}