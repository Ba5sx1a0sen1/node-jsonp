myButton.addEventListener('click',(e)=>{
    let script = document.createElement('script')
    let functionName = 'SenSen' + parseInt(Math.random()*100000,10)
    window[functionName]=function(result){
        window.alert(result)        
    }
    script.src = 'http://localhost:8002/pay?callback='+functionName
    document.body.appendChild(script)
    script.onload = function(e){
        e.currentTarget.remove()
    }
    script.onerror = function(e){
        alert('fail')
        e.currentTarget.remove()
    }
})

getData.addEventListener('click',(e)=>{
    let request = new XMLHttpRequest //必记
    request.onreadystatechange=()=>{ //必记API
        if(request.readyState===4){
            if(request.status >= 200 && request.status < 300){
                setDom(JSON.parse(request.responseText))
            }else if(request.status >= 400){
                console.log('请求失败')
            }
        }
    }
    request.open('GET','http://localhost:9999/getdata') //必记的方法
    request.send() //必记
})

function setDom(data){//获取到数据后进行的dom操作
    let domStr = `我叫${data.name}，今年${data.age}岁，目前在${data.college}读计算机科学与技术`
    textBox.textContent = domStr
}
