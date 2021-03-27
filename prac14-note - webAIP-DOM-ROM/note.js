//webAPIs is standard of w3C
//webAPIs: DOM ROM
//mostly include page interaction functions
//web APi 是浏览器提供的一套操作浏览器功能和页面元素的API（BOMandDOM）

// 1.什么是DOM
// 2.如何获取页面元素（4 type）
    //2.2.1用for循环遍历html中li中的元素
    //如何获取body但html等特殊元素
// 3.元素注册事件
    //3.1 事件三要素
// 4.操作DOM元素的属性
    //4.1 click to change the content of a div(show a date)
// 5.创建dom
// 6.操作dom节点

// 1.什么是DOM
    // document Object Model, W3C recommanded,编程接口 that deal with HTML
    // one page is one "document" in DOM
    // all html tags are "element"
    // all content in pages are node(tages, sttrbutes, text, reference  )
    // DOM treat document, element and node as object

// 2.如何获取页面元素
    //thro ID name,tags, HTML5 new method, special element
    
    //2.1 getElementById() will return a element object
    var timer = document.getElementById('time');
    console.log(timer);
    console.log(typeof timer);
    console.dir(timer);//better get attro amd and method
    
    //2.2 get element by tag name
    var lis = document.getElementByTagName('li');
    console.log(lis);//return fake array
    console.log(lis[0]);
    
        //2.2.1 用for循环遍历li中的元素
        for(let i = 0; i< lis.length; i++){
            console.log(lis[i]);
        }
            //if html does not contain li
            return HTMLCollection[]

        //2.2.2 element.getElementsByTagName("tag name")
        //父元素（element）必须是单个元素
        var ol = document.getElementById('ol');//tag ol has ol id
        console.log(ol.getElementByTagName('li'));
    
    //2.3 HTML5 new method: class and query selector
    var boxes = document.getElementsByClassName('box');//with box calss name
    // querySelector 返回指定选择器的第一个元素对象
    var firstBox = document.querySelector('.box');//select class
    var nav = document.querySelector('#nav');//select id
    var li = document.querySelector('id')
    //querySelectorAll 返回选择其中的所有元素对象伪集合
    var allBox = document.querySelectorAll('.box');
    //获取html，body等特殊元素
    document.body;
    document.html;

// 3.事件基础
    //事件就是触发-响应的机制
    //点击一个按钮，弹出对话框
    //事件三部分：事件源：按钮，事件类型click，事件处理程序:弹出对话框。（事件三要素）
    //1.获得事件源
    var btn = document.getElementById('btn')//button with btn id.
    //2. 事件类型：（onclick）
    //3. 事件处理程序 通过函数赋值 
    btn.onclick = function() {
        alert('点秋香')；
    }

    // 3.1 执行事件步骤
    // 点击div 控制台输出 我被选中了
    // 1) 获取事件源
    var div = document.querySelector('div');//return first div tag
    // 2) 绑定/注册 事件
    // 3）添加事件处理程序（函数赋值）
    dic.onclick = function() {
        console.log('I was chosen.');
    }

