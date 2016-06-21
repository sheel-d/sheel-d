
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
				'### CSS引入的方式有哪些? link和@import的区别.\n\n',
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
			'### 清除浮动的几种方式，各自的优缺点.\n\n',
			'```js\nvar React = require(\'react\');\nvar Markdown = require(\'react-markdown\');',
				'\n\nReact.render(\n    <Markdown source="# Your markdown here" />,\n    document.',
				'getElementById(\'content\')\n);\n```'
		].join(''))
	/*htmlCss3 : marked([
			'### css图标与图片图标的区别.\n\n'
		]).join(''),
	htmlCss4 : marked([
			'### display:none;与overflow:hidden的区别.\n\n'
		].join('')),
	htmlCss5 : marked([
			'### Css盒模型.\n\n'
		]),
	js1 : marked([
			'### 闭包.\n\n'
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
			'### localStorage和sessionStorage的区别和联系.\n\n'
		].join('')),
	H5C3_2 : marked([
			'### web storage和cookie的区别.\n\n'
		].join('')),
	H5C3_3 : marked([
			'### css3 animation.\n\n'
		].join('')),
	H5C3_4 : marked([
			'### Css3实现动画的方式有哪些.\n\n'
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
		].join(''))*/
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
