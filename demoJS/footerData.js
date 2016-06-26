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

var footerData = [
	{
	 	url : './img/object-1.jpg',
	 	title : '静谧网-首页',
	 	content : '2016-6-15',
	},
	{
	 	url : './img/object-4.jpg',
	 	title : '静谧网-论坛',
	 	content : '2016-6-15',
	}
];
var textData = {
	text : marked([
			'本来这里是想放一些作品的，由于博主还是一个技术很`low`的前端攻城狮，',
			'没有好的作品可以展示，只能将做过的一个项目，分成两个模块来展示了，',
			'以后我会多做一些作品，放在这里展示，供游客观看、点评。\n\n',
			'这是博主建立的一个前端攻城狮技术讨论群：有兴趣的可以加，大家一起探讨技术！！',
			'也可以给我发邮件，这是我的邮箱：1103314650@qq.com！！(^_^)'
		].join(''))
}

export {footerData,textData};