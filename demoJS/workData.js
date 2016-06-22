
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
			title : '跨域',
			id: 'js10', 
			num : '10'
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
			title : 'css3 animation',
			id : 'H5C3_3', 
			num : '3'
		},
		{
			title : 'Css3实现动画的方式有哪些',
			id : 'H5C3_4', 
			num : '4'
		},
		{
			title : '弹性盒模型',
			id: 'H5C3_5', 
			num : '5'
		}
	],
	react : [
		{
			title : '这是第一条react数据',
			id : 'react1',
			num : '1'
		}
	],
	es6 : [
		{
			title : '这是第一条ES2015_数据',
			id : 'ES2015_1',
			num : '1'
		}
	],
	node : [
		{
			title : '这是第一条node数据',
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
			'### oop编程.\n\n'
		].join('')),
	js3 : marked([
			'### ajax.\n\n'
		].join('')),
	js4 : marked([
			'### jsonp.\n\n'
		].join('')),
	js5 : marked([
			'### js事件流.\n\n'
		].join('')),
	js6 : marked([
			'### BFC.\n\n'
		].join('')),
	js7 : marked([
			'### 函数柯里化.\n\n'
		].join('')),
	js8 : marked([
			'### 函数节流.\n\n'
		].join('')),
	js9 : marked([
			'### js动画.\n\n'
		].join('')),
	js10 : marked([
			'### 跨域.\n\n'
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
			'### css3 animation.\n\n'
		].join('')),
	H5C3_4 : marked([
			'### Css3实现动画的方式.\n\n'
		].join('')),
	H5C3_5 : marked([
			'### 弹性盒模型.\n\n'
		].join('')),
	react1 : marked([
			'### 标题1.\n\n'
		].join('')),
	ES2015_1 : marked([
			'### 标题1.\n\n'
		].join('')),
	node1 : marked([
			'### 标题1.\n\n'
		].join(''))
};

export {workData,workTitleData,workContentData};

/*'# Markdown demo\n\nChanges are automatically rendered as you type.\n\n* Follows the ',
'[CommonMark](http://commonmark.org/) spec\n* Renders actual, "native" React DOM ',
'elements\n* Allows you to escape or skip HTML (try toggling the checkboxes above)',
'\n* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n',
'\n## HTML block below\n\n<blockquote>\n    This blockquote will change based ',
'on the HTML settings above.\n</blockquote>\n\n## How about some code?\n',
'```js\nvar React = require(\'react\');\nvar Markdown = require(\'react-markdown\');',
'\n\nReact.render(\n    <Markdown source="# Your markdown here" />,\n    document.',
'getElementById(\'content\')\n);\n```\n\nPretty neat, eh?\n\n', '## More info?\n\n',
'Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)\n\n',
'---------------\n\n',
'A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal'*/
