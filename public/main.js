console.log('我是main.js 1')
getJSON.onclick = ()=> {
    const request = new XMLHttpRequest()
    request.open("get","/5.json")
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status >= 200 && request.status < 300) {
            console.log(typeof request.response)//得到字符串
            console.log(request.response)
            // 把符合JSON语法的字符串转换成JS对应类型的数据
            const bool = JSON.parse(request.response)
            console.log(typeof bool)
            console.log(bool)
        }
    }
    request.send()
}
let object 
try {
    object = JSON.parse(`{'name':'frank}`)
} catch (error) {
    console.log('出错了，错误详情是')
    console.log(error) 
    object = {'name': 'no name'}
}
console.log(object)
getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {}
    request.send()
}
getJs.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {}
    request.send()
}
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    // request.onload = () => {
    request.onreadystatechange = () => {
        console.log('request.response', request.response)
        //下载完成，但不知道是成功 2xx 还是 失败 4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // 创建style标签
                const style = document.createElement('style')
                // 填写style内容
                style.innerHTML = request.response
                // 插到头里面
                document.head.appendChild(style)
            } else {
                alert('加载CSS失败')
            }
        }
    }
    // request.onerror = () => {
    //     console.log('失败了')
    // }
    request.send()
}