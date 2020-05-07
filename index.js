/**获取dom元素 */
let pattern = document.querySelector("#pattern")
let content_div = document.getElementById("content_div")
let canvas_div = document.getElementById("canvas_div")

/**文本样式 */
let content_data = `
/**
*  会动的代码测试文本
*/
#content_div{
    border:1px solid red;
    display: inline-block;
    height:100vh;
    overflow: auto;
}
#canvas_div{
    border:1px solid #000;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(2,0,36,1) 50%);
    display: inline-block;
    position: fixed;
    right: 30%;
    top: 10px;
}
/**
 * 内圆
 * 
*/
#canvas_div::after{
    content:"";
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position:absolute;
    left: 50%;
    top:0px;
    transform: translate(-50%);
    background:radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(2,0,36,1) 25%);
}
#canvas_div::before{
    content:"";
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position:absolute;
    left: 50%;
    bottom:0px;
    transform: translate(-50%);
    background: radial-gradient(circle, rgba(2,0,36,1) 25%, rgba(255,255,255,1) 25%);
}

`
/**代码片段 */
let render_html = "";
let render_style = ""
/**计数器 */
let count = 0
/**执行方法 */
function render(){
    setTimeout(()=>{
        if(count<content_data.length-1){
            if(content_data[count] ===  "\n"){
                render_html += '<br>'
            }else if(content_data[count] === " "){
                render_html += '&nbsp;'
            }else{
                render_html += content_data[count]
            }
            /**添加到html中 */
            content_div.innerHTML = render_html;
            content_div.scrollTo(0,9999999)
            /**添加到style中 */
            pattern.innerHTML += content_data[count];
            count++;
            render()
        }else{
            return false
        }
    },10)
}
render()