//4.操作内容
    // DOM 操作元素改变元素里面的内容和属性
    // 改变元素内容：

    // 4.1 element.innerText
    var btn = document.querySelectorAll('button');
    var div = document.querySelectorAll('div');

    btn.onclick = function() {
        div.innerText = '2019-01-09';
    }

        //get date function
        //读写时去除html tag and space
        function getDate() {
            var date = newDate();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var dates = date.getDate();
            var arr = ['Mon', 'Tue', 'Wend'];
            var day = date.getDay();
            return 'today:' + year + 'year' + month + 'month' + dates + 'date' arr[day];  
        }

        //元素可以不用添加事件
        var p = document.querySelector('p');
        p.innerText = getDate();

    //4.2 element.innerHTML. 
    //W3C recommand
    //innerText does not tell the tag name, but inner HTML does 
    var div = document.querySelector('div');
    div.intterText = '<strong>今天是： </strong> 2019'
    //这两个元素是可读写的，可以获取元素里面的内容
    //keep the html tags and space and lines
    var p = documen.querySelec('p');
    console.log(p.innerHTML);

    //4.3 常见元素的属性操作
    //点击张学友时候，展示他的照片，点击刘德华的时候，展示刘德华的照片
    //获取元素：ldh zxy img
    var ldh = document.getElementById('ldh');
    var zxy = document.getElementById('zxy');
    var img = document.querySelector('img');

    //注册事件
    zxy.onclick = function() {
        img.src = 'images/zxy.jpg';
    }
    ldh.onclick = function() {
        img.src = 'image/ldh.jpg';
    }

    //4.4 根据不同事件显示不同图片和问候语
    //html
    {/* <img src=""images/.gif" alt="">
    <div>上午好</div> */}
    var img = document.querySelector('img');
    var div = document.querySelector('div');
    //get current hours
    var date = new Date();
    var h = date.getHours();
    //change img and div based on the h
    if (h < 12) {
        img.src = 'images.gif';
        div.innerHtml = '上午好'；
    } else if ( h < 18 ) {
        img.src = '#';
        div.innerHTML = 'good noon';
    } else {
        img.src = '#';
        div.innerHTML = 'good evening';
    }

    //4.5 form changing value
    var btn = document.querySelector('button');
    var input = document.querySelector('input');
    btn.noclikc = function() {
        //from的值是通过value来改变的
        input.value= 'i was being cliked'
        //按钮被禁用
        btn.disabled = true; 
        this.disabeld - true;
    }

    //4.6 Example: 登录菜单页：点击按钮显示密码
    //算法：利用flag变量：1为文本框，0为密码框
    html;{/* 
    <div class="box">
        <label for="">
            <img src="close.png" alt="" id="eye">
        </label>        
        <input type="password" id="pwd">
    </div> */}
    var eye = document.getElementById('eye');
    var pwd = document.getElementById('pwd');
    var flag = 0;
    eye.onclick = function(){
        if(flag === 0) {
            pwd.type = 'text';
            eye.src = 'open.jpg'
            flag = 1;
        } else {
            pwd.type = 'pasword'
            eye.src = 'close.jpg'
            flag = 0;
        }
    }

    //4.7 样式属性操作： js修改元素大小，颜色，位置
        //js is inline sytle, css is higher than js changing
        //4.7.1 element.style更改样式: for few styles
        var div = document.querySelector('div');
        div.onclick = function() {
            //属性命名采用驼峰命名法
            this.style.backgroundColor = 'purple';
            this.style.width = '250px'; 
        }

            //4.7.1.1 淘宝点击关闭二维码
            var btn= document.querySelector('.close.btn');
            var box = document.querySelector('.box');
            btn.onclick = function() {
                box.style.display = 'none';
            }

            //4.7.1.2循环精灵图背景位置
            // 所有li放入同一个arr
            var lis = document.querySelectorAll('li');
            for (car i = 0; i < this.length; i++) {
                lis[i].style.backgroundColor = `0 -${i*44}px`;
            }

            //4.7.1.3显示隐藏文本框的内容: 获得焦点：onfocus onblur
            var input = document.querySelector('input');
            input.onfocus = function() {
                this.placeholder = 'off';
                //font color go deeper
                this.style.color = "#333"
            }
            input.onblur = function() {
                this.placeholder = 'on';
            }
        //4.7.2 element.classNmae更改style: for many styles
            //add a class name and finish all styles in css, then mention that class name in js
            CSS;{
                // .change{
                //     color: #333;
                //     width: 200px;
                //     height: 200px;
                //     backgroundcolor: #fff;
                // }
            }
            var test = document.querySelector('div');
            test.onclick = function()   {
                this.className = 'change';
            }
        //4.7.3 Example：密码框格时提示错误信息
            //输入正确为绿色小图标
            // 输入错误为红色小图标
            // HTML；{
            //     <div class="register">
            //     <input type="password" class="ipt">
            //     <p class="message">请输入6-16位密码</p>
            // </div>
            // }

            // // CSS; {
            //     .message {
            //         display: inline-block;
            //         color: #999;
            //         font-size: 12px;
            //         background: url(images/mess.png) no-repeat left center;
            //         padding-left: 20px;
            //     }
            //     .wrong {
            //         color: red;
            //         background-image: url(wrong.png);
            //     }
            //     .right {
            //         color: green;
            //         background:url(right.png);
            //     }
            // };
            var ipt = document.querySelector('.ipt');
            var message = document.querySelector('.message')   ;
            ipt.onblur = function() {
               if(this.value.length < 6 || this.value.length > 16) {
                   console.log('密码格式错误');
                   //!!!!!!必须保留原有样式的class style基础上添加新的class style!!!”
                   message.className = 'message wrong';
                   message.innerHTML = '您输入的位数不对，要求6-16位'
               } else {
                   message.className = 'message right';
                   message.innerHTML = '密码验证通过'
               }
            }
    // 4.8 排他思想：给所有元素都添加js
    var btns = document.getElementsByTagName('button');
    for(var i = 0; i < btns.length;i++){
        btns[i].onclinck = functnion() {
            for(var i = 0; i<btns.length;i++) {
                btns[i].style.backgroundColor = 'none'; 
            }
            this.style.backgroundColor = 'pink';
        }
    }

    //Example: 百度换肤：change background imag when click dif images 
    


        




    






// 元素注册事件

// 操作DOM元素的属性

// 创建dom

// 操作dom节点


