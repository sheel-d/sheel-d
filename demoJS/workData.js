
import marked from 'marked';

marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false
});

marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});


var workData = [
	{
		content : 'html&css',
		title :'htmlCss' 
	},{
		content : 'javascript',
		title :'js' 
	},{
		content : 'html5&css3',
		title :'H5C3' 
	},{
		content : 'React',
		title :'react' 
	},{
		content : 'ES2015',
		title :'es6' 
	},{
		content : 'NodeJS',
		title :'node' 
	}
];
	
var workTitleData = {//每一类别有几个标题的数据
	htmlCss : [
		{
			title : 'CSS引入的方式有哪些? link和@import的区别是?',
			id : 'htmlCss1',
			num : '1'
		},
		{
			title : '清除浮动的几种方式，各自的优缺点',
			id : 'htmlCss2', 
			num : '2'
		},
		{
			title : 'css图标与图片图标的区别',
			id : 'htmlCss3', 
			num : '3'
		},
		{
			title : 'display:none;与overflow:hidden的区别',
			id : 'htmlCss4', 
			num : '4'
		},
		{
			title : 'Css盒模型',
			id: 'htmlCss5', 
			num : '5'
		}
	],
	js : [
		{
			title : '闭包',
			id : 'js1',
			num : '1'
		},
		{
			title : 'oop编程',
			id : 'js2', 
			num : '2'
		},
		{
			title : 'ajax',
			id : 'js3', 
			num : '3'
		},
		{
			title : 'jsonp',
			id : 'js4', 
			num : '4'
		},
		{
			title : 'js事件流',
			id: 'js5', 
			num : '5'
		},
		{
			title : 'BFC',
			id : 'js6',
			num : '6'
		},
		{
			title : '函数柯里化',
			id : 'js7', 
			num : '7'
		},
		{
			title : '函数节流',
			id : 'js8', 
			num : '8'
		},
		{
			title : 'js动画',
			id : 'js9', 
			num : '9'
		},
		{
			title : '跨域及跨域问题解决',
			id: 'js10', 
			num : '10'
		},
		{
			title : '设计模式-工厂模式',
			id: 'js11', 
			num : '11'
		},
		{
			title : '设计模式-构造函数模式',
			id: 'js12', 
			num : '12'
		},
		{
			title : '设计模式-原型模式',
			id: 'js13', 
			num : '13'
		},
		{
			title : '设计模式-混合模式',
			id: 'js14', 
			num : '14'
		}
	],
	H5C3 : [
		{
			title : 'localStorage和sessionStorage的区别和联系',
			id : 'H5C3_1',
			num : '1'
		},
		{
			title : 'web storage和cookie的区别',
			id : 'H5C3_2', 
			num : '2'
		},
		{
			title : 'css3新增的属性',
			id : 'H5C3_3', 
			num : '3'
		},
		{
			title : 'Css3实现动画的方式有哪些',
			id : 'H5C3_4', 
			num : '4'
		},
		{
			title : '弹性盒模型--display:flex;',
			id: 'H5C3_5', 
			num : '5'
		}
	],
	react : [
		{
			title : 'React-初学',
			id : 'react1',
			num : '1'
		}
	],
	es6 : [
		{
			title : 'ES6-初学',
			id : 'ES2015_1',
			num : '1'
		}
	],
	node : [
		{
			title : 'node-初学',
			id : 'node1',
			num : '1'
		}
	]
};
var workContentData = {
	htmlCss1 : marked([ 
				'### CSS引入的方式有哪些--link和@import的区别\n\n',
				'将css引入到页面的方式主要有4种：\n\n',
				'#### 第一、将css样式写在`style`标签里面\n\n',
				'`style`标签可以位于页面`html`标签中的任何位置，也可以多次出现。\
				通常是将整个`<style></style>`结构写在页面的`<head></head>`部分中。\n\n',
				'#### 第二种、将css样式写在标签的style属性里面\n\n',
				'将style属性直接加在单个的html元素标签上，控制HTML标签的表现样式。\
				使用STYLE属性的样式效果最强，会覆盖掉其它几种引入方式的相同样式效果。\n\n',
				'#### 第三种、使用`<link>`标签引入外部的css文件\n\n',
				'将css代码写在一个单独的文件中，用`<link>`标签直接引入该文件到页面中。\
				一个页面可以多次使用`<link>`标签引入多个外部css文件，这些CSS代码的相互影响，\
				通常是后引入的CSS文件会覆盖前面引入的CSS文件的相同效果。\n\n',
				'#### 第四种、使用@import引入css文件\n\n',
				'使用@import引入CSS文件有两种方式:一种可以放在页面中的`<style></style>` 中,用法如下：\
				@import url(index.css);另一种是放在CSS文件中使用，用法：@import "index.css";\n\n',
				'link和@import的区别主要有以下几点：\n\n',
				'1：link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。\n\n',
				'2：link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。\n\n',
				'3：link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。\n\n',
				'4：link支持使用Javascript控制DOM去改变样式；而@import不支持。'
			].join('')),
	htmlCss2 : marked([
			'### 清除浮动的几种方式，各自的优缺点\n\n',
			'1．父级div定义 height。\n\n',
			'原理：父级div手动定义height，就解决了父级div无法自动获取到高度的问题。\n\n',
			'优点：简单，代码少，容易掌握。\n\n',
			'缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级div不一样时，会产生问题。\n\n',
			'2．使用空标签清除浮动。\n\n',
			'这种方法是在所有浮动标签后面添加一个空标签 定义css clear:both. 弊端就是增加了无意义标签。\n\n',
			'3．使用overflow。\n\n' ,
			'给包含浮动元素的父标签添加css属性overflow:auto; zoom:1; zoom:1用于兼容IE6。\n\n',
			'4．父级div定义 overflow:hidden。\n\n',
			'原理：必须定义width或zoom:1，同时不能定义height，使用overflow:hidden时，浏览器会自动检查浮动区域的高度。\n\n',
			'优点：简单，代码少，浏览器支持好。\n\n',
			'缺点：不能和position配合使用，因为超出的尺寸的会被隐藏。\n\n',
			'5．使用after伪对象清除浮动。\n\n' ,
			'```\n	.wrapfix:after {\n		content: "";\n		display: block;\n		height: 0;\n		clear: both;\n		visibility: hidden;\n	}```\n\n',
			'6．父级div 也一起浮动。'
		].join('')),
	htmlCss3 : marked([
			'### 在网页中使用css图标与在网页中使用图片图标\n\n',
			''
		].join('')),
	htmlCss4 : marked([
			'### display:none;与overflow:hidden的区别.\n\n',
			' `display:none`隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，就当他从来不存在。\n\n',
			'`visibility:hidden`隐藏对应的元素，但是在文档布局中仍保留原来的空间。'
		].join('')),
	htmlCss5 : marked([
			'### Css盒模型.\n\n',
			'	标准盒模型：\n\n',
			'		内容(content)、填充(padding)、边界(margin)、 边框(border)\n\n',
			'	 怪异盒模型:\n\n',
			'		是指content部分包含了 border 和 padding; 总的宽是：content + margin\n\n'
		].join('')),
	js1 : marked([
			'### 闭包.\n\n',
			'闭包是指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式。就是在一个函数内部创建另一个函数。\n\n',
			'例：在一个ul列表中，点击每一个li得到该li的索引值；\n\n',
			'```\nHTML代码\n	<ul>\n		<li></li>\n		<li></li>\n		<li></li>\n	</ul>\n',
			'JS代码1:\n	var aLi = document.getElementsByTagName("li");\n',
			'	for(var i=0;i<aLi.length;i++){\n		aLi.onclick = function(){ \n			console.log(i);',
			'		};\n	}//点击每个li得到的都是3，没有得到每个里的索引值。\n',
			'JS代码2:\n	for(var i=0;i<aLi.length;i++){\n		(function(i){\n',
			'			aLi.onclick = function(){\n				console.log(i);\n			}',
			'		})(i)\n	}```\n\n',
			'不过在学了ES6以后，只需要把上面的JS代码1中`for`循环里面的`var`改成`let`就可以了，\
			这样不使用闭包也能得到相应的结果，也避免了闭包带来的内存泄漏问题。\
			\
			'
		].join('')),
	js2 : marked([
			'### oop编程.\n\n',
			'面向对象是指用对象的思想去写代码，就是面向对象编程。\n\n',
			'#### 面向对象编程（OOP）的特点：\n\n',
		    '1、抽象：抓住核心问题；\n\n',
		    '2、封装：只能通过对象来访问方法；\n\n',
		    '3、继承：从已有对象上继承出新的对象；\n\n',
		    '4、多态：多对象的不同形态。\n\n',
		    '#### 对象的组成：\n\n',
  			' 1、方法（行为、操作）-- 函数： 过程是动态的；\n\n',
  			' 2、属性 -- 变量：状态是静态的。\n\n'
		].join('')),
	js3 : marked([
			'### ajax.\n\n',
			'AJAX是指异步JavaScript和XML；用JavaScript异步形式去操作xml。AJAX的作用是数据交互，是一个数据交互的过程。',
			'AJAX的步骤：创建XMLHttpRequest对象 -> 使用XMLHttpRequest对象打开一个连接 -> \
			设置请求的头部 -> 发送请求 -> 设置回调函数接收服务器返回的内容\n\n',
			'```\n	function ajax(method, url, data, callback){\n		var xhr = null;\n		try {',
			'xhr = new XMLHttpRequest();} catch (e) {xhr = new ActiveXObject("Microsoft.XMLHTTP");',
			'}\n		if (method == "get" && data) {url += "?" + data;}\n',
			'		xhr.open(method,url,true);\n		if (method == "get") {xhr.send();',
			'} else {xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");',
     		'xhr.send(data);}\n		xhr.onreadystatechange = function() {\n',
     		'			if ( xhr.readyState == 4 ) {\n				if ( xhr.status == 200 ) {',
        	'callback && callback(xhr.responseText);} else {',
        	'alert("出错了,Err：" + xhr.status);}\n			}\n		}\n	}```\n\n',
        	'responseText : ajax请求返回的内容就被存放到这个属性下面.\n\n',
        	'nreadystatechange：当readyState改变的时候触发.\n\n',
        	'readyState : ajax的工作状态（0（初始化）,1（载入）,2（载入完成）,3（解析）,4（完成））.'
		].join('')),
	js4 : marked([
			'### jsonp.\n\n',
			'JSONP是JSON的一种使用模式，可以让网页从别的域名(网站)获取资料，即跨域读取数据。\
			JSONP由两部分组成：回调函数和数据，回调函数是当响应到来时应该在页面中调用的函数.\
			回调函数的名字一般是在请求中指定的。而数据的就是传入回调函数中的JSON数据。\n\n',
			'JSONP是通过动态创建`<script>`元素来使用的，使用时可以为`src``属性指定一个跨域URL。\n\n',
			'这是一个JSONP的请求的例子：`http://freegeoip.net/json/?callback=fn`,这个`URL`里面指定的回调函数的名字fn().\n\n',
			'#### JSONP的优点：\n\n',
			'能够直接访问响应文本，支持在浏览器与服务器之间双向通信。\n\n',
			'#### JSONP的不足：\n\n',
			'第一、JSONP是从其他域中加载代码执行，如果其他域不安全，很可能会在响应中夹带一些恶意代码，而此时除了完全放弃\
			JSONP调用之外，没有办法追究；\n\n',
			'第二、要确定JSONP请求是否失败并不容易，在HTML5中新增了一个onerror事件处理程序，这个事件是在错误发生时触发的事件，\
			不过现在好像这个事件存在很大的兼容性问题。\n\n'
		].join('')),
	js5 : marked([
			'### js事件流.\n\n',
			'事件流描述的是从页面中接收的顺序，也就是说当一个事件产生时，这个事件的传播过程，就是事件流。\n\n',
			'事件流大概分为两个方向：第一个是事件冒泡流，这个是IE提出来的；第二个是事件捕获流，这个是Netscape开发团队提出来；\
			这两个事件流是差不多完全相反的事件流概念。\n\n',
			'#### IE:事件冒泡流\n\n',
			'事件冒泡指事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的节点。\n\n',
			'```\n<html>\n	<head></head>\n	<body>\n	<div></div>\n	</body>\n</html>```\n\n',
			'像这段`HTML`代码，当点击`div`标签时，`click`事件的传播顺序是:div->body->html->document.\n\n',
			'#### Netscape:事件铺货流\n\n',
			'事件捕获的思想是不太具体的节点应该更早的接收到事件，而最具体的节点应该最后接收到事件。以上面的`HTML`代码\
			为例，当点击`div`时,`click`事件的传播顺序是：document->html->body->div.\n\n',
			'#### DOM事件流\n\n',
			'DOM2级中规定了事件流要包括三个阶段：事件捕获阶段、处于目标阶段、事件冒泡阶段。\
			以上面的`HTML`代码为例，当点击`div`时,`click`事件的传播顺序是：document->html->body->div->body->html->document。'
		].join('')),
	js6 : marked([
			'### BFC.\n\n',
			'BFC：块级格式化上下文，它是指一个独立的块级渲染区域，只有Block-level BOX参与，\
			该区域拥有一套渲染规则来约束块级盒子的布局，且与区域外部无关。\n\n',
			'#### BFC的生成\n\n',
			'CSS2.1中规定满足下列CSS声明之一的元素便会生成BFC:\
			根元素;float的值不为none;overflow的值不为visible;display的值为inline-block、table-cell、table-caption;\
			position的值为absolute或fixed。\n\n',
			'#### BFC的约束规则\n\n',
			'生成BFC元素的子元素会一个接一个的放置。垂直方向上他们的起点是一个包含块的顶部，\
			两个相邻子元素之间的垂直距离取决于元素的margin特性。在BFC中相邻的块级元素外边距会折叠。\n\n',
			'生成BFC元素的子元素中，每一个子元素做外边距与包含块的左边界相接触，\
			（对于从右到左的格式化，右外边距接触右边界），即使浮动元素也是如此\
			（尽管子元素的内容区域会由于浮动而压缩），除非这个子元素也创建了一个新的BFC（如它自身也是一个浮动元素）。\n\n',
			'#### BFC特性\n\n',
			'内部的Box会在垂直方向，从顶部开始一个接一个地放置;Box垂直方向的距离由margin决定。\
			属于同一个BFC的两个相邻Box的margin会发生叠加每个元素的margin box的左边， 与包含块border box\
			的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。BFC的区域不会与float box叠加。\
			BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。计算BFC的高度时，\
			浮动元素也参与计算。'
		].join('')),
	js7 : marked([
			'### 函数柯里化.\n\n',
			'函数柯里化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，\
			并且返回接受余下的参数而且返回结果的新函数的技术。\n\n',
			'柯里化函数通常有以下不走动态创建：调用另一个函数并为它传入要柯里化的函数和必要参数。\n\n',
			'创建柯里化函数的通用方式：\n\n',
			'```js\n	function curry(fn){\n		var args = Array.prptotype.slice.call(arguments,1);\n',
			'		return function(){\n			var innerArgs = Array.prptotype.slice.call(arguments);\n',
			'			var finalArgs = args.concat(innerArgs);\n		};\n	}\n```\n\n'
		].join('')),
	js8 : marked([
			'### 函数节流.\n\n',
			'函数节流的基本思想是指：某些代码不可在没有间断的情况连续重复执行。可以用setTimeout来完成，第一次调用函数，创建一个\
			定时器，在指定的时间间隔之后运行代码。当第二次调用该函数时，它会清除前一次的定时器并设置另一个。\n\n',
			'在jq中可以用setTimeout+one()来完成：\n\n',
			'```html\n	$("#id").one("mousewheel",fn);\n	function fn(){\n		//执行的代码 \n		setTimeout(function(){\n',
            '			$("#id").one("mousewheel",mousewheelfn);\n		},800);\n	}```\n\n',
            '不过在使用mousewheel事件时，要注意做兼容，Opera、Chrome、Safari支持该事件，Firefox不支持；\
            Firefox浏览器支持的是DOMMouseScroll的类似事件，在鼠标滚轮滚动的时候触发。'
		].join('')),
	js9 : marked([
			'### 性能更好的js动画实现方式——requestAnimationFrame.---转（无双：http://www.cnblogs.com/2050）\n\n',
			'用js来实现动画，我们一般是借助setTimeout或setInterval这两个函数，\
			css3动画出来后，我们又可以使用css3来实现动画了，而且性能和流畅度也得到了很大的提升。但是css3动画还是有不少局限性，\
			比如不是所有属性都能参与动画、动画缓动效果太少、无法完全控制动画过程等等。所以有的时候我们还是不得不使用setTimeout或\
			setInterval的方式来实现动画，可是setTimeout和setInterval有着严重的性能问题，虽然某些现代浏览器对这两函个数进行了一些优化，\
			但还是无法跟css3的动画性能相提并论。这个时候，就该requestAnimationFrame出马了。\n\n',
			'requestAnimationFrame 是专门为实现高性能的帧动画而设计的一个API，目前已在多个浏览器得到了支持，\
			包括IE10+，Firefox，Chrome，Safari，Opera等，在移动设备上，ios6以上版本以及IE mobile 10以上也支持\
			requestAnimationFrame，唯一比较遗憾的是目前安卓上的原生浏览器并不支持requestAnimationFrame，\
			不过对requestAnimationFrame的支持应该是大势所趋了，安卓版本的chrome 16+也是支持requestAnimationFrame的。\n\n',
			'#### requestAnimationFrame 比起 setTimeout、setInterval的优势主要有两点：\n\n',
			'1、requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，\
			并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧。\n\n',
			'2、在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的的cpu，gpu和内存使用量。\n\n',
			'像setTimeout、setInterval一样，requestAnimationFrame是一个全局函数。调用requestAnimationFrame后，\
			它会要求浏览器根据自己的频率进行一次重绘，它接收一个回调函数作为参数，在即将开始的浏览器重绘时，会调用这个函数，\
			并会给这个函数传入调用回调函数时的时间作为参数。由于requestAnimationFrame的功效只是一次性的，所以若想达到动画效果，\
			则必须连续不断的调用requestAnimationFrame，就像我们使用setTimeout来实现动画所做的那样。\
			requestAnimationFrame函数会返回一个资源标识符，可以把它作为参数传入cancelAnimationFrame函数来取消\
			requestAnimationFrame的回调。怎么样，是不是也跟setTimeout的clearTimeout很相似啊。\n\n',
			'所以，可以这么说，requestAnimationFrame就是一个性能优化版、专为动画量身打造的setTimeout，\
			不同的是requestAnimationFrame不是自己指定回调函数运行的时间，而是跟着浏览器内建的刷新频率来执行回调，\
			这当然就能达到浏览器所能实现动画的最佳效果了。\n\n',
			'目前，各个支持requestAnimationFrame的浏览器有些还是自己的私有实现，所以必须加前缀，对于不支持requestAnimationFrame的浏览器，\
			我们只能使用setTimeout，因为两者的使用方式几近相同，所以这两者的兼容并不难。对于支持requestAnimationFrame的浏览器，\
			我们使用requestAnimationFrame，而不支持的我们优雅降级使用传统的setTimeout。把它们封装一下，\
			就能得到一个统一兼容各大浏览器的API了。\n\n',
			'代码可以到这里来查看：`https://gist.github.com/chaping/88813f56e75b0fd43f8c`.\n\n'
		].join('')),
	js10 : marked([
			'### 跨域及跨域问题解决.\n\n',
			'跨域问题是由于javascript语言安全限制中的同源策略造成的.\n\n',
			'同源策略是指一段脚本只能读取来自同一来源的窗口和文档的属性,这里的同一来源指的是主机名、协议和端口号的组合.\n\n',
			'### 解决跨域的方案\n\n',
			'#### 图像Ping\n\n',
			'使用动态创建图像，使用onload和onerror事件处理程序来确定是否接收到响应，添加src属性值是是一个URL；例：\n\n',
			'```\nvar img = new Image();\nimg.onload = img.onerror = function(){\n	alert("done");\n};\n',
			'img.src = "http://www.example.com/test?name=Nice";```\n\n',
			'图像Ping这种方式的优点很明显：兼容性非常好。\n\n',
			'不过图像Ping有两个主要的缺点，一是只能发送GET请求的时候才能用，二是无法访问服务器的响应文本。因此，图像Ping\
			只能用于浏览器与服务器间的单向通信。\n\n',
			'#### JSONP\n\n',
			'#### Comet\n\n',
			'#### 服务器发送事件（SSE）\n\n',
			'#### Web Sockets\n\n'
		].join('')),
	js11 : marked([
			'### 设计模式-工厂模式.\n\n',
  			'工厂模式是一种实现“工厂”概念的面上对象设计模式。实质是定义一个创建对象的接口，\
  			但是让实现这个接口的类来决定实例化哪个类。工厂方法让类的实例化推迟到子类中进行\n\n',
  			'```\n	function createPerson(name,age,job){\n		var o = new Object();\n		o.name = name;\n',
  			'		o.age = age;\n		o.job = job;\n		o.sayName = function(){\n			alert(this.name);\n',
  			'		};\n		return o;	}\n	var per1 = createPerson("Sheel",22,"Student");\n',
  			'	var per2 = createPerson("Sheel-d",22,"student");```\n\n',
  			'优点缺点'
		].join('')),
	js12 : marked([
			'### 设计模式-构造函数模式.\n\n',
			'ECMAScript中的构造函数的可用来创建特定的类型的对象，\
  			也可以创建自定义的构造函数，从而定义自定义对象类型的属性和方法。\n\n',
  			'```\n	function Person(name,age,job){\n		this.name = name;\n		this.age = age;\n',
  			'		this.job = job;\n		this.sayName = function(){\n			alert(this.name);\n',
  			'		};\n	}\n	var per1 = new Person("sheel",22,"student");\n',
  			'	var per2 = new Person("sheel-d",22,"student");```\n\n',
  			'与工厂模式的区别：没有显示的创建对象；直接将属性和方法赋给了this对象；没有return语句。\n\n',
  			'使用构造函数时需要注意：按照惯例，函数名的首字母；使用new创建对象；能够识别对象；\n\n',
  			'优点缺点：缺点->使用构造函数的最大的问题在于每次创建实例的时候都要重新创建一次方法\n\n'
		].join('')),
	js13 : marked([
			'### 设计模式-原型模式.\n\n',
			'我们创建的每个函数都有prototype（原型）属性，这个属性是一个指针，指向一个对象，\
  			而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。\
  			使用原型对象的好处就是可以让所有对象实例共享它所包含的属性及方法。\n\n',
  			'```\n	function Per(){}\n	Per.prptotype.name = "sheel";\n',
  			'	Per.prptotype.age = 22;\n	Per.prptotype.job = "student";\n',
  			'	Per.prptotype.sayName = function(){\n		alert(this.name);\n	};\n',
  			'	var per1 = new Per();\n	per1.sayName();```\n\n',
  			'原型模式也不是没有缺点，首先，它省略了构造函数传递初始化参数这一环节，\
  			结果所有实例在默认情况下都取得了相同的属性值，这样非常不方便，但这还是不是原型的最大问题，\
  			原型模式的最大问题在于共享的本性所导致的，由于共享，因此因此一个实例修改了引用，\
  			另一个也随之更改了引用。因此我们通常不单独使用原型，而是结合原型模式与构造函数模式。\n\n'
		].join('')),
	js14 : marked([
			'### 设计模式-混合模式.\n\n',
			'混合模式中构造函数模式用于定义实例属性，而原型模式用于定义方法和共享属性。\
  			每个实例都会有自己的一份实例属性，但同时又共享着方法，最大限度的节省了内存。\
  			另外这种模式还支持传递初始参数。优点甚多。这种模式在ECMAScript中是使用最广泛、\
  			认同度最高的一种创建自定义对象的方法。'
		].join('')),
	H5C3_1 : marked([
			'### localStorage和sessionStorage的区别和联系.\n\n',
			'localStorage和sessionStorage一样都是用来存储客户端临时信息的对象。\n\n',
			'localStorage生命周期是永久，除非用户显示在浏览器提供的UI上清除localStorage信息，否则使用localStorage保存的信息将永远存在。\n\n',
			'sessionStorage生命周期为当前窗口或标签页，一旦窗口或标签页被永久关闭了，那么所有通过sessionStorage存储的数据也就被清空。\
			第二次在打开窗口时，就不会有上一次打开窗口所保存的信息。\n\n',
		].join('')),
	H5C3_2 : marked([
			'### web storage和cookie的区别.\n\n',
			'Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。\
			Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发送过去，\
			这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。\n\n',
			'除此之外，Web Storage拥有setItem,getItem,removeItem,clear等方法，\
			不像cookie需要自己封装setCookie，getCookie。\n\n',
			'Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在，而Web Storage仅仅是为了在本地“存储”数据而生。'
		].join('')),
	H5C3_3 : marked([
			'### css3的新特性.\n\n',
			'1. CSS3实现圆角（border-radius），阴影（box-shadow）\n\n',
			'2. 对文字加特效（text-shadow、），线性渐变（gradient），旋转（transform）\n\n',
			'3. transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);// 旋转,缩放,定位,倾斜\n\n',
			'4. 增加了更多的CSS选择器  多背景 rgba \n\n',
			'5. 在CSS3中唯一引入的伪元素是 ::selection.\n\n',
			'6. 媒体查询，多栏布局\n\n',
			'7. border-image\n\n'
		].join('')),
	H5C3_4 : marked([
			'### Css3实现动画的方式.\n\n',
			'#### Transitions\n\n',
			'特点：平滑的改变CSS的值\n\n',
			'#### transforms\n\n',
			'特点：变换主要实现（拉伸，压缩，旋转，偏移）\n\n',
			'#### Animations\n\n',
			'特点：适用于CSS2，CSS3\n\n'
		].join('')),
	H5C3_5 : marked([
			'### 弹性盒模型.\n\n',
			'弹性布局（flexible box）模块（目前是w3c候选的推荐）旨在提供一个更加有效的方式来布置，对齐和分布在容器之间的各项\
			内容，即使它们的大小是未知或者动态变化的。弹性布局的主要思想是让容器有能力来改变项目的宽度和高度，以填满可用空间\
			（主要是为了容纳所有类型的显示设备和屏幕尺寸）的能力。最重要的是弹性盒子布局与方向无关，相对于常规的布局（块是垂直和内联水平为基础），\
			很显然，这些工作以及网页设计缺乏支持大型和复杂的应用程序（特别当它涉及到改变方向，缩放、拉伸和收缩等）。\n\n',
			'由于flexbox是一个整体模块，而不是单一的一个属性，它涉及到了很多东西，包括它的整个属性集。它们之中有一些是在父容\
			器上设置，而有一些则是在子容器上设置。\n\n',
			'#### 属性介绍：\n\n',
			'`display: flex | inline-flex;` (适用于父类容器元素上):定义一个flex容器，内联或者根据指定的值，来作用于下面的子类容器.\n\n',
			'`flex-direction `(适用于父类容器的元素上): 设置或检索伸缩盒对象的子元素在父容器中的位置。\n\n',
			'`flex-wrap` (适用于父类容器上):设置或检索伸缩盒对象的子元素超出父容器时是否换行。\n\n',
			'`flex-flow `(适用于父类容器上):复合属性。设置或检索伸缩盒对象的子元素排列方式。\n\n',
			'`justify-content` (适用于父类容器上):设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。\n\n',
			'`align-items` (适用于父类容器上):设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式。\n\n',
			'`align-content` (适用于父类容器上):设置或检索弹性盒堆叠伸缩行的对齐方式。\n\n',
			'`flex-grow` (适用于弹性盒模型容器子元素):设置或检索弹性盒的扩展比率。\n\n',
			'`flex-shrink` (适用于弹性盒模型容器子元素):设置或检索弹性盒的收缩比率（根据弹性盒子元素所设置的收缩因子作为比率来收缩空间）。\n\n',
			'`flex-basis` (适用于弹性盒模型容器子元素):设置或检索弹性盒伸缩基准值。\n\n',
			'`flex` (适用于弹性盒模型子元素):复合属性。设置或检索伸缩盒对象的子元素如何分配空间。\n\n',
			'`align-self` (适用于弹性盒模型子元素):设置或检索弹性盒子元素自身在侧轴（纵轴）方向上的对齐方式。\n\n',
		].join('')),
	react1 : marked([
			'### react初学.\n\n'
		].join('')),
	ES2015_1 : marked([
			'### es6初学.\n\n'
		].join('')),
	node1 : marked([
			'### node初学.\n\n'
		].join(''))
};

export {workData,workTitleData,workContentData};

